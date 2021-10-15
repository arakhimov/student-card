export default function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let validateStatus = false;
    switch (validateMethod) {
      case "isRequired":
        validateStatus = data.trim() === "";
        break;
      case "isCorrectDate":
        validateStatus = data < 1900 || data > new Date().getFullYear();
        break;
      case "isUrl":
        {
          const urlRegExp = /^https?:\/\/[\w.-_]+\.[a-z]{2,4}(\/[\w-_/]+)*$/;
          validateStatus = !urlRegExp.test(data);
        }
        break;
      default:
        break;
    }
    if (validateStatus) return config.message;
  }

  for (const field in data) {
    for (const validateMethod in config[field]) {
      const error = validate(
        validateMethod,
        data[field].value,
        config[field][validateMethod]
      );
      if (error && !errors[data[field].name]) {
        errors[data[field].name] = error;
      }
    }
  }

  return errors;
}
