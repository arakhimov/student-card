/* eslint-disable multiline-ternary */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ data, history }) => {
  const getFullYears = (bornYear) => {
    const diff = new Date().getFullYear() - bornYear;
    let yearAmountString;
    if (diff >= 5 && diff <= 20) {
      yearAmountString = "лет";
    } else {
      yearAmountString = /\d*[234]/.test(String(diff)) ? "года" : "лет";
    }

    return `${bornYear} (${diff} ${diff === 1 ? "год" : yearAmountString})`;
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
              {getFullYears(data.date.value)}
            </li>
            <li className="list-group-item border-0 mb-2 p-0">
              <span className="fw-bold">{`${data.portfolio.description}:`}</span>
              &nbsp;
              {data.portfolio.value}
            </li>
          </ul>
          <Link to="/student-card/edit">
            <button className="btn bg-primary px-3 text-light">
              Редактировать
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <p>нет данных</p>
          <Link to="/student-card/edit">
            <button className="btn btn-primary mt-1" type="button">
              Добавить данные
            </button>
          </Link>
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
