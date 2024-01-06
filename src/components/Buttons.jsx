/* eslint-disable react/prop-types */

const Buttons = ({ handleShow }) => {

  return (
    <div className="btn_bottom">
      <button  className="btn_show" onClick={() => handleShow("all")}>All</button>
      <button className="btn_show " onClick={() => handleShow("active")}>Active</button>
      <button  className="btn_show" onClick={() => handleShow("completed")}>Completed</button>
    </div>
  );  
};

export default Buttons;
