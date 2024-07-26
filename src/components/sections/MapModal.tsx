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
        className="container absolute h-[75vh] w-[50vw] rounded-lg bg-secondary p-4 shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
