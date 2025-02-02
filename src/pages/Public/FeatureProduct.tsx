import { Button, Card, Col, Row, Image, Tag, Spin } from "antd";
import { useGetAllProductQuery } from "../../redux/features/admin/productApi";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/products.types";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<TProduct[]>([]);
  const { data: products, isFetching, isError } = useGetAllProductQuery(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (products?.data) {
      setFeaturedProducts(products.data.slice(0, 6)); // Display only 6 products
    }
  }, [products]);

  if (isFetching) {
    return <div style={{textAlign: 'center', padding: '40px'}}>
        <Spin/>
    </div>;
  }

  if (isError) {
    return <p>Error loading products. Please try again later.</p>;
  }

  return (
    <div>
      {/* Product Cards Section */}
      <Row gutter={[16, 16]} justify="start">
        {featuredProducts.length ? (
          featuredProducts.map((i) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              xl={6}
              xxl={4}
              key={i._id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                title={i?.name}
                bordered={false}
                style={{
                  width: '350px',
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "transform 0.3s",
                }}
              >
                <Image
                  width={'100%'}
                  height={'250px'}
                  style={{ borderRadius: '8px' }}
                  preview={false}
                  src={i?.image || "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738506391/skeleton-rigind-motorbike_1415-115_sfkmgs.avif"}
                  alt={i?.name}
                />

                {/* Category tag */}
                <Tag
                  style={{
                    backgroundColor: "#E0F7FA",
                    borderRadius: "5px",
                    padding: "4px 8px",
                    fontSize: "14px",
                    marginTop: "10px",
                    width: '80px',
                    textAlign: 'center',
                  }}
                >
                  {i?.category}
                </Tag>

                <hr style={{ border: "0.5px solid #e8e8e8", margin: "10px 0" }} />

                <p style={{ color: 'GrayText', fontSize: '18px', paddingBottom: '20px' }}>
                  Brand: {i?.brand}
                </p>

                <Tag
                  style={{
                    backgroundColor: i?.inStock ? "#D0F9D7" : "#FAD4D4",
                    color: i?.inStock ? "#389e0d" : "#cf1322",
                    borderRadius: "5px",
                    padding: "4px 8px",
                    fontSize: "14px",
                  }}
                >
                  {i?.inStock ? "In Stock" : "Out of Stock"}
                </Tag>

                <p style={{ fontSize: '22px', fontWeight: 'bold', padding: '10px 0px' }}>
                  {i?.price} USD
                </p>
                <Button
                  type="primary"
                  onClick={() => navigate(`/product-details/${i?._id}`)}
                >
                  View details
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: "center" }}>
            <h2>No Products Found</h2>
          </Col>
        )}
      </Row>

      {/* View All Products Button */}
      <Row justify="center" style={{ marginTop: '40px' }}>
        <Button type="primary" onClick={() => navigate("/all-products")}>
          View All Products
        </Button>
      </Row>
    </div>
  );
};

export default FeaturedProducts;
