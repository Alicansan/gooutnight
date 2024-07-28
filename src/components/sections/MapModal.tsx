import React from "react";

interface handleShowModalProp {
  handleShowModal: () => void;
  children: React.ReactNode;
}

export default function MapModal({
  handleShowModal,
  children,
}: handleShowModalProp) {
  return (
    <div
      onClick={handleShowModal}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center backdrop-blur-lg backdrop-brightness-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="container absolute h-[75vh] w-[90vw] md:h-[85vh] md:w-[50vw]"
      >
        {children}
      </div>
    </div>
  );
}
