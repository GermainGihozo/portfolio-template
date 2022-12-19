import renderComment from "./renderComment.js";
const blogId = new URL(location.href).hash.toString().replace("#", "");
const authuser = JSON.parse(localStorage.getItem("AuthenticatedUser"));
const blogs = JSON.parse(localStorage.getItem("blogs")) ?? [];
const users = JSON.parse(localStorage.getItem("users")) ?? [];
const userAvatar = users.find(({ uid }) => uid === authuser.uid).avatar;
const searchedBlog = blogs.find(({ id }) => id === blogId);
function renderBlog() {
  document.querySelector(".blog").innerHTML = `  
  <h1>${searchedBlog?.data.title}</h1>
  <img src="${searchedBlog?.data.banner}"/>
  <pre>${searchedBlog?.data.content}</pre
          >
          <div class="user-nav">
          
           <div style="background-image: url(${userAvatar})" class="avatar"></div>
            <textarea></textarea>
            <button id="comment"
             class="btn btn-primary reply">comment</button>
          </div>
  
          <div class="comments">
          ${renderComment(searchedBlog)}
            
          </div>`;
  document.querySelector("#comment").addEventListener("click", (e) => {
    const text = document.querySelector(".user-nav textarea").value;
    if (!searchedBlog.comments) {
      searchedBlog.comments = [
        {
          id: Math.random(),
          userId: authuser.uid,
          user: null,
          data: {
            likes: [],
            replies: [],
            text,
          },
        },
      ];
    } else {
      searchedBlog.comments = [
        {
          id: Math.random(),
          userId: authuser.uid,
          user: null,
          data: {
            likes: [],
            replies: [],
            text,
          },
        },
        ...searchedBlog.comments,
      ];
    }
    renderBlog();
    localStorage.setItem("blogs", JSON.stringify(blogs));
  });

  document
    .querySelectorAll(".like")
    .forEach((btn) => btn.addEventListener("click", reply));
}
renderBlog();

function reply(e) {
  const changedLike = searchedBlog.comments.find(
    ({ id }) => id == e.currentTarget.dataset.id
  );

  if (changedLike.data.likes?.includes(authuser.uid)) {
    changedLike.data.likes.splice(
      changedLike.data.likes?.indexOf(authuser.uid),
      1
    );
  } else {
    changedLike.data.like ??
      (changedLike.data.likes = [
        ...new Set([...changedLike.data?.likes, authuser.uid]),
      ]);
  }
  localStorage.setItem("blogs", JSON.stringify(blogs));

  e.currentTarget.querySelector("span").textContent =
    changedLike.data.likes.length;
}
