import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passport",
//     quantity: 1,
//     packed: true,
//   },
//   {
//     id: 2,
//     description: "Sunglasses",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: "Sunscreen",
//     quantity: 3,
//     packed: false,
//   },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    if (!window.confirm("Are you sure you want to clear the list?")) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
