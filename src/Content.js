import Itemlist from "./Itemlist";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <div className="main">
      {items.length > 0 ? (
        <Itemlist
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
}

export default Content;
