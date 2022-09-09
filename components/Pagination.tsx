import React from "react";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  limit: number;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalCount,
  limit,
}: Props) {
  const totalPage = Math.ceil(totalCount / limit);

  return (
    <div>
      <div>
        <button
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <BsArrow90DegLeft />
        </button>
        <div>{currentPage + 1}</div>
        <button
          disabled={currentPage >= totalPage - 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <BsArrow90DegRight />
        </button>
      </div>
      <div>
        {currentPage + 1} of {totalPage}
      </div>
    </div>
  );
}
