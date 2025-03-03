import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onRemoveItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];
  switch (sortBy) {
    case "input":
      sortedItems = [...items];
      break;
    case "description":
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "packed":
      sortedItems = [...items].sort(
        (a, b) => Number(b.packed) - Number(a.packed)
      );
      break;
    default:
      break;
  }
  console.log(sortedItems);

  const sortItemsBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={sortItemsBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sorte by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
