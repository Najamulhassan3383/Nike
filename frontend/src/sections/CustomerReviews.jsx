import { star } from "../assets/icons";
import { reviews } from "../constants/index.js";
const CustomerReviews = () => {
  return (
    <section className="flex flex-col justify-center items-center max-container">
      <div className="mb-24">
        <h2 className="text-4xl font-bold font-palanquin mb-4">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text text-center max-w-lg m-auto mt-2">
          Hear genuine stories from our satisfied customers about
          <br />
          their exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-evenly items-center gap-14 lg:flex-row">
        {reviews.map((review) => (
          <div
            key={review.customerName}
            className="flex flex-col justify-center items-center "
          >
            <img
              src={review.imgURL}
              alt={review.name}
              width={100}
              height={100}
              className="rounded-full mb-6"
            />

            <p className="info-text  text-center">{review.feedback}</p>
            <div className="flex flex-row mt-4 gap-3">
              <img src={star} alt="star" width={23} height={23} />
              <p className="font-montserrat text-slate-gray text-lg pt-1  sm:max-w-sm">
                {" "}
                (4.5)
              </p>
            </div>

            <h3 className="text-3xl font-palanquin font-bold">
              {review.customerName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
