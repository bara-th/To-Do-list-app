import React from "react";
import { FaPlus } from "react-icons/fa";

function Additem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Add your task"
        id="addItem"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>
        <FaPlus role="button" />
      </button>
    </form>
  );
}

export default Additem;
