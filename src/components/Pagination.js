import React, { useState, useEffect } from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  allProducts = [],
}) => {
  const [productsArray, setProductsArray] = useState([]);
  const [range, setRange] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [minimumPage, setMinimumPage] = useState(0);
  const [maximumPage, setMaximumPage] = useState(minimumPage + range);

  useEffect(() => {
    setProductsArray(allProducts);
    let range =
      Math.ceil(productsArray.length / productsPerPage) > 10
        ? 10
        : Math.ceil(productsArray.length / productsPerPage);
    setRange(range);
    setMaximumPage(minimumPage + range);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsArray]);

  useEffect(() => {
    let pageArrayTemp = [];
    for (let i = 0; i <= maximumPage; i++) {
      pageArrayTemp.push(minimumPage + i + 1);
      console.log(pageArrayTemp);
      if (pageArrayTemp.length > 10) {
        pageArrayTemp.pop();
      }
    }
    if (
      maximumPage === range &&
      pageArrayTemp[pageArrayTemp.length - 1] > maximumPage
    ) {
      pageArrayTemp.pop();
      console.log("estoy entrando");
    }
    console.log(pageArrayTemp);
    setPageNumbers(pageArrayTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minimumPage, range]);

  const displayPageNumbers = pageNumbers.map((number) => (
    <li className="page-item" aria-current="page" key={number}>
      <button
        className="page-link"
        href="#"
        id={number}
        onClick={(event) => {
          setCurrentPage(Number(event.target.id));
        }}
      >
        {number}
        <span className="sr-only">(current) </span>
      </button>
    </li>
  ));

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul
          className="pagination justify-content-center"
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          {minimumPage > 0 ? (
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setMinimumPage(minimumPage - 1);
                }}
              >
                Anterior
              </button>
            </li>
          ) : null}

          {displayPageNumbers}

          {maximumPage !== Math.ceil(productsArray.length / productsPerPage) ? (
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setMinimumPage(minimumPage + 1);
                }}
              >
                Siguiente
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
