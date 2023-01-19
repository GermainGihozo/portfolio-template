import renderBlogs, { getLikes } from "../js/renderBlogs.js";
import config from '../config/env.js'

const permision = sessionStorage.getItem("permision");
permision !== "admin" && (location.href = "/");
const sideBar = document.querySelector("#side-toggler");
const res = await fetch(`${config.backend_url}/api/v1/blogs`);

const getusersRes = await fetch(`${config.backend_url}/api/v1/auth/users`, {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
  },
});
const getMessagesRes = await fetch(`${config.backend_url}/api/v1/messages`, {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
  },
});
const messages = await getMessagesRes.json()
document.querySelector('#table-messages').innerHTML = (()=>{
let msgDOM = ''
for (let msg of messages.data) {
  const {name, email, subject, message, _id} = msg
  msgDOM += `
<tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${subject}</td>
            <td>${email}</td>
            <td class="delete-msg"><svg data-id="${_id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
          </tr>
`;

}
return msgDOM
})()
messages && document.querySelectorAll('.delete-msg svg').forEach(btn => btn.addEventListener('click', deleteMsg))
async function deleteMsg(e){
  // e.currentTarget.closest('tr').remove()
const res = await fetch(`${config.backend_url }/api/v1/messages/${e.currentTarget.dataset.id}`, {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
    'content-type': 'application/json'
  },
  
  method: 'delete'
 })
 if(res.ok) {
     e.target.closest('tr').remove()
console.log(await res.json());
 }

}
const users = await getusersRes.json();
const blogsData = await res.json();
const blogs = blogsData.data;
const data = [];
for (let blog of blogs) {
  // const banner = await getImage(blog.banner);
  const likes = await getLikes(blog._id);
  data.push({ ...blog /*, banner*/, likes: likes.length });
}
let allComments = [];
let banner = null;
const blogTitle = document.querySelector("#blogTitle");
const blogEditor = document.querySelector("#blogEditor");

const saveBlog = async () => {
  const getusersRes = await fetch(`${config.backend_url}/api/v1/blogs`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
    },
    method: "post",
    body: JSON.stringify({
      title: blogTitle.value,
      banner,
      body: blogEditor.value,
    }),
  });
  const users = await getusersRes.json();
  const error = document.querySelector("#error");
  if (!users.error) {
    blogTitle.value = "";
    blogEditor.value = "";
    error.textContent = users.message;
    error.classList.add("error");
  } else {
    error.classList.add("error");
    error.textContent = users.error;
  }
  setTimeout(() => {
    error.classList.remove("error");
  }, 3500);
};

document.querySelector("#blog-post")?.addEventListener("click", saveBlog);

sideBar?.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("visible");
  dashboard.classList.toggle("auto-side-bar");
  sideBar.classList.toggle("side-bar--active");
});

const tableContent = document.querySelector("#table-content");
let usersDomContent = "";
for (let user of users.data) {
  const { email, _id, userName } = user;
  usersDomContent += `
<tr>
            <td>${_id}</td>
            <td>${userName}</td>
            <td>${email}</td>
            <td class="delete-user"><svg data-id="${_id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
          </tr>
`;
  tableContent.innerHTML = usersDomContent;
}

const blogsTable = document.querySelector("#blogs-table");

blogsTable.innerHTML = data.reduce(
  (blogsTableDOM, { _id, body, likes, author, comments, title }) => {
    allComments = [
      ...allComments,
      ...comments.map((comment) => ({ ...comment, blodId: _id })),
    ];
    return (
      blogsTableDOM +
      `
<tr>
<td><a href="/admin/dashboard.html?edit=${_id}">${_id}</a></td>
<td>${author}</td>
<td><p  class="txt-lg">${title}</p></td>
<td ><p  class="txt-lg">${body}</p></td>
<td>${comments?.length ?? 0}</td>
<td>${likes}</td>
<td class="blog-delete"><svg data-id="${_id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
</tr>
`
    );
  },
  ""
);

document.querySelector("#comments-table").innerHTML = allComments
  .map(
    ({ text, user, _id, blodId }, i) => `<tr>
      <td>${user}</td>
      <td>${text}</td>
      <td class="comment-delete"><svg data-index="${i}" data-blogid="${blodId}" data-commentid="${_id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
  <path class="icon-i" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg></td>
    </tr>`
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
  btn.addEventListener("click", async (e) => {
    const deleteId = e.currentTarget.dataset.id;
    const blogDeleteRes = await fetch(
      `${config.backend_url}/api/v1/blogs/${deleteId}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
        },
      }
    );
    const blog = await blogDeleteRes.json();
    if (blog && blog.data) {
      location.reload();
    }
  })
);

document.querySelectorAll(".delete-user svg").forEach((btn) =>
  btn.addEventListener("click", async (e) => {
    const deleteId = e.currentTarget.dataset.id;
    const deleteUserRes = await fetch(
      `${config.backend_url}/api/v1/auth/users/${deleteId}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
        },
      }
    );
    const user = await deleteUserRes.json();
    if (user && user.statusCode === 200) {
      btn.closest('tr').remove()
    }
  })
);

document.querySelectorAll(".comment-delete svg").forEach((btn) =>
  btn.addEventListener("click", async (e) => {
    const blogId = e.currentTarget.dataset.blogid;
    const commentId = e.currentTarget.dataset.commentid;
    const deleteCommentRes = await fetch(
      `${config.backend_url}/api/v1/blogs/${blogId}/comments/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
        },
        method: "delete",
      }
    );
    const deleteComment = await deleteCommentRes.json();
    document.querySelector("[data-blogid]").closest("tr").remove();
    console.log(deleteComment);
  })
);
const [action, blogId] = location.search.replace("?", "").split("=");

if (action === "edit") {
  console.log(blogs);
  let searchedBlog = blogs.find(({ _id }) => _id === blogId);

  blogEditor.value = searchedBlog.body;
  blogTitle.value = searchedBlog.title;
  document.querySelector("#blog-post").textContent = "update post";
  document.querySelector("#blog-post").removeEventListener("click", () => {
    console.log("hello");
  });
  document.querySelector("#blog-post").outerHTML =
    "<span class='btn' id='update-post'>update post</span>";

  banner = searchedBlog.banner;

  document
    .querySelector("#update-post")
    ?.addEventListener("click", async () => {
      const updateBlogRes = await fetch(
        `${config.backend_url}/api/v1/blogs/${searchedBlog._id}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({
            body: blogEditor.value,
            title: blogTitle.value,
          }),
          method: "put",
        }
      );
      const blog = await updateBlogRes.json();
      if (updateBlogRes.ok) {
        location.reload();
      }
    });
}
