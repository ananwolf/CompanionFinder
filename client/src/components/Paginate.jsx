import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Paginate = ({ pages, setPages, setAnimals }) => {
  const { current_page, total_pages } = pages;

  const getPage = (pageType) => {
    pageType = pageType === 'next' ? {page: pages._links.next.href} : {page: pages._links.previous.href}
    axios.get('/pages', {params: pageType})
    .then((response) => {
      setAnimals(response.data.animals.sort((a, b) => a.distance - b.distance));
      setPages(response.data.pagination);
    })
    .then(window.scrollTo({ top: 0, behavior: "smooth" }))
    .catch((err) => {
      console.error(`err at client's Paginate ${err}`);
    });
  };

  const buttonStyle = {
    margin: "10px 10px",
  };
  const disabledButton = {
    margin: "10px 10px",
    opacity: "0"
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      {current_page > 1 && current_page <= total_pages
      ? <Button style={buttonStyle} onClick={() => getPage('prev')} variant="secondary">
        Previous
        </Button>
      : <Button style={disabledButton} variant="secondary" disabled>
        Previous
        </Button>}
      {current_page && current_page !== total_pages
      ? <Button style={buttonStyle} onClick={() => getPage('next')} variant="secondary">
        Next
        </Button>
      : <Button style={disabledButton} variant="secondary" disabled>
        Next
        </Button>}
    </div>
  )
};

export default Paginate;