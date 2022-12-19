export default function renderComment(searchedBlog) {
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  return `
  ${searchedBlog?.comments?.reduce(
    (commentsString, nextComment) =>
      commentsString +
      `<div id="${nextComment.id}">
      <img class="avatar sm" src="${
        users.find(({ uid }) => uid === nextComment.userId).avatar
      }" />
      <span>
        ${nextComment.data.text}
      </span>
      <div class="user-controls">
        <div data-id="${nextComment.id}" class="like"><span>${
        nextComment.data.likes?.length ?? 0
      }</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C12.5138 4.64597 13.183 4.08182 13.954 3.69284C14.725 3.30386 15.5764 3.10086 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" class="icon" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></div>
      
      </div>
    
    </div>`,
    ""
  )}
    `;
}
