import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  loading,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        className={`px-4 py-2 rounded ${
          currentPage === 1 || loading
            ? "bg-gray-300"
            : "bg-blue-500 text-white"
        }`}
        onClick={handlePreviousClick}
        disabled={currentPage === 1 || loading}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(page)}
          disabled={loading}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded ${
          currentPage === totalPages || loading
            ? "bg-gray-300"
            : "bg-blue-500 text-white"
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages || loading}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
