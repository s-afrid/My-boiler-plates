import { createContext, useContext, useState } from "react";
import PopupContent from "../components/Popup/PopupContent";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {isOpen && <PopupContent onClose={closePopup} />}
    </PopupContext.Provider>
  );
}

export const usePopup = () => useContext(PopupContext);
