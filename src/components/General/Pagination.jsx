export default function Pagination({
    numberPerPage,
    totalPages,
    totalItems,
    currentPage,
    setCurrentPage,
  }) {
    return (
      <>
        {/* <!-- desktop paging --> */}
        <div className="hidden lg:flex justify-end items-center">
          <div className="text-sm text-ui-gray whitespace-nowrap">
            Showing{" "}
            {currentPage === 1
              ? "1"
              : currentPage * numberPerPage - (numberPerPage - 1)}
            -
            {currentPage === 1
              ? numberPerPage > totalItems
                ? totalItems
                : numberPerPage
              : currentPage * numberPerPage > totalItems
              ? totalItems
              : currentPage * numberPerPage}{" "}
            of {totalItems} items
          </div>
  
          {[...Array(totalPages)].map((n, pageIndex) => {
            if (pageIndex + 1 === currentPage) {
              return (
                <button
                  className="ui-btn-paging-current"
                  key={pageIndex}
                  onClick={() => {
                    setCurrentPage(pageIndex + 1);
                  }}
                >
                  {pageIndex + 1}
                </button>
              );
            }
            return (
              <button
                className="ui-btn-paging"
                key={pageIndex}
                onClick={() => {
                  setCurrentPage(pageIndex + 1);
                }}
              >
                {pageIndex + 1}
              </button>
            );
          })}
        </div>
        {/* <!-- desktop paging --> */}
  
        {/* <!-- mobile Paging --> */}
        <div className="flex justify-end items-center px-4 pb-4 lg:hidden">
          <div className="text-sm text-ui-gray whitespace-nowrap">
            {currentPage} of {totalPages}
          </div>
          <button
            className="h-8 w-8 flex justify-center items-center text-xs font-bold rounded-sm text-ui-gray-dark border border-ui-gray bg-white ml-2 hover:border-ui-blue hover:bg-ui-blue hover:text-white hover:shadow-drop"
            onClick={() =>
              setCurrentPage((curr) => (curr - 1 < 1 ? 1 : curr - 1))
            }
          >
            <svg
              className="ui-icon w-6 h-6 text-ui-blue hover:text-white"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <use href="#ui-icon-previous"></use>
            </svg>
          </button>
          <button
            className="h-8 w-8 flex justify-center items-center text-xs font-bold rounded-sm text-ui-gray-dark border border-ui-gray bg-white ml-2 hover:border-ui-blue hover:bg-ui-blue hover:text-white hover:shadow-drop"
            onClick={() => {
              setCurrentPage((curr) =>
                curr + 1 > totalPages ? totalPages : curr + 1
              );
            }}
          >
            <svg
              className="ui-icon w-6 h-6 text-ui-blue hover:text-white"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <use href="#ui-icon-next"></use>
            </svg>
          </button>
        </div>
        {/* <!-- mobile Paging --> */}
      </>
    );
  }
  