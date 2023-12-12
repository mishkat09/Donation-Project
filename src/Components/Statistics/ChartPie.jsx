import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const ChartPie = ({ data }) => {
  const [donationAll, setDonationAll] = useState([]);

  const dataCart = data.length;

  const totalData = donationAll.length;
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((dataAll) => {
      setDonationAll(dataAll.data);
    });
  }, []);

  const chart = dataCart > 0 ? (
    <div className="container mx-auto">
        <Chart
      chartType="PieChart"
      data={[
        ["Task", "Value"], 
        ["Total", totalData],   
        ["Donated", dataCart], 
      ]}
      width={"100%"}
      height={"600px"}
    />
    </div>
    
  ) : (
    <div className="text-3xl md:text-5xl font-semibold text text-center my-52"><h1>You Haven't Donated Yet </h1></div>
  );

  return (
  <div>
    <div>
        <h1 className="text-3xl text-center font-bold my-5">Total Donation</h1>
    </div>
    <div>
    {chart}
    </div>
  
  
  </div>);
};

ChartPie.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ChartPie;
