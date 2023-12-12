import { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios";
import DonationData from "../Donation Data/DonationData";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  
  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/data").
    then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  const filteredData = data.filter((data) =>
  data.category.toLowerCase().includes(searchInput.toLowerCase())
);


  return (
    <div>
      <div>
        <Banner searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange} ></Banner>
      </div>
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 justify-items-center gap-20 my-6">
            {isShow
              ? filteredData.map((data) => (
                  <DonationData key={data._id} data={data}></DonationData>
                ))
              : filteredData
                  .slice(0, 4)
                  .map((data) => (
                    <DonationData key={data._id} data={data}></DonationData>
                  ))}
          </div>
        )}
      </div>
      <div className="container mx-auto flex justify-center items-center my-5">
        {loading? '' : <button className="btn bg-[#FF444A] text-white" onClick={()=>setIsShow(!isShow)}>{isShow? "Show Less" : "Show More"}</button> }
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
