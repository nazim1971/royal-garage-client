import { Button, Col, Collapse, Row } from "antd";
import Carosel from "./Carosel";
import FeatureProduct from "./FeatureProduct";
const { Panel } = Collapse;
import '../../styles/Accodian.css'

const Home = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto'}}>
      <Carosel />

      <div style={{ textAlign: "center" , padding: "40px "}}>
        <h1 style={{ paddingBottom: "10px" }}>
          DISCOVER THE Royal-Garage RANGE
        </h1>
        <p style={{ color: "GrayText" }}>
          Explore the Royal-Garage range for innovative design, advanced
          technology, reliability and exceptional performance
        </p>
      </div>
      <FeatureProduct />

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',paddingTop: '40px' }}>
        <div style={{height: '450px', paddingBottom: '20px'}}>
          <img
          style={{
            height: '100%',
            width: '100%'
          }}
            src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738507667/Test-Ride-Banner-B_pnr2qi.webp"
            alt=""
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
          <h1 style={{ paddingBottom: "10px" }}>
            Request a Motorcycle Test Ride
          </h1>
          <p style={{ color: "GrayText", width: '80%' }}>
            Schedule a free motorcycle test ride on a Suzuki bike at your local
            dealer. Test ride a motorcycle to learn which is the right bike for
            you.
          </p>
        </div>
      </div>



{/* Service */}
      <div style={{ height: '500px', display:'flex', alignItems: 'center', textAlign: 'center',backgroundColor: '#182955', color: 'white', padding: '20px', margin: '30px 0px' }}>
  <Row
    gutter={[16, 16]} // Spacing between columns and rows
    justify="center" // Center content horizontally
    align="middle" // Align items vertically
  >
    {/* First Column - Text Content */}
    <Col xs={24} md={12}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , gap: '10px', textAlign: 'center'}}>
        <h1>SERVICES</h1>
        <p style={{width: '80%', textAlign: 'center'}}>
          At the Suzuki Service Center, we're committed to keeping your Suzuki
          in peak condition.
        </p>
        <Button
          style={{
            color: 'white',
            backgroundColor: '#00368f',
            borderRadius: '16px',
            border: 'none',
            padding: '10px 20px',
            width: '65%'
          }}
        >
          CHOOSE YOUR PACKAGE
        </Button>
      </div>
    </Col>

    {/* Second Column - Image */}
    <Col xs={24} md={12}>
      <div>
        <img
          src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738572791/Service-Banner-E_tdiq7d.webp"
          alt="Service Banner"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>
    </Col>
  </Row>
</div>

      <section className="accordion-section" style={{padding:'40px 0px'}}>
            <h2>Customer Testimonials</h2>
            <Collapse accordion>
                <Panel header="John Doe - Happy Customer" key="1">
                    <p>"I had an amazing experience shopping at this store. The team helped me find the perfect bike, and the customer service was top-notch. I highly recommend them to anyone looking for a new ride!"</p>
                </Panel>
                <Panel header="Jane Smith - Satisfied Rider" key="2">
                    <p>"Great selection of bikes and very knowledgeable staff. I was able to find the perfect motorcycle for my needs. I'll definitely be back for my next purchase!"</p>
                </Panel>
                <Panel header="Mark Wilson - Enthusiast" key="3">
                    <p>"The service here is excellent. They answered all my questions and made the buying process easy and enjoyable. Highly recommend this place for anyone looking to buy a bike!"</p>
                </Panel>
            </Collapse>
        </section>
    </div>
  );
};

export default Home;
