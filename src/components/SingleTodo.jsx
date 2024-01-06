/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const SingleTodo = ({ todo, list, setList, handleDelete, handleCompleted }) => {
  const [editStates, setEditStates] = useState(false);
  const [editTodos, setEditTodos] = useState(todo.todo);
  const inputRef = useRef(null);
//   console.log(editStates);  //test
//   console.log(editTodos);  //test
  const handleUpdate = (e, id) => {
    e.preventDefault();
    setList(
      list.map((todo) => (todo.id === id ? { ...todo, todo: editTodos } : todo))
    );
    setEditStates(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editStates]);

  return (
    <fieldset
    className="single_todos"
      onSubmit={(e) => handleUpdate(e, todo.id)}
      key={todo.id}
    >
      {editStates ? (
        <input
          ref={inputRef}
          className={`${todo.completed ? "isDone" : ""} single_todos_text`}
          value={editTodos}
          onChange={(e) => setEditTodos(e.target.value)}
          onBlur={() => {
            setEditTodos(todo.todo); // Revert to original todo text on blur
            setEditStates(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                handleUpdate(e, todo.id); 
              }
          }}
        />
      ) : (
        <label htmlFor="todo" className={`${todo.completed ? "isDone" : ""} single_todos_text`}>
          {todo.todo}
        </label>
      )}
      <div className="icon-box">
        <input
          type="checkbox"
          id="todo"
          defaultChecked={todo.completed}
          onClick={() => handleCompleted(todo.id)}
        />
        <button
        className="btn-edit"
        onClick={() => setEditStates(!editStates) }
        >
          Edit
        </button>
        <button className="btn-delete" onClick={() => handleDelete(todo.id)}>X</button>
      </div>
    </fieldset>
  );
};

export default SingleTodo;
