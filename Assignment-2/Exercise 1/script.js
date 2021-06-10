let slideIndex = 1;

function changePosts(n) {
    showPosts(slideIndex += n);
  }
  
  function currentPost(n) {
    showPosts(slideIndex = n);
  }

function showPosts(n) {
let posts = document.getElementsByClassName("posts");
let thumbnails = document.getElementsByClassName("thumbnails");

if (n > posts.length) {slideIndex = 1}
if (n < 1) {slideIndex = posts.length}
for (let i = 0; i < posts.length; i++) {
    posts[i].style.display = "none";
}

for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].className = thumbnails[i].className.replace(" active", "");
}

    posts[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
}