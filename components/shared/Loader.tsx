"use client";
export default function Loader() {
  return (
    <div aria-label="Loading..." role="status" className="grid w-screen h-screen place-items-center"> 
      <span className="loading loading-ring w-52 h-52" />
    </div>
  );
}
