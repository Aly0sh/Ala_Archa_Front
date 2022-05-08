<template>
  <div class="super">
        <div class="form-fauna-flora">
        <h1 style="text-align: center;">Добавление типа объекта</h1>

        <div class="formbox">
            <form>
    
              <label for="name">Введите название:</label>
              <br>
              <input v-model="object.objectName" type="text" id="name" name="name" placeholder="Введите название:"><br>
    
              <br>

              <label for="name">Введите цену:</label>
              <br>
              <input v-model="object.objectPrice" type="text" id="name" name="price" placeholder="Введите цену:"><br>

              <br>

              <label for="name">Введите зону:</label>
              <br>
              <input v-model="object.areaId" type="text" id="name" name="zone" placeholder="Введите Зону:"><br>

              <br>

              <label for="name">Введите время или дату:</label>
              <br>
              <input v-model="object.objectDate" type="text" id="name" name="time" placeholder="Введите дату:"><br>

              <br>

              <label for="name">Введите минимальное время:</label>
              <br>
              <input v-model="object.objectMinTime" type="text" id="name" name="time" placeholder="Введите минимальное время:"><br>
        
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
            <img :src="object.imgName" alt="aa">
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
        object: {
            objectName: '',
            objectPrice: '',
            areaId: '',
            objectDate: '',
            objectMinTime: '',
            imgName: ''
        },
        areas: [],
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