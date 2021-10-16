import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="fixed-top bg-dark d-flex justify-content-center align-items-center h-100 bg-opacity-25 shadow">
      <div className="col-md-4 offset-md-0 bg-light rounded-3 m-0">
        <p className="text-success p-3 m-0">Обновлено!</p>
        <div className="container d-flex justify-content-end border w-100">
          <Link to="/student-card">
            <button type="button" className="btn text-primary">
              close
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
