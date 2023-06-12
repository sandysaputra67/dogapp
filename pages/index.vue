<template>
  <div>
    <h1 >Dog Catalog</h1>
    
    <FilterForm @filter="filterDogs" />
    <div class="card-columns">
      <Card v-for="dog in dogs" :key="dog" :imageUrl="dog" :breed="getBreed(dog)" :subBreed="getSubBreed(dog)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Card from '@/components/Card'
import FilterForm from '@/components/FilterForm'

export default {
  components: {
    Card,
    FilterForm
  },
  computed: {
    ...mapGetters(['dogs']),
  },
  methods: {
    ...mapActions(['filterDogs']),
    getBreed(dog) {
      // Ambil nama breed dari URL gambar
      const parts = dog.split('/')
      return parts[parts.length - 2]
    },
    getSubBreed(dog) {
      // Ambil nama sub-breed dari URL gambar
      const parts = dog.split('/')
      return parts[parts.length - 3]
    }
  }
}
</script>
