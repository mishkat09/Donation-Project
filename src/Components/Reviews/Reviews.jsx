import axios from "axios";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((data) => setReviews(data.data));
  }, [reviews]);

  return (
    <div className="container mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.comment}</p>
              <h3 className="text-2xl text-orange-400">{review.reviewer}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="">
          <ReviewForm></ReviewForm>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
