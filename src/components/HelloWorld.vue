<template>
  <div>
    <form v-on:submit.prevent="addPet">
      <input v-model="name" placeholder="name" />
      <input v-model="status" placeholder="status" />
      <button type="submit">Add Pet</button>
    </form>
    <p>New Pets:</p>
    <div v-if="arr.length">
      <div v-for="(value, index) in arr" :key="index">{{ value }}</div>
    </div>
  </div>
</template>

<script>
import { PetApi } from '../../swagger-client' // client generated on postinstall

/*
  To add specific headers to request
  NOTE: you can get error, if you reqest returns raw string data

  import { ApiClient } from '../../swagger-client'

  ApiClient.instance.defaultHeaders = {
    Accept: 'application/xml',
    'Content-Type': 'application/xml',
  }
*/

export default {
  name: 'HelloWorld',
  data: () => ({
    arr: [],
    name: '',
    status: '',
  }),
  methods: {
    addPet: function() {
      let apiInstance = new PetApi()

      const opts = {
        id: 1,
        name: this.name,
        status: this.status,
      }

      apiInstance
        .addPet(opts)
        .then(res => this.arr.push(res))
        .catch(err => console.error(err))
    },
  },
}
</script>
