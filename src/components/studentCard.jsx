/* eslint-disable multiline-ternary */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ data, history }) => {
  const handleAddDate = () => {
    history.push("/edit");
  };

  return (
    <div className="col-md-6 offset-md-3">
      {data ? (
        <div>
          <h1 className="mb-3">Карточка студента</h1>
          <ul className="list-group list-group-flush mb-2">
            <li className="list-group-item border-0 mb-2 p-0">
              <span className="fw-bold">{`${data.name.description}:`}</span>
              &nbsp;
              {data.name.value}
            </li>
            <li className="list-group-item border-0 mb-2 p-0">
              <span className="fw-bold">{`${data.soname.description}:`}</span>
              &nbsp;
              {data.soname.value}
            </li>
            <li className="list-group-item border-0 mb-2 p-0">
              <span className="fw-bold">{`${data.date.description}:`}</span>
              &nbsp;
              {`${data.date.value} (${
                new Date().getFullYear() - data.date.value
              } года)`}
            </li>
            <li className="list-group-item border-0 mb-2 p-0">
              <span className="fw-bold">{`${data.portfolio.description}:`}</span>
              &nbsp;
              {data.portfolio.value}
            </li>
          </ul>
          <Link to="/edit">
            <button className="btn bg-primary px-3 text-light">
              Редактировать
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <p>нет данных</p>
          <button
            className="btn btn-primary mt-1"
            type="button"
            onClick={handleAddDate}
          >
            Добавить данные
          </button>
        </div>
      )}
    </div>
  );
};

StudentCard.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object
};

export default StudentCard;
