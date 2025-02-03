import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: '#182955',
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Main Content */}
      <Row justify="center">
        <Col span={24}>
          <div style={{ marginBottom: "20px" }}>
            <img style={{height: '100px', width: '100px', borderRadius: '100%'}} src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738346961/Black_Retro_Motorcycle_Circle_Logo_1_tuxsuh.png" alt="" />
            <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "24px" }}>
             Royal-Garage
            </h3>
            <p style={{ color: "#ccc", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
              Delivering quality products & services with passion and integrity.
            </p>
          </div>
        </Col>
      </Row>

      {/* Links and Contact */}
      <Row justify="center" gutter={[16, 32]}>
        {/* Quick Links */}
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "12px" }}>Quick Links</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Home", "About Us", "Services", "Contact"].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="/"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#40a9ff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>

        {/* Contact Us */}
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "12px" }}>Contact Us</h4>
          <ul style={{ listStyleType: "none", padding: 0, color: "#ccc" }}>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@royagarage.com</li>
            <li>Address: Mohammadpur, Dhaka</li>
          </ul>
        </Col>

        {/* Follow Us */}
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "12px" }}>Follow Us</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Facebook", "Twitter", "Instagram"].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#40a9ff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Footer Bottom */}
      <div style={{ marginTop: "30px", color: "#ccc", fontSize: "14px" }}>
        © {new Date().getFullYear()} Royal-Garage. All rights reserved.
      </div>
    </Footer>
  );
};

export default AppFooter;
