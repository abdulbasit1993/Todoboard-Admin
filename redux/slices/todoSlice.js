import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async ({ page = 1, limit = 10, userId, status = 'pending' }, { rejectWithValue }) => {
    try {
      const response = await api.get(userId ? `/todos?page=${page}&limit=${limit}&userId=${userId}` : status ? `/todos?page=${page}&limit=${limit}&status=${status}` : `/todos?page=${page}&limit=${limit}`);

      if (response?.success) {
        return response;
      } else {
        throw new Error("Failed to fetch todos");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
