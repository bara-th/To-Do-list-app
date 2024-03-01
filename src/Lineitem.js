import React from "react";
import { FaTrash } from "react-icons/fa";

function Lineitem({ item, handleCheck, handleDelete }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />

      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>

      <FaTrash
        role="button"
        onClick={() => handleDelete(item.id)}
        tabIndex={0}
        aria-label={`Delete ${item.label}`}
      />
    </li>
  );
}

export default Lineitem;
