<template>
    <div class="like">
        <div class="like-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜您喜欢
        </div>
        <div class="like-item border-bottom" v-for="item in likeList" :key="item.id" @click="toDetail">
            <div class="img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="like-right">
                <div class="like-right-top">{{item.title}}</div>
                <div class="like-right-middle">
                    <span>{{item.msg}}</span>条评论
                </div>
                <div class="like-right-bottom">
                    <span class="mark">{{item.pre}}</span>元起
                    <span class="markto">{{item.map}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['likeList'],
    methods:{
        toDetail(){
            this.$router.push('/details');
        }
    }
}
</script>
<style  scoped>
.like{
    background-color: #fff;
    margin-top: .15rem;
    font-size: .28rem;

}
.like-top{
    font-size: .32rem;
    padding: .2rem .2rem;
}
.like-top img{
    width:.3rem;
	height: .3rem;
}
.like-item{
    padding: .1rem .2rem;
    overflow: hidden;
    position: relative;
}
.img img{
    width:2rem;
	height: 2rem;
    float: left;
}
.like-right{
    margin-left: 2.2rem;
}
.like-right-top{
    font-size:.36rem;
	color:#212121;
    margin-top:.4rem;
    margin-bottom: .2rem;
}
.like-right-middle{
    margin-bottom: .2rem;
}
.like-right-bottom{
    position: relative;
}
.mark{
    color:#ff8300;
    font-size:.4rem;
}
.markto{
    position: absolute;
    right: .2rem;
}
</style>