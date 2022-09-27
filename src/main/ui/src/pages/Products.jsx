import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, CardGroup, Stack, Card } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <h1 className="title" style={{ color: "#F55D15"}}>All products:</h1>

      {products.map((product, index) => (
        <Container className="my-3" key={index}>
          <Link to={`/products/${product.id}`}>
            <CardGroup className="col d-flex justify-content-center">
              <Stack direction="horizontal" gap={4}>
                <Card className="p-2">
                  <Card.Img variant="top" src={product.image} style={{}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle>{product.category.name}</Card.Subtitle>
                    <Card.Subtitle>{product.price}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Stack>
            </CardGroup>
          </Link>
        </Container>
      ))}
    </>
  );
}
