var yo = require('yo-yo');

module.exports = yo`<div class="container">
    <div class="row">
        <div class="col s10 push-s1">
            <div class="row">
                <div class="col m5 hide-on-small-only">
                    <img class="iphone" src="http://lorempixel.com/300/750" alt="">
                </div>
                <div class="col s12 m7">
                    <div class="row">
                        <div class="signup-box">

                            <h1 class="calmbikers">Calmbikers</h1>
                            <form action="" class="signup-form">
                                <h2>Regístrate</h2>
                                <div class="section">
                                    <a href="" class="btn btn-fb hiden-on-small-only">Inciar sesión con Facebook</a>
                                    <a href="" class="btn btn-fb hide-on-med-and-up">Inciar sesión</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                    <input type="email" name="email" placeholder="Correo electrónico">
                                    <input type="text" name="name" placeholder="Nombre Completo">
                                    <input type="text" name="name" placeholder="Nombre de usuario">
                                    <input type="password" name="name" placeholder="Contraseña">
                                    <a href="" class="btn btn-signup waves-effect waves-light" type="submit">Regístrate</a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="row">
                        <div class="login-box">
                            ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>`