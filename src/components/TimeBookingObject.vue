<template>
  <div @click.self="closeBooking" v-show="showModal" class="modal-shad">
	<div class="book-window-time">
		<h2>Бронирование</h2>
		<h3>Выберите даты</h3>
        <div class="datePickerTime">
            <div class="date-picker">
                <Datepicker 
                    v-model="date" 
                    inline 
                    autoApply 
                    :min-date="new Date()" 
                    :disabledDates="disabledDates"
                    :enableTimePicker="false"
                    >
                </Datepicker>
            </div>
            <div class="time-picker">
                <label for="first">Выберите время начала:</label> <div></div>
                <select id="first" v-model="firstSelectedIndex">
                    <option v-for="(val, i) in freeTimes" :key="i" :value="i" :class="{ isBooked: !val.isBook }" :disabled="!val.isBook">
                        {{ val.time }}
                    </option>
                </select>
                <label for="second">Выберите время окончания:</label> <div></div>
                <select id="second" v-model="secondSelected">
                    <option v-for="(val, i) in secTimes" :key="i" :value="val.time">
                        {{ val.time }}
                    </option>
                </select>
                        
                <select id="selector1">
                    <option value="">Тапчан 1</option>
                    <option value="">Тапчан 2</option>
                    <option value="">Тапчан 3</option>
                </select>

            </div>
        </div>
		<span style="display: block; margin-bottom: 1vw; margin-top: 20px;" class="validation">Дата 14.05.2022 занята</span>
		<button class="datepicker-book">Забронировать</button>
	</div>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
	components: {
		Datepicker
	},
    data() {
        return {
			date: '',
			showModal: false,
            freeTimes: [
                {time: '00:00', isBook: true},
                {time: '01:00', isBook: true},
                {time: '02:00', isBook: false},
                {time: '03:00', isBook: true},
                {time: '04:00', isBook: true},
                {time: '05:00', isBook: true},
                {time: '06:00', isBook: true},
                {time: '07:00', isBook: true},
                {time: '08:00', isBook: true},
                {time: '09:00', isBook: true},
            ],
            firstSelectedIndex: 0,
            firstSelected: '',
            secondSelected: '',
            secTimes: [
                {time: '00:00', isBook: true},
                {time: '01:00', isBook: true},
                {time: '02:00', isBook: false},
                {time: '03:00', isBook: true},
                {time: '04:00', isBook: true},
                {time: '05:00', isBook: true},
                {time: '06:00', isBook: true},
                {time: '07:00', isBook: true},
                {time: '08:00', isBook: true},
                {time: '09:00', isBook: true},
            ],
        }
    },
    methods: {
        closeBooking(){
            this.showModal = false;
        }
    },
    watch: {
        firstSelectedIndex(newVal){
            this.secTimes = []
            for(let i=0; i<this.freeTimes.length; i++){
                if(i > newVal) {
                    if (!this.freeTimes[i].isBook){
                        break
                    }
                    this.secTimes.push(this.freeTimes[i]);
                }
            }
        }
    },
    computed: {
        firstSelected() {
            return this.freeTimes[this.firstSelectedIndex].time;
        }
    },
}
</script>

<style>

</style>