window.addEventListener("DOMContentLoaded", function () {
  var blogs = document.getElementById("blog-posts");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aswanth-vc",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var data = JSON.parse(result);
      console.log(data);
      data.items.map((blog) => {
        var blogPost = document.createElement("div");
        blogPost.innerHTML = `
        <div class="post">
            <div class="post-meta">
                <i class="bx bxl-medium"></i>
                <div class="post-date">
                    <i class="bx bx-calendar"></i>
                    <span>${new Date(blog.pubDate).getDay()}</span>
                    <span>${new Date(blog.pubDate).toLocaleString('default', {month: 'short'})}</span>
                    <span>${new Date(blog.pubDate).getFullYear()}</span>
                </div>
                <img src="${blog['thumbnail']}"/>
            </div>
            <div class="post-content">
                <h2 class="post-title">${blog.title}</h2>
                <p class="post-description">
                    ${blog.description.slice(0, 600).replace(/<[^>]*>?/gm, "")} ...
                </p>
                <a href="${blog.link}" class="btn post-btn"
                    ><i class="bx bxl-medium"></i> Read More
                    <i class="bx bx-link-external"></i
                ></a>
            </div>
        </div>
        `;
        blogs.appendChild(blogPost);
      });
    })
    .catch((error) => console.log("error", error));
});
