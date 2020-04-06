<template>
    <div class="header">
        <div class="header-return" v-show="showHeader">
            <span class="border-return"></span>
			<span class="iconfont return" @click="toHome">&#xe743;</span>
        </div>
        <div class='header-top' v-show="!showHeader"
        :style="styleOpacity"
		>
			<div class='header-left'>
				<span class='iconfont' @click="toHome">
					&#xe743;
				</span>
			</div>
			北京国际鲜花港
		</div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    methods:{
        toHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        let that = this;
        window.addEventListener("scroll",function(){
           let top= document.documentElement.scrollTop;
           if(top>45)
           {
               let opacity = top/130;
               opacity=opacity>1?1:opacity;
               that.styleOpacity={opacity}
               that.showHeader=false;
           }else{
               that.showHeader=true;
           }
        })
    }
}
</script>


<style scoped lang='stylus'>
@import  '~@/assets/css/var.styl'
.header-return{
    position:absolute;
    width: .72rem;
    height: .72rem;
    left: .1rem;
    top: .1rem;
}
.border-return{
    position: absolute;
    width: .72rem;
    height: .72rem;
    background-color: black;
    border-radius: 50%;
    opacity:  .5;
}
.return{
    position: absolute;
	color:#fff;
	width:.72rem;
	line-height: .72rem;
	text-align: left;
    text-indent: .20rem;
    font-size:.32rem;
    font-weight: bold;
}
.header-top{
	z-index:99;
	position: fixed;
	top:0;
	text-align: center;
	width:100%;
	line-height: .88rem;
	background: $bgColor;
	color:$textColor;
	font-size:.36rem;
}
.header-left{
	position:absolute;
	width:.4rem;
	padding:0 .2rem;
	text-align: center;
	font-weight: bold;
}
</style>