import { useRef, useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import Buttons from "./Buttons";

// const list = [];

const InputField = () => {
  const [todo, setTodo] = useState("");
  let [list, setList] = useState([]);
  const [toShow, setToShow] = useState("all");
  // console.log(todo); // test
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trimStart()) {
      setList([
        {
          id: Date.now(),
          todo,
          completed: false,
        },
        ...list,
      ]);
      setTodo("");
    }
  };

  console.log(toShow);

  const handleShow = (ele) => {
    setToShow(ele);
  };
  if (toShow === "active") {
    list = list.filter((ele) => !ele.completed);
  } else if (toShow === "completed") {
    list = list.filter((ele) => ele.completed);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          inputRef.current?.blur();
        }}
        className="input"
      >
        <input
          type="input"
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef}
          value={todo}
          placeholder="Enter your task"
          className="input_box"
        />
        <button type="submit" className="btn_submit">
          Save
        </button>
      </form>
      <TodoList list={list} setList={setList} />
      {list.length > 0 ? <Buttons handleShow={handleShow} /> :""}
      
    </div>
  );
};

export default InputField;
