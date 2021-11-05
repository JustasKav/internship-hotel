import { createApp } from "vue";
import App from "./App.vue";
import Axios from "axios";
import router from './router'

Axios.defaults.baseURL="https://api-dev.digitalguest.com/v1/properties/internshipHotel/bookings/"
Axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4NjA0MzUsImV4cCI6NTA1MTg2MDgzNSwiYXVkIjoiYXBpIiwiaXNzIjoiZGciLCJzdWIiOiJKdXN0YXMiLCJqdGkiOiIyNDc2MjAwZDM4ZjkifQ.YfxfxIkPAIZ8AbtdoUreSgAHyMwAvL3XVtiVGFGv2IXFerFiOnjm9J9iTzvF9APhZHW-hr8SWm9wUxCgYv1mV0BvnhxjqxXMD65obVrKObAP_bIAHWdREvYm5JjXkXbJBAUDBLi4NnKChJFvf6oO1mqWScpaVPdcBRvqrZmnY3ENXIQduwXLL6oeCmF3Yi8dlOY406jAbD8go7rbmRXwYivpraHGwMSoByRr0HFMTjiht3kiuKWNPluf49lwIABrNMzmIUDcewakcB-lSjFFIAnO1CHEEoxhB_uoJ3HUtV4KZellnkmx0ITM2Cw-W1W4Ap9ssarYU-qTOXLl3FbnHw",
  
Axios.defaults.headers.get["Accept"] = "application/json"
Axios.defaults.headers.post["Content-Type"] = "application/json"




createApp(App).use(router).mount("#app");
