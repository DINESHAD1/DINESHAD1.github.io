<template>
    <div id="divmaind">
      <form @submit.prevent="getWeather" class="form">
        <div>
         
          <input v-model.trim="city" placeholder="enter your city" />
        <button type="submit">get weather</button>
        </div>
      </form>
      <div class="main">
        <div class="mainchild">
        <p><strong>feels like: {{ result.feels_like -273 }}</strong></p>
        <p><strong>humidity: {{ result.humidity }}</strong></p>
        <p><strong>pressure: {{ result.pressure }}</strong></p>
        <p><strong>temperature: {{ result.temp -273 }}</strong></p>
        <p><strong>high: {{ result.temp_max }}</strong></p>
        <p><strong>low: {{ result.temp_min }}</strong></p>
        </div>
      </div>
    </div>
  </template>
  <script>
  const APIKEY = "48d081df0b65779dcfc0bbf1dc004d94";
  export default {
    name: "WeatherApp",
    data() {
      return {
        city: "",
        result: {},
      };
    },
    methods: {
      async getWeather() {
        if (!this.city) {
          return;
        }
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${APIKEY}`
        );
        const { main } = await res.json();
        this.result = main;
      },
    },
  };
  </script>

  <style>


    .divwather{
      width: 140px;
      height: 140px;
      background-color: aquamarine;
      margin: 10px;
      display: flex;
    }
    .wathermain{
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: column;
    }
    .rows{
      width: 100%;
      /*height: 400px; */
      background-color: crimson;
      display: flex;
      justify-content: center;
    }
    .main{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .mainchild{
      width: 400px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      margin-top: 30px;
      margin-left: 100px;
    }

    .form{
      margin-top: 50px;
    }


    #divmaind{
      background-image: url('.././assets/wather.jpg');
      background-position: center;
      height: 440px;
      margin: 10px;
      border-radius: 20px;
      padding: 10px;    height: 440px;
      margin: 10px;
      border-radius: 20px;
      padding: 10px;
    }
  </style>