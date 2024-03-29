import React, { useState } from "react";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse_open">
      <div className="collapse_encart_opened ">
        <p className="collapse-title">{props.title}</p>

        <button
          className="dropdown_up"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="chevron_haut"
            src="/arrow_up.png"
            alt="flèche du haut"
          />
        </button>
      </div>
      <div className="collapse_open_block">
        <p className="collapse-description">{props.description}</p>
      </div>
    </div>
  ) : (
    <div className="collapse_closed ">
      <div className="collapse_encart_closed">
        <p className="collapse-title">{props.title}</p>
        <button
          className="dropdown_down"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <img
            className="chevron_bas"
            src="/arrow_down.png"
            alt="flèche du bas"
          />
        </button>
      </div>
    </div>
  );
}
