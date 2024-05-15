const categories = { jekyll: [{ url: `/posts/maths-example/`, date: `17 Jun 2021`, title: `Maths Example with Mathjax`},{ url: `/posts/welcome-to-jekyll/`, date: `29 Aug 2020`, title: `Welcome to Jekyll!`},],update: [{ url: `/posts/maths-example/`, date: `17 Jun 2021`, title: `Maths Example with Mathjax`},{ url: `/posts/welcome-to-jekyll/`, date: `29 Aug 2020`, title: `Welcome to Jekyll!`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};