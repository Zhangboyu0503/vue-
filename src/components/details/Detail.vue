<template>
    <div>
        <Banner></Banner>
        <Header></Header>
    </div>
</template>

<script>
import Banner from './pages/Banner'
import Header from './pages/Header'
export default {
    components:{
        Banner,
        Header
    },
    activated(){
        document.documentElement.scrollTop=0;
    }
}
</script>
<style scoped>
div{
    height: 40rem;
}
</style>