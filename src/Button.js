// import { useState } from "react";

// export default function Button() {
//   return <button className="btn btn-warning m-20"></button>;
// }

const Button = ({ count, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-warning m-20">
      Clicked {count} times
    </button>
  );
};

export default Button;
