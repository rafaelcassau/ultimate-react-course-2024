const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Starting to add some items to your packing list!</em>
      </footer>
    );
  }
  const total_amount = items.length;
  const packed_amount = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed_amount / total_amount) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {total_amount} items on you list, and you already packed{" "}
          {packed_amount} ({percentage}%)
        </em>
      ) : (
        <em>You got everything! Ready to go!</em>
      )}
    </footer>
  );
};

export default Stats;
