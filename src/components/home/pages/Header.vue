<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe743;
            </span>
        </div>
        <div class="header-search">
            <span class="iconfont">
                &#xe624;
                输入城市/景点/等
            </span>
        </div>
        <div class="header-right">
			<router-link to="/city">{{cityname}}
			</router-link>
            <span class="iconfont">
                &#xe6b0;
            </span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed:{
		...mapState(['cityname'])
	}
}
</script>
<style lang="stylus" scoped>
@import  '~@/assets/css/var.styl'
.header{
	width:100%;
	line-height: .88rem;
	background:$bgColor;
	font-size:.36rem;
	display: flex;
    color :$textColor
}
.header-left{
	width:.4rem;
	padding:0 .2rem;
	text-align: center;
	font-weight: bold;
}
.header-search{
	flex:1;
	background: #fff;
	height: .6rem;
	margin:.14rem 0;
	border-radius: .1rem;
	color:#e4e7ea;
	line-height: .6rem;
	font-size:.28rem;
	padding-left:.2rem;
}
.header-right{
	font-size:.28rem;
	padding: 0 .2rem;
}
.header-right a{
	color:#fff;
}
</style>