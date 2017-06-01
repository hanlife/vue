<template>
	<div>
		<v-header></v-header>
		<div class="tab">
			<div class="tab-item">
				<router-link to='/goods'>商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to='/ratings'>评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to='/seller'>商家</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  components: {
	'v-header': header
  }
}
	
</script>

<style>
	.tab{
		width: 750px;
		height: 50px;
		display: flex;
		flex-direction: row;
		line-height: 50px;
		text-align: center;
		font-size: 24px;
		color:#333;
	}
	.tab-item{
		flex: 1;
	}
	
</style>
