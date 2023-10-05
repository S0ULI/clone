import PaginationItem from './PaginationItem';

const Pagination = ({ currentPage, sort }) => {
  const newSort = sort || 'popular';

  return (
    <div className="flex gap-2 self-center mt-8">
      {currentPage == 1 ? null : ( <PaginationItem pageNum={1} sort={newSort} /> )}

      {(currentPage > 3) ? (<span>...</span>) : null}

      {((currentPage == 1 )|| (currentPage == 2)) ? null : ( <PaginationItem pageNum={currentPage - 1} sort={newSort} /> )}
      <PaginationItem pageNum={currentPage} sort={newSort} cPage={true} />
      {<PaginationItem pageNum={currentPage + 1} sort={newSort} />}

      {((currentPage == 1) || (currentPage == 2)) ? ( <PaginationItem pageNum={currentPage + 2} sort={newSort} /> ) : null}
      {currentPage == 1 ? ( <PaginationItem pageNum={currentPage + 3} sort={newSort} /> ) : null}
    </div>
  );

  // totalPages can be found in params
  // return (
  //   <div className="flex gap-2 self-center mt-10">
  //     {currentPage == 1 ? null : ( <PaginationItem pageNum={1} sort={newSort} /> )}

  //     {(currentPage > 3) ? (<span>...</span>) : null}

  //     {currentPage == totalPages ? ( <PaginationItem pageNum={currentPage - 2} sort={newSort} /> ) : null}

  //     {((currentPage == 1 )|| (currentPage == 2)) ? null : ( <PaginationItem pageNum={currentPage - 1} sort={newSort} /> )}
  //     <PaginationItem pageNum={currentPage} sort={newSort} cPage={true} />
  //     {((currentPage == totalPages )|| (currentPage == totalPages - 1)) ? null : ( <PaginationItem pageNum={currentPage + 1} sort={newSort} /> )}

  //     {currentPage == 1 ? ( <PaginationItem pageNum={currentPage + 2} sort={newSort} /> ) : null}

  //     {(currentPage < (totalPages - 2)) ? (<span>...</span>) : null}

  //     {currentPage == totalPages ? null : ( <PaginationItem pageNum={totalPages} sort={newSort} /> )}
  //   </div>
  // );
};

export default Pagination;
