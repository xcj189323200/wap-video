<template>
  <div class="home">
    <ul class="movie_block">
      <li v-for="item in dataList" :key="item.title" class="movie_box" @click="chooseVideoClickHandler(item)">
        <img :src="item.cover_img" alt class="movie_img">
        <!-- <img src="//puui.qpic.cn/vcover_vt_pic/0/owyequak2ck3bra1551418479/350" alt="" class="movie_img"> -->
        <span class="movie_title">{{item.title}}</span>
        <span class="movie_desc">这是演员</span>
        <p class="movie_score">这是评分</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue-property-decorator'
import api from '@api/index'
export default {
  data () {
    return {
      dataList: []
    }
  },
  async created () {
    let { data } = await api.getVideoList()
    console.log(data, 'data')
    this.dataList = data
  },
  methods: {
    chooseVideoClickHandler (item) {
      this.$router.push({ path: '/movie', query: { id: item._id } })
      // console.log(item._id)
    }
  }
}
</script>
<style lang='scss' scoped>
.movie_block {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  .movie_box {
    width: 245px;
    height: 500px;
    margin-left: 7.5px;
    position: relative;
    .movie_score {
      position: absolute;
      right: 10px;
      bottom: 110px;
      color: #ff722c;
      font-size: 14px;
    }
    .movie_img {
      width: 245px;
      height: 400px;
    }
    // .movie_desc{

    // }
    // .movie_title{

    // }
  }
  :nth-of-type(3n + 1) {
    margin-left: 0;
  }
}
</style>
