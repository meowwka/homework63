<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Microgram </title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="no-scroll" onload="addingAllPosts()">>
<div class="container">
    <div class="row justify-content-center">
        <div class="col col-lg-7 posts-container" id="posts">
            <form id="postForm" class=" formStyle" enctype="multipart/form-data" action="/demo" method="post">
                <div>
                    <input type="hidden" id="user_id" name="user_id" value="777" />
                    <input type="text" placeholder="Описание" name="description" id="description">
                    <input type='file' id="image" name="image" accept='image/*'>
                    <button type="button" id="btnSubmit"> Загрузить </button>
                    <hr>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Splash screen -->
    <section id="page-splash" class="page-splash">
        <div class="card" id="registration-form">
            <div class="card-body">
                <button class="h3" onClick='location.href="http://localhost:8000/registration"'>Зарегистрируйтесь</button>
            </div>
            <button
                    id="login_button" type="button"  class="btn btn-secondary" style="padding: 15px;" ><h4> Войти</h4> </button>

        </div>
    </section>

</body>
</html>
<script src="/js/script.js"></script>