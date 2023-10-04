import PaginationItem from './PaginationItem';

const Pagination = ({ currentPage, sort }) => {
  return (
    <div className="flex gap-2 self-center mt-10">
      {currentPage == 1 ? null : (
        <PaginationItem pageNum={currentPage - 1} sort={sort} />
      )}
      <PaginationItem pageNum={currentPage} sort={sort} />
      <PaginationItem pageNum={currentPage + 1} sort={sort} />
      {currentPage == 1 ? (
        <PaginationItem pageNum={currentPage + 2} sort={sort} />
      ) : null}
    </div>
  );
};

export default Pagination;
