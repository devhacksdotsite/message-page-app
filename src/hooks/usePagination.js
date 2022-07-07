import { useState, useEffect } from "react";

export const usePagination = (data, numberPerPage) => {
  const [rowsToDisplay, setRowsToDisplay] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setRowsToDisplay(() => {
      let start = 0;
      if (currentPage !== 1) {
        start = currentPage * numberPerPage - numberPerPage;
      }
      return data.slice(start, start + numberPerPage);
    });
  }, [currentPage, data]);
  return {
    current: rowsToDisplay,
    numberPerPage,
    totalPages: Math.ceil(data.length / numberPerPage),
    totalItems: data.length,
    currentPage,
    setCurrentPage,
  };
};
