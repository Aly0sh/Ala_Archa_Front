<template>
  <div class="super">
        <div class="form-fauna-flora">
        <h1 style="text-align: center;">Добавление Растения/Животного</h1>

        <div class="formbox">
            <form>
    
              <label for="name">Введите название:</label>
              <br>
              <input v-model="florauna.name" type="text" id="name" placeholder="Введите название:"><br>
    
              <br>

              <label for="desc">Введите описание:</label>
              <br>
              <textarea v-model="florauna.description" id="desc" placeholder="Введите описание.."></textarea>
        
            </form>
        </div>
        
        
        <label for="select">Выберите тип:</label>
        <div class="type">
            <select v-model="florauna.natureType" id="select">
                <option value="FLORA">Флора</option>
                <option value="FAUNA">Фауна</option>
            </select>
        </div>

        <br>
        <br>

        <div class="photo-upload">
            <form>
                <input type="file" @change="handleImage" id="img" name="img" accept="image/*" hidden>
                <label for="img">Прикрепить фотографию:</label>
            </form>
        </div>
        <br>
        <div v-if="florauna.photo" class="getImage">
          <img class="uploaded-image" :src="florauna.photo" alt="aa">
        </div>
        
        <div class="wrapper" style="margin: 0;">
            <button id="wrapper" @click="create">Добавить</button>
        </div>
        <br>
        <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        florauna: {
            name: '',
            description: '',
            photo: '',
            natureType: ''
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
          this.florauna.photo = e.target.result;    
          };

        reader.readAsDataURL(fileObject);
      },
      create(){
            axios
            .post("http://localhost:8083/nature/create",
              this.florauna, 
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
    }
}
</script>

<style src="../../assets/css/super.css"/>