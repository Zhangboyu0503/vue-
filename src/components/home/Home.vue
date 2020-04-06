<template>
<div class="home">
    <Header></Header>
    <Swiper :swiperList='swiperList'></Swiper>
    <Icons :iconsList='iconsList'></Icons>
    <Location></Location>
    <Activity></Activity>
    <Hot :hotList='hotList'></Hot>
    <Like :likeList='likeList'></Like>
    <Vacation :vacationList='vacationList'></Vacation>
</div>
</template>



<script>
import Header from './pages/Header'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
import Location from './pages/Location'
import Activity from './pages/Activity'
import Hot from './pages/Hot'
import Like from './pages/Like'
import Vacation from './pages/Vacation'
import {mapState} from 'vuex'
export default {
    data()
    {
        return{
            swiperList:[],
            iconsList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
            changeCity:'',
        }
    },
    computed:{
        ...mapState(['cityname'])
    },
    components:{
        Header,
        Swiper,
        Icons,
        Location,
        Activity,
        Hot,
        Like,
        Vacation
    },
    mounted()
    {
        this.http();
        this.changeCity=this.cityname;
    },
    methods:{
        http(){
            let that = this;
            that.axios.get('http://localhost:8080/mock/dataHome.json')
            .then((res)=>{
                let data =res.data.data;
                data.forEach((item)=>{
                    if(item.city==that.cityname)
                    {
                that.swiperList=item.swiperList;
                that.iconsList=item.iconsList;
                that.hotList=item.hotList;
                that.likeList=item.likeList;
                that.vacationList=item.vacationList
                    }
                })

            })
        }
    },
    activated(){
        if(this.changeCity!=this.cityname)
        {
            this.http();
            this.changeCity=this.cityname
        }
    }
}
</script>
<style scoped>
.home{
    background-color: #f5f5f5;
}
</style>