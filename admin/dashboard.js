import renderBlogs from "../js/renderBlogs.js";
const authenticatedUser = JSON.parse(localStorage.getItem("AuthenticatedUser"));
!authenticatedUser?.isAdmin && (location.href = "/");
const sideBar = document.querySelector("#side-toggler");

const blogs = JSON.parse(localStorage.getItem("blogs")) ?? [];
let banner = null;
const blogTitle = document.querySelector("#blogTitle");
const blogEditor = document.querySelector("#blogEditor");

const saveBlog = () => {
  blogs.push({
    id: crypto.randomUUID(),
    published: true,
    author: authenticatedUser.uid,
    updatedAt: Date.now(),
    likes: [],
    data: {
      title: blogTitle.value,
      banner,
      content: blogEditor.value,
    },
  });
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

document.querySelector("#blog-post")?.addEventListener("click", saveBlog, {
  once: true,
});
// document.querySelector("#blog-achive")?.addEventListener("click", () => {
//   blogs.push({
//     id: Math.random() + "--" + Date.now(),
//     published: false,
//     data: document.querySelector("#blogEditor").value,
//   });

//   localStorage.setItem("blogs", JSON.stringify(blogs));
//   // document.querySelector(".blogs__element").innerHTML = renderBlogs(blogs);
// });

sideBar?.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("visible");
  dashboard.classList.toggle("auto-side-bar");
  sideBar.classList.toggle("side-bar--active");
});

const tableContent = document.querySelector("#table-content");
const usersList = JSON.parse(localStorage.getItem("users")) ?? [];

tableContent.innerHTML = usersList.reduce(
  (tableBody, { email, password, uid, userName }) =>
    `
<tr>
            <td>${uid}</td>
            <td>${userName}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td class="delete-user"><svg data-id="${uid}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
          </tr>
` + tableBody,
  ""
);

const blogsTable = document.querySelector("#blogs-table");
const blogsList = JSON.parse(localStorage.getItem("blogs")) ?? [];

blogsTable.innerHTML = blogsList.reduce(
  (blogsTableDOM, { id, data, likes, author, comments }) =>
    blogsTableDOM +
    `
<tr>
<td><a href="/admin/dashboard.html?edit=${id}">${id}</a></td>
<td>${author}</td>
<td>${data.title}</td>
<td>${data.content}</td>
<td>${comments?.length ?? 0}</td>
<td>${likes?.length ?? 0}</td>
<td class="blog-delete"><svg data-id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
</tr>
`,
  ""
);

document.querySelector("#comments-table").innerHTML = blogsList
  .map((blog) =>
    blog.comments
      ?.map(
        ({ data }, i) => `<tr>
      <td>${blog.id}</td>
      <td>${data.likes.length}</td>
      <td>${data.text}</td>
      <td class="comment-delete"><svg data-index="${i}" data-blogid="${blog.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
    </tr>`
      )
      .join("")
  )
  .join("");

const blogbanner = document.querySelector("#blogbanner");

blogbanner.addEventListener("change", (e) => {
  document.querySelector("label[for='blogbanner']").dataset.image =
    e.target.value;
  const imageReader = new FileReader();
  imageReader.onload = (e) => {
    banner = e.target.result;
  };
  imageReader.readAsDataURL(e.target.files[0]);
});

document.querySelectorAll(".blog-delete svg").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const deleteId = e.currentTarget.dataset.id;
    localStorage.setItem(
      "blogs",
      JSON.stringify(blogs.filter(({ id }) => deleteId != id))
    );

    location.reload();
  })
);

document.querySelectorAll(".delete-user svg").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const deleteId = e.currentTarget.dataset.id;
    localStorage.setItem(
      "users",
      JSON.stringify(usersList.filter(({ uid }) => deleteId != uid))
    );

    location.reload();
  })
);

document.querySelectorAll(".comment-delete svg").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const deleteId = e.currentTarget.dataset.blogid;
    const deleteindex = e.currentTarget.dataset.index;
    const newBlogs = blogsList.map((blog) => {
      if (blog.id === deleteId) {
        blog.comments.splice(+deleteindex, 1);
      }
      return blog;
    });
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    location.reload();
  })
);
const [action, blogId] = location.search.replace("?", "").split("=");

if (action === "edit") {
  let searchedBlog = blogs.find(({ id }) => id === blogId);

  blogEditor.value = searchedBlog.data.content;
  blogTitle.value = searchedBlog.data.title;
  document.querySelector("#blog-post").textContent = "update post";
  document.querySelector("#blog-post").removeEventListener("click", () => {
    console.log("hello");
  });
  document.querySelector("#blog-post").outerHTML =
    "<span class='btn' id='update-post'>update post</span>";
  banner = searchedBlog.data.banner;
  document.querySelector("#update-post")?.addEventListener("click", () => {
    searchedBlog = {
      ...searchedBlog,
      data: {
        ...searchedBlog.data,
        content: blogEditor.value,
        title: blogTitle.value,
        banner,
      },
    };
    const updatedBlog = blogs.map((blog) =>
      blog.id === searchedBlog.id ? searchedBlog : blog
    );
    localStorage.setItem("blogs", JSON.stringify(updatedBlog));
    location.reload();
  });
}
