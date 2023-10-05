import PaginationItem from './PaginationItem';

const Pagination = ({ currentPage, sort }) => {
  const newSort = sort || 'popular';

  return (
    <div className="flex gap-2 self-center mt-10">
      {currentPage == 1 ? null : (
        <PaginationItem pageNum={currentPage - 1} sort={newSort} />
      )}
      <PaginationItem pageNum={currentPage} sort={newSort} />
      <PaginationItem pageNum={currentPage + 1} sort={newSort} />
      {currentPage == 1 ? (
        <PaginationItem pageNum={currentPage + 2} sort={newSort} />
      ) : null}
    </div>
  );
};

export default Pagination;
