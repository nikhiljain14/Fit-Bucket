function loadMore() {
    document.getElementsByClassName("mainDiv")[0].style.maxHeight = "3500px";
    let btn = document.getElementsByClassName("centerloadMoreBtn")[0];
    btn.remove();
}

function openPostPage(n){
    window.open('post.html')
    // window.open('mainPost.html')
    localStorage.setItem("articleIndex",n)
}

// let post = document.querySelector('.post-article')
// console.log(post)

// post.innerHTML = arr[n].article