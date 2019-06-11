<template>
  <div class="home">
    <h1>Home</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Director</th>
          <th>Producer</th>
          <th>Release Date</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in films" :key="index">
          <td>{{ index | numberDataPlus }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.director }}</td>
          <td>{{ item.producer }}</td>
          <td>{{ item.release_date }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </table>
    {{ error }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data: function(){
    return {
      films: [],
      error: ''
    }
  },
  mounted: function(){
    var self = this;

    axios.get('https://swapi.co/api/films/')
    .then(function (response) {

      // change the local state, "save" to your component
      self.films = response.data.results;
    })
    .catch(function (error) {
      this.error = error
    });
  }
}
</script>

<style>
  table{
    text-align: center;
    width: 100%;
  }
</style>
