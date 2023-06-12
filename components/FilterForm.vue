<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="breed">Breed:</label>
      <select id="breed" v-model="selectedBreed" class="form-control">
        <option value="">All</option>
        <option v-for="breed in breeds" :key="breed" :value="breed">{{ breed }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="subBreed">Sub Breed:</label>
      <select id="subBreed" v-model="selectedSubBreed" class="form-control">
        <option value="">All</option>
        <option v-for="subBreed in subBreeds" :key="subBreed" :value="subBreed">{{ subBreed }}</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Filter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      selectedBreed: '',
      selectedSubBreed: ''
    }
  },
  computed: {
    breeds() {
      // Ambil daftar breed dari store Vuex
      return this.$store.state.breeds
    },
    subBreeds() {
      // Ambil daftar sub-breed dari store Vuex
      return this.$store.state.subBreeds
    }
  },
  methods: {
    submitForm() {
      // Kirim event dengan nilai breed dan sub-breed yang dipilih
      this.$emit('filter', {
        breed: this.selectedBreed,
        subBreed: this.selectedSubBreed
      })
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
