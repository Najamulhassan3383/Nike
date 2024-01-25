import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <p>We Provide You Super Quality Shoes</p>
        <p>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p>Our dedication to detail and excellence ensures your satisfaction</p>
        <Button  label="View Details"/>
      </div>
      <div>column two</div>
    </section>
  );
};

export default SuperQuality;
