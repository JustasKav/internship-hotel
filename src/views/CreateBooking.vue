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
      <input v-model="bookingDetails.arrival" type="datetime-local" />
      <input v-model="bookingDetails.departure" type="datetime-local" />
      <input type="submit" value="Submit" />
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
        arrival: "",
        departure: "",
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
      this.setTime()
      await axios
        .post(this.randomString, this.bookingDetails)
        .then(() => {
          alert(`Booking has been created: ${this.randomString}`);
        })
        .catch((message) => {
          alert("Booking creation failed");
          console.log(`Booking creation failed ${message}`);
        });

    },
    setTime(){
      let arrivalDate = new Date(this.bookingDetails.arrival).toISOString();
      this.bookingDetails.arrival = arrivalDate;

      let departureDate = new Date(this.bookingDetails.departure).toISOString();
      this.bookingDetails.departure = departureDate;
    }
  },
  computed: {
    randomString() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz123456789";

      //specify the length for the new string
      const lenString = 5;
      let randomstring = "";

      //loop to select a new character in each iteration
      for (let i = 0; i < lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
      }
      return randomstring;
    },
  },
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