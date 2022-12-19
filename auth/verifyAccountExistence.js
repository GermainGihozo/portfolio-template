const users = JSON.parse(localStorage.getItem("users")) ?? [];

export default function verifyAccountExistence(email, password) {
  const authUser = users.find(
    (user) => user.email === email.value && user.password === password.value
  );
  if (authUser) {
    localStorage.setItem("AuthenticatedUser", JSON.stringify(authUser));
    authUser.isAdmin && (location.href = "/admin/dashboard.html");
    !authUser.isAdmin && (location.href = "/");
  }

  if (
    users.some(
      (user) => user.email === email.value && user.password !== password.value
    )
  ) {
    document.querySelector("#error").textContent = "fill the right password";
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
    return;
  } else {
    document.querySelector("#error").textContent = "Account not found";
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
  }
}

export function createUser({ email, password, Cpassword, acceptAgreement }) {
  if (users.some((user) => user.email === email.value)) {
    // localStorage.removeItem("AuthenticatedUser");
    document.querySelector("#error").textContent = "Email already exist";
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
    return;
  }
  if (password.value !== Cpassword.value) {
    // localStorage.removeItem("AuthenticatedUser");
    document.querySelector("#error").textContent = "Passwords should match";
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
    return;
  }

  const user = {
    uid: crypto.randomUUID(),
    email: email.value,
    password: password.value,
    isAdmin: !users.some(({ isAdmin }) => isAdmin),
  };
  console.log(users.some(({ isAdmin }) => isAdmin));
  users.push(user);
  localStorage.setItem("AuthenticatedUser", JSON.stringify(user));

  localStorage.setItem("users", JSON.stringify(users));
  location.href = "/";
}
