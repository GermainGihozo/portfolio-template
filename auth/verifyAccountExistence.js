const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data?.data?.token) {
    sessionStorage.setItem("auth-token", data?.data?.token);
    if (data.data?.permision.includes("admin")) {
      sessionStorage.setItem("permision", data.data?.permision);

      location.href = "/admin/dashboard.html";
    }
    location.href = "/";

    return;
  }
  if (data.error) {
    console.log(data);

    document.querySelector("#error").textContent = data.details;
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
  }
};
export default function verifyAccountExistence(email, password) {
  loginUser(email.value, password.value);
}

export async function createUser(email, password, userName) {
  const res = await fetch("http://localhost:3000/api/v1/auth/signup", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password, userName }),
  });

  const data = await res.json();
  console.log(data);
  if (data?.statusCode === 201) {
    document.querySelector("#error").textContent =
      data.message + " login to continue";
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
  } else {
    document.querySelector("#error").textContent = data.msg || data.message;
    document.querySelector("#error").classList.toggle("error");
    setTimeout(() => {
      document.querySelector("#error").classList.toggle("error");
    }, 3000);
  }
}
