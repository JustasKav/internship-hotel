<template>
  <h1>Check your booking details</h1>
  <div class="container">
    <div class="input-field">
      <input
        type="text"
        placeholder="enter your booking id"
        v-model="bookingId"
      />
      <button @click="loadBooking(bookingId)">Continue</button>
    </div>

    <div class="flex-box">
      <Booking
        @toggle-edit="toggleEdit"
        v-if="showBooking"
        :details="details"
        :id="bookingId"
      />
      <EditBooking
        @reload-booking="reload"
        v-if="showEdit"
        :details="details"
        :id="bookingId"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Booking from "../components/Booking.vue";
import EditBooking from "../components/EditBooking.vue";

export default {
  components: {
    Booking,
    EditBooking,
  },
  data() {
    return {
      showBooking: false,
      showEdit: false,
      bookingId: "",
      details: "",
    };
  },
  methods: {
    reload(id) {
      this.loadBooking(id);
    },
    toggleEdit() {
      this.showEdit = !this.showEdit;
    },
    async loadBooking(id) {
      await axios
        .get(id)
        .then((resp) => {
          this.details = resp.data;
          this.showBooking = true;
        })
        .catch((message) => {
          alert(`Failed to get booking ${id}`);
          console.log(`Booking fetch failed ${message}`);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
.flex-box {
  display: flex;
  margin: 50px auto 0 auto;
  width: 1000px;
}

.input-field {
  margin-top: 50px;
}
</style>