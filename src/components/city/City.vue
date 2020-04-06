<template>
    <div>
        <Header></Header>
        <List :hotCities='hotCities' :cities='cities'></List>
    </div>
</template>
<script>
import Header from './page/Header'
import List from './page/List'
export default {
    data()
    {
        return{
            hotCities:[],
            cities:{},
        }
    },
    components:{
        Header,
        List,
    },
    mounted(){
        this.http();
    },
    methods:{
        http(){
            this.axios.get('http://localhost:8080/mock/city.json')
            .then((res)=>{
                let data=res.data.data;
                this.hotCities=data.hotCities;
                this.cities=data.cities
            })
        }
    }
}
</script>