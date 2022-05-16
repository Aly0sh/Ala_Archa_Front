<template>
    <div class="container">
        <div class="super-admin">
            <h2>История брони объектов</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Имя пользователя</th>
                    <th>Номер телефона</th>
                    <th>Тип объекта</th>
                    <th>Название объекта</th>
                    <th>Дата заезда</th>
                    <th>Дата выезда</th>
                    <th>Время начала</th>
                    <th>Время конца</th>
                    <th class="status">Статус</th>
                </tr>
                <tr v-for="(object_book, i) in object_books" :key="i">
                    <td>{{ object_book.userId }}</td>
                    <td>{{ object_book.fullName }}</td>
                    <td>{{ object_book.userPhone }}</td>
                    <td>{{ object_book.objectTypeName }}</td>
                    <td>{{ object_book.objectName }}</td>
                    <td>{{ converterDate(object_book.startDate) }}</td>
                    <td>{{ converterDate(object_book.endDate) }}</td>
                    <td>{{ object_book.startTime }}</td>
                    <td>{{ object_book.endTime}}</td>
                    <td v-if="object_book.orderStatus == 'CONFIRMED'" class="accept">Принято</td>
                    <td v-else class="deny">Отклонено</td>
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
      object_books: []
    }
  },
  mounted(){
    axios
      .get("http://localhost:8083/object/order/get-confirmed-or-declined")
      .then(response => {(this.object_books = response.data.value);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    },
  methods: {
      converterDate(dateString){
        let date = new Date(dateString.split('T')[0]);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        if(day <= 9){
          day = '0' + day;
        }
        if(month <= 9){
          month = '0' + month;
        }
        return (day + '.' + month + '.' + year)
      }
  }
}
</script>

<style src="../../assets/css/super.css"/>