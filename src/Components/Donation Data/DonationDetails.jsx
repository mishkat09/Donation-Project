import { useLoaderData } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import swal from "sweetalert";
import axios from "axios";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const donation = useLoaderData();

  const addToFav = () => {
    const favList = [];
    const favItem = JSON.parse(localStorage.getItem("donation-favourite"));
    if (!favItem) {
      favList.push(donation);
      localStorage.setItem("donation-favourite", JSON.stringify(favList));
      swal("Successfully Added", "Added to favourite", "success");
    } else {
      const isExsist = favItem.find((data) => data._id === donation._id);
      if (!isExsist) {
        favList.push(...favItem, donation);
        localStorage.setItem("donation-favourite", JSON.stringify(favList));
        swal("Successfully Added", "Added to favourite", "success");
      } else {
        swal("Already Added", "Check to favourite", "error");
      }
    }
  };

  const addToCart = () => {
    const picture = donation.picture;
    const price = donation.price;
    const title = donation.title;
    const category = donation.category;
    const cart = { picture, title, price, category };
    axios.post("http://localhost:5000/cart", cart)
    .then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Added to Cart!",
          text: "Successfully Added",
          icon: "success",
        });
      }
    });
  };
  

  return (
    <div className="grid justify-items-center container my-24 mx-auto">
      <div className="flex">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={donation.picture} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{donation.title}</h2>
            <p className="text-lg font-medium">{donation.description}</p>
            <p className="flex items-center gap-2 text-lg font-medium">
              {" "}
              <MdOutlineCategory /> {donation.category}
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost border-b border-black text-lg"
                onClick={addToCart}
              >
                <FaDonate /> {donation.price}
              </button>
              <button
                className="btn btn-ghost border-b border-black text-lg"
                onClick={addToFav}
              >
                Add
                <GoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
