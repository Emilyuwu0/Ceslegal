import React, { useState, useEffect } from "react";
import Arrow from "../../assets/arrow.png";
import "../../styles/variables.css"
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const PaginationCommon = (props) => {
  const {
    totalRecords,
    pageLimit,
    pageNeighbours,
    onPageChanged,
    currentPage,
  } = props;
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [currentPage]);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];
  return (
    <div className="max-w-sm bg-white m-auto flex shadow-md rounded-md p-2">

      {pages.map((page, index) => {
        return (
          <>
            {" "}
            {/* <div disabled={currentPage <= 0}>
              <button
                onClick={(e) => onPageChanged(e, currentPage - 1)}
                aria-label="Previous"
                previous
              >
                <img src={Arrow} alt="arrow" />
              </button>
            </div> */}
            <div active={currentPage === index} key={index} className="  flex m-auto text-center">
              <button onClick={(e) => onPageChanged(e, page)} className="bg-tertiary rounded-md px-4 py-2 flex m-auto row-auto hover:bg-pink-800 hover:text-white">{page}</button>
            </div>{" "}
         {/*    <div disabled={currentPage >= totalPages - 1}>
              <button
                onClick={(e) => onPageChanged(e, currentPage + 1)}
                aria-label="Next"
                next
              >
                next
              </button>
            </div> */}
          </>
        );
      })}
    </div>
  );
};

export default PaginationCommon;
