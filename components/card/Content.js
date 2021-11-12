import React, { useContext } from "react";

function Content({ title, description }) {
  return (
    <div className="items-center justify-start mx-auto mt-8">
      <div className="flex p-2 flex-col items-center justify-center space-y-2">
        <h1 className="font-bold text-2xl text-center uppercase">{title}</h1>
        <p className="p-4 text-xl text-center">{description}</p>
      </div>
    </div>
  );
}

export default Content;
