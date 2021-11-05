<template>
  <h1>Enter booking details</h1>
  <div class="container">
    <form v-on:submit.prevent="createBooking" class="input-form" action="">
      <select required v-model="bookingDetails.state">
        <option value="" disabled selected hidden>Choose status</option>
        <option value="expected">Expected</option>
        <option value="arrived">Arrived</option>
        <option value="departed">Departed</option>
      </select>
      <input
        required
        v-model="bookingDetails.guest.firstName"
        type="text"
        placeholder="Name"
      />
      <input
        required
        v-model="bookingDetails.guest.lastName"
        type="text"
        placeholder="Last name"
      />
      <input
        required
        v-model="bookingDetails.guest.email"
        type="email"
        placeholder="Email"
      />
      <input
        required
        v-model="bookingDetails.guest.phone"
        type="text"
        placeholder="Phone"
      />
      <input
        required
        v-model="bookingDetails.unit.code"
        type="text"
        placeholder="Room number"
      />
      <input type="submit" value="Submit" />
      <input v-model="bookingDetails.arrival" type="datetime" name="" id="" />
      <input v-model="bookingDetails.departure" type="datetime" name="" id="" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookingDetails: {
        type: "accommodation",
        state: "expected",
        arrival: "2032-12-13T14:00:00.000Z",
        departure: "2032-12-21T11:00:00.000Z",
        guest: {
          firstName: "Vue",
          lastName: "Beautiful",
          email: "fromVue@mail.com",
          phone: "+4552659541",
        },
        unit: {
          code: "200-A",
        },
      },
      
    };
  },
  methods: {
    async createBooking() {
      try {
        await axios.post(this.randomString, this.bookingDetails);
        alert(`Booking has been created ${this.randomString}`);
      } catch (err) {
        console.error(err);
        alert("Booking error");
      }
    },
  },
  computed:{
    randomString(){
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz123456789";

      //specify the length for the new string
      const lenString = 5;
      let randomstring = "";

      //loop to select a new character in each iteration
      for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
      }
      return randomstring
    }
  }
};
</script>

<style scoped>
.container {
  width: 500px;
  margin: 0 auto;
}
.input-form {
  display: flex;
  flex-direction: column;
}
</style>