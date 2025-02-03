import { useState } from "react";
import { Button, Card, Image, message, Spin } from "antd";
import { useAddOrderMutation } from "../../redux/features/customer/OrderApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useGetProductByIdQuery } from "../../redux/features/admin/productApi";
import { useNavigate, useParams } from "react-router";
import { useGetAllOrderByEmailQuery } from "../../redux/features/admin/orderApi";

const OrderModel = () => {
  const { id } = useParams();
  const { data: productData, refetch: Prefetch } = useGetProductByIdQuery(id);
  const user = useAppSelector(selectCurrentUser);

    const {  refetch: Orefetch } = useGetAllOrderByEmailQuery(user?.email || "");

  const [addOrder] = useAddOrderMutation();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state for button spinner

  const navigate = useNavigate();

  const totalPrice = productData?.data?.price
    ? Number(productData?.data?.price) * quantity
    : 0;

  const handleOrderNow = async () => {
    if (!productData?.data?.inStock) {
      message.error("This product is out of stock right now.");
      return;
    }

    if (quantity > Number(productData?.data?.quantity)) {
      message.error(`Only ${productData?.data?.quantity} available right now.`);
      return;
    }

    const orderInfo = {
      email: user?.email,
      product: id,
      quantity,
      totalPrice,
    };

    try {
      setLoading(true); // Start the spinner
      const res = await addOrder(orderInfo);
      console.log(res);
      if (res?.error) {
        message.error("Failed to place order. Please try again.");
      } else {
        message.success("Order placed successfully!");
        Prefetch()
        Orefetch()
        navigate("/customer/view-order"); // Navigate to the desired URL
      }
    } catch (error) {
      message.error(
        "An error occurred while placing your order. Please try again."
      );
    } finally {
      setLoading(false); // Stop the spinner
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          maxWidth: "900px",
          width: "100%",
          padding: "20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Checkout
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            flexWrap: 'wrap',
            flexDirection: "row", // One column on large screens
          }}
        >
          {/* Product details */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              minWidth: "250px",
              alignItems: 'center'
              
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: "22px", fontWeight: "bold"}}>
                {productData?.data?.name}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#888",
                  marginBottom: "10px"
                }}
              >
                Brand: {productData?.data?.brand}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "green",
                  marginBottom: "20px"
                }}
              >
                Total: {totalPrice.toLocaleString()} USD
              </p>

              {/* Quantity controls */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  justifyContent: 'center'
                }}
              >
                <Button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  type="default"
                  style={{
                    fontSize: "18px",
                    width: "40px",
                    color: "white",
                    backgroundColor: "red",
                    
                  }}
                >
                  -
                </Button>
                <span style={{ margin: "0 15px", fontSize: "18px" }}>
                  {quantity}
                </span>
                <Button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(
                        Number(productData?.data?.quantity) || 1,
                        prev + 1
                      )
                    )
                  }
                  type="default"
                  style={{
                    fontSize: "18px",
                    width: "40px",
                    color: "white",
                    backgroundColor: "green",
                  }}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Order Now button with spinner */}
            <Button
              type="primary"
              onClick={handleOrderNow}
              style={{
                fontSize: "18px",
                padding: "12px 0",
                width: '160px',
                backgroundColor: productData?.data?.inStock
                  ? "black"
                  : "#d9d9d9",
                borderColor: productData?.data?.inStock ? "black" : "#d9d9d9",
                cursor: productData?.data?.inStock ? "pointer" : "not-allowed",
               
              }}
              disabled={!productData?.data?.inStock || loading}
            >
              {loading ? (
                <Spin />
              ) : productData?.data?.inStock ? (
                "Order Now"
              ) : (
                "Out of Stock"
              )}
            </Button>
          </div>

          {/* Image container */}
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
            }}
          >
            <Image
            preview ={false}
              src={
                productData?.data?.image ||
                "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738506391/skeleton-rigind-motorbike_1415-115_sfkmgs.avif"
              }
              style={{
                borderRadius: "10px",
                minWidth: "200px",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderModel;
