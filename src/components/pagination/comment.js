import React from "react";

const Comment = ({ comments }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3  sm:p-28 mb-12 sm:mb-14">
      {comments.map((index) => (
        <div className=" bg-white p-4 rounded-md shadow-md" key={index.id}>
          <span className="text-left  font-bold block text-lg mb-4">{index.title}</span>
          <span className="text-left block mb-14">{index.subTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
