import "./List.css";

const List = ({ list }) => {
  return (
    <div className="list__container">
      <h2 className="list__title">JavaScript Frameworks: </h2>
      <ul className="list">
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
