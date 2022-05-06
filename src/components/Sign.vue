<template>
<transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
            <div v-if="data == 'auth'" class="sign">
                <div class="logo">
                    <img src="../assets/img/icons/logo.png" alt="">
                </div>
                <form action="">
                    <div class="row">
                        <div class="email">
                            <input type="email" placeholder="E-Mail">
                            <br> <br>
                            <input type="checkbox" id="remember" name="remember" class="check">
                            <label for="remember" class="signFont">Запомнить меня</label>
                        </div>
                        <div class="password">
                            <input type="password" placeholder="Пароль">
                            <br><br>
                            <a href="" class="signFont">Забыл пароль</a>
                        </div>
                    </div>
                    <div class="buttons">
                        <input type="submit" class="signInButton signFont" value="Войти">
                        <br><br>
                        <a><button @click="data = 'reg'" class="signUpButton signFont">Зарегистрироваться</button></a>
                    </div>
                    <div class="row">
                        <p class="signFont">Или продолжить с Google</p>
                    </div>
                    <div class="row">
                        <img src="../assets/img/icons/google.png" alt="">
                    </div>
                </form>
            </div>
            <div v-if="data == 'reg'" class="sign">
                <div class="logo">
                    <img src="../assets/img/icons/logo.png" alt="">
                </div>
                <p class="center signFont title">Регистрация</p>
                <form action="">
                    <div class="fields">
                        <input type="text" placeholder="Введите имя (ФИО)">
                            <br> <br>
                        <input type="text" placeholder="Введите телефон или имя">
                        <br> <br>
                        <input type="password" placeholder="Пароль">
                        <br><br>
                        <div class="row">
                            <input type="checkbox" id="remember" name="remember" class="check">
                            <label for="remember" class="signFont">Запомнить меня</label>
                        </div>
                    </div>
                    <div class="buttons">
                        <input type="submit" class="signUpButton signFont" value="Зарегистрироваться">
                    </div>
                </form>
            </div>
    </div>
</transition>
</template>
 
<script>
    export default {
        name: "Sign",
        data: function () {
            return {
                show: false,
                data: 'auth'
            }
        },
        methods: {
            closeModal: function () {
                this.show = false;
                this.data = 'auth';
            }
        }
    }
</script>
 
<style>
    .modal-shadow {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        z-index: 3;
        background: rgba(0, 0, 0, 0.39);
    }
 
    .sign {
        z-index: 3;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
 
    }

    .modal-enter,
    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: opacity .5s ease
    }
</style>

<style src="../assets/css/styles2.css"></style>