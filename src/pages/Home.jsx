import { Link } from "react-router";

const Home = () => {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
        <Link to="/about">
          <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition">
            Go to About
          </button>
        </Link>
      </div>
    );
  };

  export default Home;
