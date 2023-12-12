import { BiBookmarkHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import img from '../../assets/nodata.png'
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";
import axios from "axios";

const Favourite = () => {
  const [favItem, setItem] = useState([]);
  

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("donation-favourite"));
    if (favList) {
      setItem(favList);
    } else {
      return;
    }
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Do You Want to delete all?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        localStorage.clear();
        setItem([]);
       
      }
    });
  };
  
  const handleCart =(cart)=>{
    axios.post("http://localhost:5000/cart", cart)
    .then((data) => {
      console.log
      if (data.data.insertedId) {
        Swal.fire({
          title: "Added to Cart!",
          text: "Successfully Added",
          icon: "success",
        });
      }
    });
    
  }

  return (
    <div>
      {favItem.length === 0 ? (
        <div className="grid justify-items-center">
        {" "}
        <img src={img} alt="" />
        <Link to='/'><button className="btn my-2 lg:my-0 md:absolute bottom-10 bg-purple-400 text-purple-900">Add<FaRegHeart /> </button></Link>
      </div>
      ) : (
        <div>
          <div className="flex items-center justify-center gap-2 font-extrabold text-5xl my-5">
            <h1>Favourite List</h1>

            <BiBookmarkHeart />
          </div>
          {/* Tabble */}

          <div className="container mx-auto my-5">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Donate</th>
                  </tr>
                </thead>
                <tbody>
                  {favItem.map((fav, index) => (
                    <tr key={fav._id}>
                      <th>{index + 1}</th>
                      
                      <td>{fav.title}</td>
                      <td>{fav.category}</td>
                      <td>{fav.price}</td>
                      <th>
                        <button className="btn btn-ghost btn-lg" onClick={()=>handleCart(fav)}><FcDonate /></button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end items-center container mx-auto">
            <button className="btn-lg btn font-medium" onClick={handleDelete}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
