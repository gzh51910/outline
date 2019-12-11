<template>
	<view class="content">
		<h1>Uni-app测试2</h1>
		<img class="logo" src="/static/logo.png"/>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log('onload')
		},
		created(){
			console.log('created')
		},
		methods: {
			
		}
	}
</script>

<style>
	h1{color:#58bc58;}
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
