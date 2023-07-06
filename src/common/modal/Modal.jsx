import { Transition } from "@headlessui/react";
import { useEffect, useRef } from "react";

const Modal = ({ isOpen, toggleModal, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, toggleModal]);

  return (
    <Transition
      show={isOpen}
      as="div"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <Transition.Child
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-black opacity-60"
      />
      <Transition.Child
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute z-10 max-h-[90vh] w-72 max-w-[98vw] overflow-y-auto rounded-lg bg-white sm:max-w-xl"
        ref={modalRef}
      >
        {children}
      </Transition.Child>
    </Transition>
  );
};

export default Modal;
