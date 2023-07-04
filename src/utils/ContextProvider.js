import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [isPopup, setPopup] = useState(true);

  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };
  const popupHandle = () => {
    setPopup(!isPopup);
  };

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        shareModalVisibility,
        shareModalHandle,
        isPopup,
        popupHandle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
