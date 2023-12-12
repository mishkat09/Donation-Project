import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto mt-28 flex  flex-col justify-center items-center">
            <h1 className="text-7xl md:text-9xl font-medium">Oops!</h1>
            <h4 className="text-2xl md:text-4xl my-10">404-PAGE NOT FOUND</h4>
            <Link to="/"><button className="btn bg-[#FF444A] text-white">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;