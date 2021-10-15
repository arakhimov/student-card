/* eslint-disable multiline-ternary */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import validator from "../utils/validator";
import Modal from "./modal";
import TextField from "./textField";

const EditPage = ({ data: initialData, getData, history }) => {
  const [data, setData] = useState(
    initialData || {
      name: { name: "name", description: "Имя", value: "" },
      soname: { name: "soname", description: "Фамилия", value: "" },
      date: { name: "date", description: "Год рождения", value: "" },
      portfolio: { name: "portfolio", description: "Портфолио", value: "" }
    }
  );

  const [errors, setErrors] = useState({});

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => validate(), [data]);

  const handleChange = ({ target }) => {
    setData((prevState) => {
      return {
        ...prevState,
        [target.name]: {
          ...prevState[target.name],
          value: target.value
        }
      };
    });
  };

  const validateConfig = {
    name: {
      isRequired: {
        message: `Поле "${data.name.description}" обязательно для заполения`
      }
    },
    soname: {
      isRequired: {
        message: `Поле "${data.soname.description}" обязательно для заполения`
      }
    },
    date: {
      isRequired: {
        message: `Поле "${data.date.description}" обязательно для заполения`
      },
      isCorrectDate: {
        message: `Поле "${data.date.description}" заполнено некорректно`
      }
    },
    portfolio: {
      isRequired: {
        message: `Поле "${data.portfolio.description}" обязательно для заполения`
      },
      isUrl: {
        message: `Поле "${data.portfolio.description}" должно быть ссылкой`
      }
    }
  };

  function validate() {
    const errors = validator(data, validateConfig);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    getData(data);
    if (initialData) {
      setIsEdit(true);
    } else {
      history.push("/");
    }
  };

  const handleMoveToCard = () => {
    history.push("/");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h1>{initialData ? "Редактировать" : "Создать"}</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          label={data.name.description}
          type="text"
          name={data.name.name}
          value={data.name.value}
          onChange={handleChange}
          error={errors[data.name.name]}
        />
        <TextField
          label={data.soname.description}
          type="text"
          name={data.soname.name}
          value={data.soname.value}
          onChange={handleChange}
          error={errors[data.soname.name]}
        />
        <TextField
          label={data.date.description}
          type="number"
          name={data.date.name}
          value={data.date.value}
          onChange={handleChange}
          error={errors[data.date.name]}
        />
        <TextField
          label={data.portfolio.description}
          type="text"
          name={data.portfolio.name}
          value={data.portfolio.value}
          onChange={handleChange}
          error={errors[data.portfolio.name]}
        />
        {initialData ? (
          <div className="">
            <button
              type="button"
              className="btn bg-secondary mt-3 w-10 me-3 text-light"
              onClick={handleMoveToCard}
            >
              Назад
            </button>
            <button
              className="btn bg-primary mt-3 px-3 text-light"
              type="submit"
              disabled={!isValid}
            >
              Обновить
            </button>
          </div>
        ) : (
          <button
            className="btn bg-primary mt-3 px-3 text-light"
            type="submit"
            disabled={!isValid}
          >
            Создать
          </button>
        )}
      </form>
      {isEdit && <Modal />}
    </div>
  );
};

EditPage.propTypes = {
  getData: PropTypes.func,
  data: PropTypes.object,
  history: PropTypes.object
};

export default EditPage;
