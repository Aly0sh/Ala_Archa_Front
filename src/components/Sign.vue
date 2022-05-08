<template>
<div>
<transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
            <div v-if="data == 'auth'" class="sign">
            <div class="inForm">
                <img class="flower1" src="../assets/img/icons/flower3.png" alt="">
                <img class="flower2" src="../assets/img/icons/flower2.png" alt="">
                <div class="logo">
                    <img src="../assets/img/icons/logo.png" alt="">
                </div>
                <p class="center signFont title">Авторизация</p>
                <form>
                    <div class="fields">
                        <input v-model="email" type="email" placeholder="E-Mail" style="margin-bottom: 2vw;">
                        <br>
                        <input v-model="password" type="password" placeholder="Пароль">
                        <br>
                    </div>
                    <div class="buttons">
                        <input v-on:click.prevent="signin" type="submit" class="signInButton signFont" value="Войти">
                        <br><br>
                        <button @click="data = 'reg'" class="signUpButton signFont">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
            </div>
            <div v-if="data == 'reg'" class="sign">
            <div class="inForm">
                <img class="flower1" src="../assets/img/icons/flower2.png" alt="">
                <img class="flower2" src="../assets/img/icons/flower.png" alt="">
                <div class="logo">
                    <img src="../assets/img/icons/logo.png" alt="">
                </div>
                <p class="center signFont title">Регистрация</p>
                <form>
                    <div class="fields">
                        <input v-model="user.firstName" placeholder="Имя">
                        <br>
                        <input v-model="user.lastName" placeholder="Фамилию">
                        <br>
                        <input v-model="user.email" type="email" placeholder="Электронную почту">
                        <br>
                        <input v-model="user.phone" placeholder="Телефон">
                        <br>
                        <input v-model="user.password" type="password" placeholder="Пароль">
                        <br>
                        <input v-model="repeatPassword" type="password" placeholder="Повторите пароль">
                        <br><br>
                    </div>
                    <div class="buttons">
                        <button v-on:click.prevent="signup" class="signUpButton signFont">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
            </div>
    </div>
</transition>
</div>
</template>
 
<script>
    import axios from "axios";

    export default {
        name: "Sign",
        data(){
            return {
                show: false,
                data: 'auth',
                email: "",
                password: "",
                signInErrorFlag: false,
                signInErrorMessage: "",
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    password: ''
                },
                repeatPassword: ''
            }
        },
        methods: {
            closeModal: function () {
                this.show = false;
                this.data = 'auth';
            },

            signin() {
                console.log("inside sign in");
                let email = this.email;
                let password = this.password;
                axios
                    .post("http://localhost:8083/user/sign-in", { email, password })
                    .then((resp) => {
                    if (resp.status == 200) {
                        this.$store.commit("setCredentials", {
                        email: resp.data.value.email,
                        token: 'Bearer ' + resp.data.value.token,
                        signInFlag: true,
                        id: resp.data.value.id
                        });

                        this.$router.push("/");

                        sessionStorage.setItem("email", resp.data.value.email);
                        sessionStorage.setItem("token", 'Bearer ' + resp.data.value.token);
                        sessionStorage.setItem("signInFlag", true);
                        sessionStorage.setItem("id", resp.data.value.id)
                        this.show = false;
                    }

                    console.log(this.$store.state);
                    })
                    .catch((error) => {
                    if (!error.response) {
                        this.$router.push("/error");
                        this.$store.commit("setError", error);
                    } else if (error.response.data.details === undefined) {
                        this.$router.push("/error");
                        this.$store.commit("setError", error);
                    } else {
                        this.signInErrorFlag = true;
                        this.signInErrorMessage = error.response.data.details;
                        console.log(error.response.data);
                    }
                });
            },
            signup() {
                if(this.repeatPassword == this.user.password){                
                    console.log("inside sign up");
                    axios
                    .post("http://localhost:8083/user/sign-up", this.user)
                    .then((resp) => {
                        if (resp.status == 200) {
                            this.data = 'auth';
                    }
                    console.log(this.$store.state);
                    })
                    .catch((error) => {
                        if (!error.response) {
                        this.$router.push("/error");
                        this.$store.commit("setError", error);
                        } else if (error.response.data.details === undefined) {
                        this.$router.push("/error");
                        this.$store.commit("setError", error);
                        } else {
                        this.signInErrorFlag = true;
                        this.signInErrorMessage = error.response.data.details;
                        console.log(error.response.data);
                        }
                    });
                } else {
                    console.log('Повторите пароль')
                }
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

<style src="../assets/css/all.css"/>