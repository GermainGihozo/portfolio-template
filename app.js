import renderBlogs from "./js/renderBlogs.js";
import makeDataOperation from "./js/makeDataOperation.js";
const navBarTogglerIcon = document.querySelector("#nav-toggler");
const navBar = document.querySelector("nav .links");
let theme = localStorage.getItem("theme") ?? "light";
const dashboard = document.querySelector(".dashboard");
const documentThemeElement = document.querySelector("#theme");
documentThemeElement.setAttribute("data-theme", theme);
const res = await fetch("http://localhost:3000/api/v1/blogs");
const blogsData = await res.json();
const blogs = blogsData.data;
document.querySelector(".theme-toggler").addEventListener("click", (e) => {
  document
    .querySelector("#theme-swither")
    .classList.toggle("theme-swither-active");
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  documentThemeElement.setAttribute("data-theme", theme);
});

navBarTogglerIcon.addEventListener("click", () => {
  navBarTogglerIcon.classList.toggle("nav-active");
  navBar.classList.toggle("visible");
});

if (new URL(location.href).pathname === "/") {
  const dashboardSection = document.querySelector("#dashboard");

  document.querySelector(".blogs__element").innerHTML = await renderBlogs(
    blogs
  );
  document.querySelectorAll(".control-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const [updatedBlogid, likes] = makeDataOperation(e);
      document
        .getElementById(`${updatedBlogid}`)
        .querySelector(".likes").textContent = `${likes} likes`;
    });
  });
}

location.pathname === "/" &&
  sessionStorage.getItem("permision") === 'admin'  &&
  (location.href = "/admin/dashboard.html");

const authuser = sessionStorage.getItem("auth-token");

if (authuser) {
  document.querySelector("[data-auth]").dataset.auth = "true";
} else {
  document.querySelector("[data-auth]").dataset.auth = "false";
}
