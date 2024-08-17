import React from "react";

export default function BgImage() {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1723653508269-7b2abc5d8e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <img className="w-[100vw] h-[100vh] fixed top-0 left-0 opacity-90" src={IMAGE_URL} />
    </div>
  );
}
