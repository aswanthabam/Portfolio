window.addEventListener("DOMContentLoaded", function () {
  var blogs = document.getElementById("blog-posts");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };

//   fetch(
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aswanth-vc",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => {
//       var data = JSON.parse(result);

//       data.items.map((blog) => {
//         console.log(blog);
//         var blogPost = document.createElement("div");
//         blogPost.innerHTML = `
//                     <div class="blog-post">
//                         <div class="blog-image">
//                         </div>
//                         <div class="blog-content">
//                             <h3>${blog.title}</h3>
//                             <p>${blog.description}</p>
//                             <a target="_blank" href="${blog.link}" class="btn">Read More</a>
//                         </div>
//                     </div>`;
//         blogs.appendChild(blogPost);
//       });
//     })
    // .catch((error) => console.log("error", error));
});
