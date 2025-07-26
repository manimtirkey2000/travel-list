export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 🏖️</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <footer class="stats">
      <em>
        {percentagePacked === 100
          ? "🎉 You got everything!"
          : `💼 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
