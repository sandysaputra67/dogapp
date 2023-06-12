<template>
  <div class="card">
    <img :src="imageUrl" alt="Dog Image" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ breed }}</h5>
      <p class="card-text">{{ subBreed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'breed', 'subBreed']
}
</script>

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 1rem;
}
.card-img-top {
  height: 12rem;
  object-fit: cover;
}
</style>
