// src/components/PopupManager.jsx
import { useSelector } from "react-redux";
import PopupContent from "./PopupContent";

export default function PopupManager() {
  const { isOpen } = useSelector((state) => state.popup);
  return <>{isOpen && <PopupContent />}</>;
}