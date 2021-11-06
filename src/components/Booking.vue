<template>
  <div class="details-card">
    <p>Main details</p>
    <ul>
      <li>State: {{ details.state }}</li>
      <li>Type: {{ details.type }}</li>
      <li>Guest: {{ name }}</li>
      <li>Arrival: {{ arrivalTime }}</li>
      <li>Departure: {{ departureTime }}</li>
      <li>Room: {{ details.unit.code }}</li>
    </ul>
    <p>Contact details</p>
    <ul>
      <li>Number: {{ details.guest.phone }}</li>
      <li>Email: {{ details.guest.email }}</li>
    </ul>
    <button @click="toggleEdit">Edit</button>
    <button @click="deleteBooking">DELETE</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["details", "id"],
  emits: ["toggleEdit"],
  data() {
    return {};
  },
  methods: {
    toggleEdit() {
      this.$emit("toggleEdit");
    },

    async deleteBooking() {
      await axios
        .delete(this.id)
        .then(() => {
          alert("Booking deleted");
          this.$router.push("/");
        })
        .catch((message) => {
          alert("Booking deletion failed");
          console.log(`Booking deletion failed ${message}`);
        });
    },
  },
  computed: {
    name() {
      return this.details.guest.firstName + " " + this.details.guest.lastName;
    },
    arrivalTime() {
      const date = new Date(this.details.arrival);
      return (
        date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate() + " ::: " + date.getHours() + " " + date.getMinutes() + " local time"
      );
    },
    departureTime() {
      const date = new Date(this.details.departure);
      return (
        date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate() + " ::: " + date.getHours() + " " + date.getMinutes() + " local time"
      );
    }, 
  },
};
</script>

<style scoped>
.details-card {
  width: 500px;
  margin: 0 auto;
}
li {
  margin-top: 10px;
  text-align: left;
}
p {
  font-weight: 900;
}
</style>