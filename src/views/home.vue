<template>
    <div id="home">
        <div class="page-header">
            <h2>首页</h2>
        </div>
        <div class="panel-body">
            <p>{{ count }}</p>
            <p>{{ localCount }}</p>
            <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data:function () {
            return {
                localCount:2
            }
        },
        methods:{
            increment(){
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
        }
    }
</script>

<style scoped>

</style>