"use client";

import React from "react";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store";

function PersistGateProvider({ children }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

export default PersistGateProvider;
