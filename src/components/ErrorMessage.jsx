import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center mt-4">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
