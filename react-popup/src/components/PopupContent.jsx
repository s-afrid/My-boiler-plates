import { useDispatch } from "react-redux";
import { closePopup } from "../redux/popupSlice";

export default function PopupContent() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 relative">
        <button
          onClick={() => dispatch(closePopup())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <h2 className="text-xl font-semibold mb-2">Global Popup</h2>
        <p className="text-gray-600 mb-4">
          You can open this popup from any page using the Navbar 🚀
        </p>

        <button
          onClick={() => dispatch(closePopup())}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}