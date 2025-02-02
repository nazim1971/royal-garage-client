import { Collapse } from "antd";
import Carosel from "./Carosel";
import FeatureProduct from "./FeatureProduct";
const { Panel } = Collapse;
import '../../styles/Accodian.css'

const Home = () => {
  return (
    <>
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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <h1 style={{ paddingBottom: "10px" }}>
            Request a Motorcycle Test Ride
          </h1>
          <p style={{ color: "GrayText" }}>
            Schedule a free motorcycle test ride on a Suzuki bike at your local
            dealer. Test ride a motorcycle to learn which is the right bike for
            you.
          </p>
        </div>
      </div>

      <section className="accordion-section" style={{padding:'40px 20px'}}>
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
    </>
  );
};

export default Home;
