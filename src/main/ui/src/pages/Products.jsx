import React from "react";
import Pagination from "react-bootstrap/Pagination";

// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

export default function Products({ product }) {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h1>Products</h1>
      
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
}
