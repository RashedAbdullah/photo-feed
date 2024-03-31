"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const onHide = () => {
    router.back();
  };

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);
  return createPortal(
    <dialog ref={modalRef} className="relative bg-opacity-50 rounded">
      {" "}
      <button
        onClick={onHide}
        className="absolute right-0 p-1 bg-red-500 text-white m-1 rounded"
      >
        Close
      </button>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
