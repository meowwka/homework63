<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Microgram</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>

        <!-- Splash screen -->
        <section id="page-splash" class="page-splash">
            <div class="d-flex justify-content-center">
                <div class="mx-3">
                    <form id="login-form">
                        <h3>Вход</h3>
                        <input type="text" name="username" class="form-control mb-1" placeholder="Логин">
                        <input type="password" name="password" class="form-control mb-1" placeholder="Пароль">
                        <button type="submit" onClick='location.href="http://localhost:8000/index"'  class="btn btn-outline-primary btn-block">Войти</button>
                    </form>
                </div>
            </div>

        </section>
    </body>
</html>

<script src="js/login.js"></script>
