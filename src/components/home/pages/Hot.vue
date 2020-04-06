<template>
    <div class="hot">
        <div class="hot-top">
            <div class="hot-left">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span>本周热门榜单</span>
            </div>
            <p class="hot-right">全部榜单 ></p>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>$<span>{{item.mark}}</span></p>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList']
}
</script>
<style scoped lang='stylus'>
@import  '~@/assets/css/common.styl'
.hot{
    margin-top: .15rem;
    background-color: #fff;
}
.hot-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0 .15rem;
}
.hot-left{
	color:#212121;
	font-size:.32rem;
}
.hot-left img{
    width: .3rem;
    height: .3rem;
}
.hot-right{
	color:#616161;
	font-size:.28rem;
}
.hot-item{
    font-size:.32rem;
    width: 2rem;
    height: 3rem;
    padding: 0 .2rem;
    display: inline-block
}
.hot-item img{
    width: 100%;
    height: 2rem;
}
.hot-item p{
    text-align: center;
    textover();
}
.hot-item p span{
	color:#ff8300;
	font-size:.32rem;
}
.hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
</style>