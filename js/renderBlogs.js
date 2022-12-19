export default function renderBlogs(blogs) {
  console.log(blogs);

  return blogs
    .filter(({ published }) => published)
    .reduce(
      (htmlBlogString, currentBlog, i) =>
        htmlBlogString +
        `  <details id="${currentBlog.id}" ${i === 0 && "open"}>
    <summary>${currentBlog.data?.title}</summary>
    <img src="${currentBlog.data?.banner}" alt="${
          currentBlog.data?.title
        } picture">
    <br>
    <pre class="content">
     ${currentBlog.data?.content}
    </pre>
    
    <div class="user-controls">
      <a href="/blog.html#${currentBlog.id}" class="btn">Read more</a>
    
      <span data-like="1" data-id="${currentBlog.id}" class="control-item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C12.5138 4.64597 13.183 4.08182 13.954 3.69284C14.725 3.30386 15.5764 3.10086 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
            class="icon"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="likes">${currentBlog.likes?.length ?? 0} likes</span>
      </span>
      <span data-comment="1" data-id="${currentBlog.id}" class="control-item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
            class="icon"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 9.5H17M7 14.5H14"
            class="icon"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
    
        <span>45 comments</span>
      </span>
      <span data-id="${currentBlog.id}" class="control-item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            class="icon"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 8.10023V17.6602M18.38 15.2702V7.58023C18.38 6.81023 17.76 6.25023 17 6.31023H16.96C15.62 6.42023 13.59 7.11023 12.45 7.82023L12.34 7.89023C12.16 8.00023 11.85 8.00023 11.66 7.89023L11.5 7.79023C10.37 7.08023 8.34 6.41023 7 6.30023C6.24 6.24023 5.62 6.81023 5.62 7.57023V15.2702C5.62 15.8802 6.12 16.4602 6.73 16.5302L6.91 16.5602C8.29 16.7402 10.43 17.4502 11.65 18.1202L11.68 18.1302C11.85 18.2302 12.13 18.2302 12.29 18.1302C13.51 17.4502 15.66 16.7502 17.05 16.5602L17.26 16.5302C17.88 16.4602 18.38 15.8902 18.38 15.2702V15.2702Z"
            class="icon"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
    
        <span>45 reads</span>
      </span>
    </div>
    </details>`,
      ""
    );
}
