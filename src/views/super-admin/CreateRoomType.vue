<template>
  <div class="super">
        <div class="form-fauna-flora">
        <h1 style="text-align: center;">Добавление типа комнат</h1>

        <div class="formbox">
            <form>

              <label for="name">Введите название Гостиницы:</label>
              <br>
              <input v-model="roomType.hotelName" type="text" id="name" name="name" placeholder="Введите название Гостиницы:"><br>
    
              <br>

              <label for="name">Введите название типа:</label>
              <br>
              <input v-model="roomType.roomTypeName" type="text" id="name" name="type" placeholder="Введите название типа:"><br>

              <br>

              <label for="name">Введите цену:</label>
              <br>
              <input v-model="roomType.price" type="text" id="name" name="price" placeholder="Введите цену:"><br>
        
            </form>
        </div>
    
        <br>
        
        <div class="photo-upload">
            <form action="/action_page.php">
                <input type="file" id="img" name="img" accept="image/*" hidden>
                <label for="img">Прикрепить фотографию:</label>
            </form>
        </div>

        <br>
        <br>

        <div class="getImage">
            <img :src="roomType.imgName" alt="aa">
        </div>
        
        <div class="wrapper" style="margin: 0;">
            <button id="wrapper">Добавить</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        roomType: {
            hotelName: '',
            roomTypeName: '',
            price: '',
            imgName: ''
        },
      }
    },

    methods: {
      handleImage(e){
          const selectedImage = e.target.files[0];
          this.createBase64Image(selectedImage);
      },

      createBase64Image(fileObject){
          const reader = new FileReader();

          reader.onload = (e) => {
              this.hotel.imgName = e.target.result;
          };

        reader.readAsDataURL(fileObject);
      },

      createHotel(){
            axios
            .post("http://localhost:8083/hotel/create",
              this.hotel, 
              {
                headers:{
                  Authorization:this.$store.getters.getToken,
                }
              })
            .then((resp) => {
                if (resp.status == 200) {
                // this.$router.push("/");
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
      }
  },

  mounted(){
    console.log("Getting users")
    axios
      .get("http://localhost:8083/user/get-admins")
      .then(response => {(this.areas = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
      console.log(this.users);
    }

}
</script>

<style src="../../assets/css/super.css"/>