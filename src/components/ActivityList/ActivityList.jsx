import Card from "../ActivityCard/ActivityCard";

const List = ({ list, remove, edit }) => {
  return (
    <div className="x">
      <h1>All Activities</h1>
      <div>
        {list.map((item) => (
          <Card item={item} remove={remove} edit={edit} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
