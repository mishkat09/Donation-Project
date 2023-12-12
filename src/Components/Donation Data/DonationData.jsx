import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationData = ({ data }) => {


  return (
    <div>
      <div>
        <div
          className="lg:flex w-[200px] lg:w-[750px] md:w-[320px] "
          style={{
            backgroundColor: data.category_bg,
          }}
        >
          <div>
            <img src={data.picture} alt="" className="h-full" />
          </div>
          <div className="space-y-5 mx-10 my-5">
            <h2
              className="w-[75px] h-[25px]  rounded-lg border text-center font-bold text-sm"
              style={{
                height: data.height,
                width: data.width,
                borderColor: data.text_button_bg,
                color: data.text_button_bg,
              }}
            >
              {data.category}{" "}
            </h2>
            <h1
              className="text-base font-semibold"
              style={{ color: data.text_button_bg }}
            >
              {data.price}
            </h1>
            <h1 className="font-semibold text-base">{data.title}</h1>
            <Link to={`/donation/${data._id}`}>
            <button 
              className="btn border-none text-white " 
              style={{
                backgroundColor: data.text_button_bg,
                marginBottom: "8px",
              }}
            >
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationData;
DonationData.propTypes = {
  data: PropTypes.object,
};
