/* eslint-disable react/prop-types */
import SingleTodo from "./SingleTodo";

const TodoList = ({ list, setList }) => {

  const handleDelete = (id) => {
    setList(list.filter((ele) => ele.id !== id));
  };

  const handleCompleted = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      {list.map((todo) => (
        <SingleTodo todo={todo} list={list} setList={setList}  handleDelete={handleDelete} handleCompleted={handleCompleted} key={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;
