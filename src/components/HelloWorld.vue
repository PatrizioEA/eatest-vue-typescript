<template>
  <div class="hello"> 
    <h1>{{ msg }}</h1>   
    <p>{{ info }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import AuthService from '../services/auth.service' 

@Component
export default class HelloWorld extends Vue {

  @Prop() private msg!: string;
  info = ''

  async mounted () {
    //let response = await axios.get<string>('http://127.0.0.1:8000/api/sezioni/?format=json');
    //this.info = response.data;      

    var token = await AuthService.login('patrizio', 'Pass123$'); 
    console.log(token)
    const AuthStr = 'Bearer '.concat(token); 
    let response = await axios.get<string>('http://127.0.0.1:8000/api/esami/?format=json',
    { 'headers': { 'Authorization': AuthStr } });
    console.log(response);
    this.info = response.data; 
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
