import config from '../config/env.js'
export default async function makeDataOperation(e) {
  const blogId = e.currentTarget.dataset.id;
  console.log(blogId);
    const like = await fetch(
      `${config.backend_url}/api/v1/blogs/${blogId}/likes`,
      {
        method: 'post',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth-token")}`,
        }
      }
    );
      const likes = await fetch(
        `${config.backend_url}/api/v1/blogs/${blogId}/likes`
      );
      let allLikes =  await likes.json();
    return [blogId, allLikes.length];

}
