import axios from 'axios'

export const state = () => ({
  breeds: [],
  subBreeds: [],
  dogs: []
})

export const getters = {
  dogs: state => state.dogs
}

export const mutations = {
  SET_BREEDS(state, breeds) {
    state.breeds = breeds
  },
  SET_SUBBREEDS(state, subBreeds) {
    state.subBreeds = subBreeds
  },
  SET_DOGS(state, dogs) {
    state.dogs = dogs
  }
}

export const actions = {
  async fetchBreeds({ commit }) {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all')
      const breeds = Object.keys(response.data.message)
      commit('SET_BREEDS', breeds)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchSubBreeds({ commit }, breed) {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
      const subBreeds = response.data.message
      commit('SET_SUBBREEDS', subBreeds)
    } catch (error) {
      console.error(error)
    }
  },
  async filterDogs({ commit }, { breed, subBreed }) {
    try {
      let url = 'https://dog.ceo/api/breeds/image/random/10'
      if (breed) {
        url = `https://dog.ceo/api/breed/${breed}`
        if (subBreed) {
          url += `/${subBreed}`
        }
        url += '/images/random/10'
      }
      const response = await axios.get(url)
      const dogs = response.data.message
      commit('SET_DOGS', dogs)
    } catch (error) {
      console.error(error)
    }
  }
}
