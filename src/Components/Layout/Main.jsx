import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <Toaster/>
            <div className="">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;