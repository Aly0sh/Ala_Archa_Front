<template>
  <div class="super">
    <div class="form-fauna-flora">
        <h1 style="text-align: center;">Добавление Меню</h1>
        <div class="formbox">
            <form>
    
              <label for="name">Введите название:</label>
              <br>
              <input v-model="menu.menuName" type="text" id="name" name="firstname" placeholder="Введите название:"><br>
    
              <br>

              <label for="name">Введите описание:</label>
              <br>
              <input v-model="menu.menuDescription" type="text" id="name" name="firstname" placeholder="Введите описание:"><br>
    
              <br>
              <label for="name">Введите цену:</label>
              <br>
              <input v-model="menu.menuPrice" type="text" id="name" name="firstname" placeholder="Введите цену:"><br>
    
            </form>
        </div>

        <div class="type">
            <select id="select">
                <option value="" selected disabled>Выбрать секцию: </option>
                <option value="1">Стандарт 1</option>
                <option value="2">Стандарт 2</option>
                <option value="3">Стандарт 3</option>
                <option value="4">Стандарт 4</option>
            </select>
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
        menu: {
            menuName: '',
            menuDescription: '',
            menuPrice: ''
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