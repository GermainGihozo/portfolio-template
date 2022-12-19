import { validateField } from "./validation.js";
import verifyAccountExistence, {
  createUser,
} from "./verifyAccountExistence.js";
const form = document.querySelector("form.login");
const register = document.querySelector("form.register");

const userCredentials = {
  email: null,
};

document.querySelector("#username")?.addEventListener("keyup", (e) => {
  if (/\w@(\w+)\.(\w)/gi.test(e.target.value)) {
    e.target.style.outlineColor = "var(--secondary-clr)";
    userCredentials.email = e.target.value;
  } else {
    e.target.style.outlineColor = "var(--primary-clr)";
    userCredentials.email = null;
  }
});
register?.addEventListener("submit", (e) => {
  e.preventDefault();
  createUser(register);
});
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = form;
  if (validateField(email, "email").msg) {
    document.querySelector("#error").textContent = validateField(
      email,
      "email"
    ).msg;
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
    return;
  }
  if (validateField(password, "password").msg) {
    document.querySelector("#error").textContent = validateField(
      password,
      "email"
    ).msg;
    document.querySelector("#error").classList.toggle("error");

    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
    return;
  }

  verifyAccountExistence(email, password);
});

document.querySelector("#accept")?.addEventListener("change", (e) => {
  console.log(e.target.checked);
  document.querySelector("#signup").disabled = !e.target.checked;
});
let AuthenticatedUser = null;

export default AuthenticatedUser = localStorage.getItem("AuthenticatedUser");
