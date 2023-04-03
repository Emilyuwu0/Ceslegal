import React, { useState, useCallback } from "react";
import PaginationCommon from "./pagination";
import Comment from "./comment";
const CommentWithPagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);

  let NUM_OF_RECORDS = data.length;
  let LIMIT = 9;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [currentPage]
  );
  const currentComments = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  return (
    <div className="pagination-wrapper">
      <Comment comments={currentComments} />
      <PaginationCommon
        totalRecords={NUM_OF_RECORDS}
        pageLimit={LIMIT}
        pageNeighbours={4}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CommentWithPagination;
