<template>
    <div>
        <p>login</p>
        <button @click="geturl">getUrl</button>
        <button @click="getHello">getHello</button>
        <router-link to="/home">home</router-link>
    </div>

</template>

<script>
    import axios from 'axios';
    import service from "@/api/request";
    export default {
        name: "login",
        data: function () {
            return {
                a: 1,
            }
        },
        methods: {
            geturl(){
                axios.get('localhost:8082/hello')
                    .then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            getHello(){
                service.get('/hello')
                .then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>