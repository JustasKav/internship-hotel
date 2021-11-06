<template>
  <div class="container">
    <div class="edit-box">
      <h2>Enter new details</h2>
      <form v-on:submit.prevent="updateBooking" class="input-form" action="">
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
        <input
          v-model="bookingDetails.departure"
          type="datetime-local"
          name=""
          id=""
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["details", "id"],
  emits: ["reloadBooking"],

  data() {
    return {
      bookingDetails: {
        type: "accommodation",
        state: "",
        arrival: "",
        departure: "",
        guest: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        },
        unit: {
          code: "",
        },
      },
    };
  },
  methods: {
    async updateBooking() {
      this.setTime()
      await axios
        .put(this.id, this.bookingDetails)
        .then(() => {
          alert("Booking has been updated");
          this.$emit("reloadBooking", this.id);
        })
        .catch((message) => {
          console.log(`Error updating booking ${this.id} `);
          alert(`Error updating booking ${message}`);
        });
    },
     setTime(){
      let arrivalDate = new Date(this.bookingDetails.arrival).toISOString();
      this.bookingDetails.arrival = arrivalDate;

      let departureDate = new Date(this.bookingDetails.departure).toISOString();
      this.bookingDetails.departure = departureDate;
    }
  },
};
</script>

<style scoped>
.edit-box {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
li {
  margin-top: 10px;
  text-align: left;
}
p {
  font-weight: 900;
}
</style>