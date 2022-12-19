const blogs = JSON.parse(localStorage.getItem("blogs")) ?? [];
const authuser = JSON.parse(localStorage.getItem("AuthenticatedUser"));
export default function makeDataOperation(e) {
  console.log(authuser);
  const blogId = e.currentTarget.dataset.id;
  const blog = blogs.find(({ id }) => id === blogId);
  if (Boolean(+e.currentTarget.dataset.like)) {
    if (blog.likes?.includes(authuser.uid)) {
      blog.likes.splice(blog.likes?.indexOf(authuser.uid), 1);
      // v.splice(v.indexOf("c"),1)
    } else {
      blog.like ?? (blog.likes = [...new Set([...blog?.likes, authuser.uid])]);
      // blog.like?.length === 0 ?? (blog.likes = [authuser.uid]);
    }
  }

  localStorage.setItem("blogs", JSON.stringify(blogs));

  return [blogId, blog.likes?.length];
}
