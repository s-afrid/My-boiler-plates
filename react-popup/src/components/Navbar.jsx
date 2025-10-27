// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openPopup } from "../redux/popupSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>

        <button
          onClick={() => dispatch(openPopup())}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Open Popup
        </button>
      </div>
    </nav>
  );
}