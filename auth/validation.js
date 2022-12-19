const validateField = (element, type) => {
  const errorMessage = {};
  if (element.value.length < 5) {
    errorMessage.msg = "character less than 5";
    return errorMessage;
  }
  if (type === "email") {
    const [uname, domain] = element.value.split("@");
    uname.length > 2 || (errorMessage.msg = "email no acceptable");

    domain.match(/\./) ?? (errorMessage.msg = "email no acceptable");
  }
  return errorMessage;
};

export { validateField };
