<template>
  <nav>
    <div class="navbar">
        <div class="menu">
            <img src="./assets/img/icons/menu.svg" @click="$router.push('/')" alt="">
        </div>
        <div class="logo">
            <img :src="require('./assets/img/icons/logo.png')" @click="$router.push('/')" alt="logo">
        </div>
        <ul class="green font">
            <li><a href="default.asp"><router-link to="/">Главная</router-link></a></li>
            <li><a href="news.asp"><router-link to="/about-us">О нас</router-link></a></li>
            <li><a href="contact.asp"><router-link to="/services">Услуги</router-link></a></li>
            <li><a href="about.asp"><router-link to="/entry">Въезд</router-link></a></li>
        </ul>
        <a class="green authorize font" @click="showModal">Авторизация</a>
    </div>
  </nav>
  <router-view />
  <sign ref="sign"/>
</template>

<script>
import Sign from "@/components/Sign.vue";

export default {
  components: {
      Sign
  },
  methods: {
    signOut() {
      this.$router.push("/");
      this.$store.commit("setCredentials", {
        email: "please log in",
        token: "",
        signInFlag: false,
      });
      sessionStorage.clear();
      localStorage.removeItem("clickedMenu");
    },
    showModal: function () {
        this.$refs.sign.show = true
    }
  },
  watch: {
    // $route() {
    //   if (
    //     this.$route.path != "/" &&
    //     this.$route.path != "/sign-in" &&
    //     !this.$store.getters.getSignInFlag &&
    //     !Object.values(this.$store.getters.getError).length
    //   ) {
    //     this.$router.push("/sign-in");
    //   } 
    // },
  },
};
</script>

<style lang="css">
body{
  margin: 0;
}


h6{
    font-size: calc(1em + 1vw);
    font-weight: 800;
    line-height: calc(1.2em + 1vw);
    color: #FFFFFF;
}

.navbar{
    margin-top: 0; 
    width: 100%;
    display: flex;
    background-color: #7EB685;
    height: 100%;
    color: #FFFFFF;
    z-index: 1;
    vertical-align: middle;
}

.navbar .logo{
    float: left;
}

.navbar .logo img{
    width: 100%;
    height: 100%;
}

.navbar ul {
    list-style-type: none;    
    border-radius: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    float: left;
    margin: 1% 0 0 9%;
}

.navbar ul li {
    display: inline;
    border-right: white 2px solid;
    padding: 0 1.5vw;
}

.navbar ul li a,
.navbar .authorize {
    font-size: calc(0.5em + 0.5vw);
    line-height: calc(0.6em + 0.5vw);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color:inherit;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.navbar ul li:last-child{
    border-right: none;
}

.navbar ul li a:active{
    text-decoration-line: underline;
}

.navbar .authorize{
    border-radius: 45px;
    float: right;
    margin-top: 1%;
}

.navbar_mobile{
    display: block;
    background-color: #7EB685;

}


footer{
    margin-top: 10%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: calc(0.6em + 1vw);
    line-height: calc(1em + 1vw);
}

footer .row h6{
    margin: 1.5vw 0 0 0;
}

footer .row ul{
    list-style: none;
    padding-left: 0;
    color: #fff !important;
}

footer .row ul li{
    padding-top: 1%;
    display: list-item;
}

footer .row ul li a{
    text-decoration: none; 
}
footer .row{
    text-align: center;
    display: unset;
}
footer .row .logo,
footer .row .navigation,
footer .row .contacts,
footer .row .address,
footer .row .social{
    width: 100%;
}
footer .row .logo{
    padding: 1% 0;
}
footer .row .logo img{
    width: 20%;
    margin: 1.5vw 1vw 0;
}
footer .social ul{
    list-style-type: none;
    padding-bottom: 0;
    margin-bottom: 0;
}
footer .social ul li {
    display: inline;
    padding: 0 2%;
}
footer .social img{
    height: 8vw;
}

.green{
    background-color: #7EB685;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { 
    .navbar .menu{
        float: left;
        margin: 5% 33% 0 7%;
    }
    .navbar .logo{
        text-align: center;
        width: 10%;
        padding: 2% 0;
    }
    .navbar ul, .navbar .authorize{
        display: none;
    }

    h6{
        font-size: 16px;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .navbar .menu{
        float: left;
        margin: 3% 36% 0 7%;
    }
    .navbar .logo{
        width: 8%;
        padding: 1% 0;
    }
    .navbar ul, .navbar .authorize{
        display: none;
    }
    footer{
        font-size: calc(0.5em + 1vw);
        line-height: calc(0.6em + 1vw);
    }
    h6{
        font-size: calc(0.8em + 1vw);
        line-height: calc(0.9em + 1vw);
    }
    footer .row .logo img{
        width: 17%;
        margin: 1.5vw 1vw 0;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .navbar{
        display: block;
        margin: 1vw auto 3vw;  
        width: 85%;
        background-color: transparent;
        height: 5vw;
    }
    .navbar .menu{
        display: none;
    }
    .navbar ul,
    .navbar .authorize{
        padding: 1% 2.5%;
        height: 4vw;
        display: flex;
    }
    .navbar .logo{
        width: 6.5%;
    }
    footer{
        font-size: calc(0.4em + 1vw);
        line-height: calc(0.5em + 1vw);
    }
    .green{
        height: 92vw;
    }
    footer .row .logo img{
        width: 15%;
        margin: 1.5vw 1vw 0;
    }
    footer .row .navigation,
    footer .row .contacts{
        float: left;
        width: 50%;
    }
    footer .row .address,
    footer .row .social{
        float: left;
    }
    footer .row .social img{
        height: 6vw;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .navbar ul,
    .navbar .authorize{
        margin-top: 1.5%;
        padding: 0 2%;
        height: 3vw;
    }
    .navbar .logo{
        width: 5%;
    }
    .navbar{
        margin-bottom: 1.5vw;
    }
    .green{
        height: unset;
    }
    footer{
        font-size: calc(0.5em + 0.5vw);
        line-height: calc(0.7em + 0.5vw);
    }
    footer .row{
        display: flex;
        text-align: start;
        justify-content: space-between;
        padding-bottom: 2%;
    }
    footer .row .logo,
    footer .row .navigation,
    footer .row .contacts,
    footer .row .address,
    footer .row .social{
        float: left;
        width: unset;
    }
    footer .row .logo{
        width: 14%;
        padding: 0 3em 0 0;
    }
    footer .row .logo img{
        width: 70%;
        margin: 1.5vw 1vw 0;
    }
    footer .row .navigation{
        padding: 1vw 4vw 0 4vw;
    }
    
    footer .row .contacts{
        padding: 1vw 4vw 0 4vw;
    }
    
    footer .row .address{
        width: 22vw;
        padding: 1vw 4vw 0 4vw;
    }
    
    footer .row .social{
        padding: 1vw 3vw 0 4vw;
    }
    footer .social ul{
        list-style-type: none;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    footer .social ul li {
        display:list-item;
        padding: 2% 0;
    }
    footer .row .social img{
        height: 2.5vw;
    }
    h6{
        font-size: calc(0.6em + 0.5vw);
        line-height: calc(0.7em + 0.5vw);
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>
