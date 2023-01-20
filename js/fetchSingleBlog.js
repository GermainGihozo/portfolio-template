import renderComment from "./renderComment.js";
import config from '../config/env.js'

const blogId = new URL(location.href).hash.toString().replace("#", "");

const res = await fetch(`${config.backend_url}/api/v1/blogs/${blogId}`);

const blogData = await res.json();

let blog = blogData.data;

const authRes = await fetch(`${config.backend_url}/api/v1/auth/profile`, {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
  },
  method: "get",
});
const profile = await authRes.json();


async function renderBlog() {
  document.querySelector(".blog").innerHTML = `  
  <h3>${blog.title}</h3>
  <img src="${blog.banner}"/>
  <div>
  <pre>${blog.body}</pre>
  </div
          >
          <div class="user-nav">
          
           <div style="background-image: url(${profile.data?.avatar}" class="avatar"></div>
            <textarea></textarea>
            <button id="comment"
             class="btn btn-primary reply">comment</button>
          </div>
  
          <div class="comments">
          ${await renderComment(blog)}
            
          </div>`;
  document.querySelector("#comment").addEventListener("click", async (e) => {
    const text = document.querySelector(".user-nav textarea").value;

    const commentRes = await fetch(
      `${config.backend_url}/api/v1/blogs/${blog._id}/comments`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ text }),
        method: "post",
      }
    );
    const comment = await commentRes.json();
   blog = comment.data
    renderBlog();
  });

  document
    .querySelectorAll(".like")
    .forEach((btn) => btn.addEventListener("click", reply));
}
renderBlog();

async function reply(e) {
  const target = e.currentTarget
  const likeRes = await fetch(`${config.backend_url}/api/v1/blogs/${blog._id}/comments/${e.currentTarget.dataset.id}/likes`, {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
  },
  method: "post",
});
const blogData = await likeRes.json();

target.querySelector('span').textContent = blogData.data.comments.find(({_id}) => _id == target.dataset.id).likes.length

}
