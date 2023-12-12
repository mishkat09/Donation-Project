import PropTypes from "prop-types";

const Banner = ({ handleSearchInputChange }) => {
    return (
      <div>
        <div className="">
        <div className='my-8 relative container mx-auto'>
      <img src="https://i.ibb.co/Jq2s638/backgound-Image.png" alt="" className="mb-[-20px] sm:mb-0" />
      <div className="absolute top-0 bottom-0 w-full  bg-white opacity-90 ">
      <h1 className="text-center text-[#0B0B0B] text-sm md:text-3xl lg:text-5xl font-extrabold md:mt-20 mt-2 lg:mt-32 xl:mt-52">
            I Grow By Helping People In Need
          </h1>
  
          <div className="flex flex-row justify-center items-center my-5 md:my-10 gap-1 ">
            <div className="form-control  md:w-3/6">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
                onChange={(e) => handleSearchInputChange(e.target.value)}
              />
            </div>
            <button className="bg-[#FF444A] rounded-xl btn text-[#FFF] outline-none border-none">
              Search
            </button>
          </div>
      </div>
    </div>
        </div>
      </div>
    );
  };
  
  export default Banner;

  Banner.propTypes = {
    searchInput: PropTypes.string,
    handleSearchInputChange: PropTypes.func
  };
  