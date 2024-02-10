import React, { useState } from "react";

const Donate = () => {
  const [donate, setDonate] = useState(25);

  return (
    <ul className="artist-donate">
      <li>Donate for this artist:</li>
      <li className="artist-usd">
        <button
          className={donate === 10 && "active"}
          onClick={() => setDonate(10)}
        >
          10 $
        </button>
        <button
          className={donate === 25 && "active"}
          onClick={() => setDonate(25)}
        >
          25 $
        </button>
        <button
          className={donate === 50 && "active"}
          onClick={() => setDonate(50)}
        >
          50 $
        </button>
        <button
          className={donate === 100 && "active"}
          onClick={() => setDonate(100)}
        >
          100 $
        </button>
        <button
          className={donate === 500 && "active"}
          onClick={() => setDonate(500)}
        >
          500 $
        </button>
        <button
          className={donate === 1000 && "active"}
          onClick={() => setDonate(1000)}
        >
          1000 $
        </button>
      </li>
      <li>
        <a href="#" className="btn-primary-outline">
          Send
        </a>
      </li>
    </ul>
  );
};

export default Donate;
