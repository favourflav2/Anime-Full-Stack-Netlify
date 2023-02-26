import React from "react";


export default function Pagination({
  currentPage,
  setCurrentPage,
  numberOfPages,
  dispatch,
}) {
  function renderPagination() {
    if (currentPage === numberOfPages && currentPage === 1) return null;

    if (currentPage === 1) {
      return (
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
              <li>
                <button
                  className="relative block rounded bg-transparent py-1.5 px-3 text-lg font-extrabold text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-red-600 dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )
    } else if (currentPage !== numberOfPages) {
      return (
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
              <li>
                <button
                 className="relative block rounded bg-transparent py-1.5 px-3 text-lg font-extrabold text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-red-600 dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                >
                  Prev
                </button>
              </li>

              <li>
                <button
                  className="relative block rounded bg-transparent py-1.5 px-3 text-lg font-extrabold text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-red-600 dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )
    } else if(currentPage === numberOfPages){
        return (
            <div className="flex justify-center">
              <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                  <li>
                    <button
                      className="relative block rounded bg-transparent py-1.5 px-3 text-lg font-extrabold text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-red-600 dark:hover:bg-neutral-700 dark:hover:text-white"
                      onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                    >
                      Prev
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          );
    }
    // else {
    //   return (
    //     <div className="flex justify-center">
    //       <nav aria-label="Page navigation example">
    //         <ul className="list-style-none flex">
    //           <li>
    //             <button
    //               className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
    //               onClick={() => dispatch(setCurrentPage(currentPage - 1))}
    //             >
    //               Prev
    //             </button>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   );
    // }
    
  }
  return <div className="my-5">{renderPagination()}</div>;
}
