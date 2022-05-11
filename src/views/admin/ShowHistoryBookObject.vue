<template>
    <div class="container">
        <div class="super-admin">
            <h2>История брони объектов</h2>
            <table>
                <tr>
                    <th>user</th>
                    <th>Тип объекта</th>
                    <th>Имя объекта</th>
                    <th>Дата</th>
                    <th>Время начала</th>
                    <th>Время конца</th>
                    <th class="status">Статус</th>
                </tr>
                <tr v-for="(object_book, i) in object_books" :key="i">
                    <td>{{ object_book.user }}</td>
                    <td>{{ object_book.objectType }}</td>
                    <td>{{ object_book.objectName }}</td>
                    <td>{{ object_book.date }}</td>
                    <td>{{ object_book.startTime }}</td>
                    <td>{{ object_book.endTime}}</td>
                    <td class="accept deny">Принято/Отклонено</td>
                </tr>
            </table>
            <a href="/admin/show-admin-menu"><div class="back">
                    <p>Назад</p>
                </div></a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
    return{
      hotels: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/hotel/get-for-list")
      .then(response => {(this.hotels = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      delete(id){
        axios
            .delete(('http://localhost:8083/hotel/delete/' + id), 
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