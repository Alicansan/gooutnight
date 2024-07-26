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
        className="absolute h-[70vh] w-[70vw] bg-secondary p-4 shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
