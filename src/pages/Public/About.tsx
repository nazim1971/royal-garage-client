
import { Row, Col, Typography, Button, Image } from "antd";
import { useNavigate } from "react-router";
import { RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  const navigate = useNavigate();

  const handleNavigateToServices = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: '1200px', margin: 'auto' }}>
      <Row gutter={[16, 16]} justify="center" align="middle" style={{ marginBottom: "40px" }}>
        <Col xs={24} md={12} lg={10}>
          <Title level={1} style={{ color: "#00368f" }}>Welcome to Royal Garage</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            At <strong>Royal Garage</strong>, we’re not just passionate about motorcycles;
            we live and breathe them! Located in the heart of [Your City], we specialize in
            both <strong>modern and classic motorcycles</strong>, providing the best care,
            maintenance, and customer service for every bike that comes through our doors.
          </Paragraph>
          <Button
            type="primary"
            shape="round"
            icon={<RightOutlined />}
            size="large"
            onClick={handleNavigateToServices}
            style={{ backgroundColor: "#00368f", border: "none" }}
          >
            Explore Our Services
          </Button>
        </Col>
        <Col xs={24} md={12} lg={10}>
          <Image
            src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738572791/Service-Banner-E_tdiq7d.webp"
            alt="Royal Garage"
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <Image
            src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738576601/man-choosed-motorcycles-moto-shop-guy-black-jacket-manager-with-client_1157-43592_tcjzsm.avif"
            alt="Motorcycle Shop Interior"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Col>
        <Col xs={24} md={12} lg={16}>
          <Title level={2}>Our Story</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            Founded in [Year], Royal Garage was born out of a love for all things motorcycles. 
            Whether you're a seasoned rider or a newcomer to the world of two wheels, we offer 
            a space that welcomes everyone. Over the years, we’ve grown into a <strong>community hub</strong> 
            for motor enthusiasts where passion meets performance.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24}>
          <Title level={2}>Our Services</Title>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Title level={4}>Motorcycle Sales</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            We offer a wide range of motorcycles, from cutting-edge modern bikes to classic models 
            that stand the test of time.
          </Paragraph>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Title level={4}>Servicing & Repairs</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            Our expert mechanics provide routine maintenance, repairs, and upgrades to keep your bike 
            in peak performance.
          </Paragraph>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Title level={4}>Custom Work</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            Want a custom build or unique modifications? At Royal Garage, we make your dream bike a reality.
          </Paragraph>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Title level={4}>Spare Parts & Accessories</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            We stock genuine parts and the latest accessories to ensure your bike always looks and performs its best.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24}>
          <Title level={2}>Our Team</Title>
        </Col>
        <Col xs={24} lg={12}>
          <Paragraph style={{ fontSize: "16px" }}>
            At Royal Garage, our team of experienced mechanics and enthusiasts are always ready to provide 
            you with the best possible service. Whether it’s diagnosing a tricky engine issue, or helping you 
            choose your next bike, our staff is here to help.
          </Paragraph>
        </Col>
        <Col xs={24} lg={12}>
          <Image
            src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738572791/Service-Banner-E_tdiq7d.webp"
            alt="Royal Garage Team"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
