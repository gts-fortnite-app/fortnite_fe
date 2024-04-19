const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className="pagination-previous"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              href="#"
              className={number === currentPage ? "pagination-link is-current" : "pagination-link"}
              onClick={() => handleClick(number)}
              >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

