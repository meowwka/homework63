'use strict';

function showSplashScreen() {
    let x = document.getElementById("page-splash");
    x.style.visibility = "visible";
    document.body.classList.add("no-scroll");
}

function hideSplashScreen() {
    let x = document.getElementById("page-splash");
    x.style.visibility = "hidden";
    document.body.classList.remove("no-scroll");
}

function createCommentElement(comment){
    let content = '<a href="#" class="muted">' + comment.user_id + '</a>' + '<p>'+ comment.text + '</p>';
    let element = document.createElement('div');
    element.innerHTML = content;
    return element;
}

function createPostElement(post) {
    let post_content = `
          <div id = "${post.id}">
              <div>
                <img class="d-block w-100" src="${post.img}" alt="Post image">
              </div>
              <!-- image block end -->
              <div class="px-4 py-3">
                <!-- post reactions block start -->
                <div class="d-flex justify-content-around">
                
                  <span class="h1 mx-2 muted" id="likeIcon.${post.id}" onclick="changeLikeStatus(this.id);">
                    <i class="far fa-heart"></i>
                  </span>
                  
                    <span class="h1 mx-2 muted" id="commentIcon.${post.id}" onclick="changeCommentFormStatus(this.id);">
                        <i class="far fa-comment"></i>
                    </span>         
                  
                  <span class="mx-auto"></span>
                  
                  <span class="h1 mx-2 muted" id="saveIcon.${post.id}" onclick="changeSaveStatus(this.id);">
                    <i class="far fa-bookmark"></i>
                  </span>
                </div>
                <!-- post reactions block end -->
                <hr>
                <!-- post section start -->
                <div>
                    <p> ${post.description} </p>
                </div>
                <!-- post section end -->
                <hr>
                <!-- comments section start -->
                  <div class="py-2 pl-3 postComments">
                      <div>
                        <a href="#" class="muted">someusername</a>                    
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim</p>
                      </div>
                    <form id="commentForm" class="commentForm" action="/index" method="post">
                         <div>
                             <input type="hidden" name="user_id" value="77" />
                             <input type="hidden" name="post_id" value="${post.id}"/>
                             <textarea type="text" placeholder="your comment" name="comment" id="comment"  style="height: 50px; width: 450px;"></textarea>
                             <button type="button" id="commentSubmit" onclick="addComment(this.form)"> add comment </button>
                         </div>
                     </form>
                </div>
                <!-- comments section end -->
              </div>
           </div>`;
    let post_element = document.createElement(`div`);
    post_element.innerHTML += post_content;
    post_element.classList.add("card", "my-3");
    return post_element;
}



class Comment{
    constructor(user_id,post_id,text) {
        this.user_id = user_id;
        this.post_id = post_id;
        this.text = text;
    }
}

class Post{
    constructor(id,img,description) {
        this.id = id;
        this.description = description;
        this.img = img;
    }
}

function addComment(form){
    let data = new FormData(form);
    let post_id = data.get("post_id").toString();

    let cm = new Comment(data.get("user_id"), data.get("post_id"),data.get("comment"));
    let cmElement = createCommentElement(cm);

    document.getElementById(post_id).getElementsByClassName("postComments")[0].
        children[0].append(cmElement);

    fetch('http://localhost:8000/addComment', {
        method: 'POST',
        body: data
    }).then(r => r.json()).then(data => {
        console.log(data);
    });
}


function changeLikeStatus(id){
    let heart = document.getElementById(id).children[0];
    if(heart.classList.contains("text-danger")){
        heart.classList.remove("text-danger","fas");
    }else{
        heart.classList.add("text-danger","fas");
    }
}

function changeSaveStatus(id){
    let saveIcon = document.getElementById(id).children[0];
    if(saveIcon.classList.contains("fas")){
        saveIcon.classList.remove("fas");
    }else{
        saveIcon.classList.add("fas");
    }
}

function changeCommentFormStatus(id){
    let postId = id.replace('commentIcon.','');
    let commentForm = document.getElementById(postId).getElementsByTagName('form')[0];
    if(commentForm.classList.contains("commentForm")){
        commentForm.classList.remove("commentForm")
    }
    else{
        commentForm.classList.add("commentForm")
    }
}

// let firstPostImage = document.getElementsByClassName("first_image")[0];
// console.log(firstPostImage);
// firstPostImage.addEventListener('dblclick',function(){
//     let heartByImage = like.children[0];
//     if(heartByImage.classList.contains("text-danger")){
//         heartByImage.classList.remove("text-danger","fas");
//     }else{
//         heartByImage.classList.add("text-danger","fas");
//     }
// });

async function getPosts() {
    let url = 'http://localhost:8000/getPosts';
    let response = await fetch(url);
    return await response.json();
}

async function addingAllPosts(){
    let posts = await getPosts();

    for(let i=0; i<posts.length;i++){
        let post = new Post(posts[i].id, posts[i].img, posts[i].description);
        let elem = createPostElement(post);
        document.getElementById("posts").appendChild(elem);
    }
}

window.addEventListener('load', function () {
    const savePostButton = document.getElementById("btnSubmit");

    savePostButton.addEventListener("click", function() {
        const postForm = document.getElementById("postForm");
        let data = new FormData(postForm);

        fetch('http://localhost:8000/index', {
            method: 'POST',
            body: data
        }).then(r => r.json()).then(data => {
            window.location.href = "http://localhost:8000/index";
        });
    });
});


const postss = document.getElementsByClassName('card');
for(let i = 0; i < postss.length; i++) {
    let ims = postss[i].getElementsByClassName('w-100');
    let he = postss[i].getElementsByClassName('fa-heart')[0];
    for(let j = 0; j < ims.length; j++) {
        ims[j].addEventListener('dblclick', function() {
            if(he.classList.contains('fas')) {
                he.classList.remove('fas');
                he.classList.remove('text-danger');
                he.classList.add('far');
            } else {
                he.classList.remove('far');
                he.classList.add('text-danger');
                he.classList.add('fas');
            }
        })
    }

};
