<template>
  <div class="super">
        <div class="form-fauna-flora">
        <h1 style="text-align: center;">Добавление Растения/Животного</h1>

        <div class="formbox">
            <form>
    
              <label for="name">Введите название:</label>
              <br>
              <input v-model="florauna.floraunaName" type="text" id="name" name="firstname" placeholder="Введите название:"><br>
    
              <br>

              <label for="desc">Введите описание:</label>
              <br>
              <textarea v-model="florauna.floraunaDescription" id="desc" name="description" placeholder="Введите описание.."></textarea>
        
            </form>
        </div>

        <div class="type">
            <select id="select">
                <option value="0">Выбрать тип: </option>
                <option value="1">Стандарт 1</option>
                <option value="2">Стандарт 2</option>
                <option value="3">Стандарт 3</option>
                <option value="4">Стандарт 4</option>
            </select>
        </div>

        <br>
        <br>

        <div class="photo-upload">
            <form action="/action_page.php">
                <input type="file" id="img" name="img" accept="image/*" hidden>
                <label for="img">Прикрепить фотографию:</label>
            </form>
        </div>
        <br>
        <div class="getImage">
          <img :src="florauna.imgName" alt="aa">
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
        florauna: {
            floraunaName: '',
            floraunaDescription: '',
            imgName: ''
        },
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