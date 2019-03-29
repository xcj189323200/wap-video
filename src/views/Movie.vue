<template>
  <div class="movie">
    <!-- <h1 @click="test_clickHandler">This is an about page222</h1> -->
    <iframe id='playView' :src="convertHost + datas.video_url" ></iframe>
    <!-- <iframe id='playView' :src="convertHost + datas.video_url" ></iframe> -->
  </div>
</template>
<script>
// import Vue from 'vue'

export default {
  data () {
    return {
      convertHost: 'http://17kyun.com/api.php?url=',
      datas: {}
    }
  },
  async created () {
    let getId = this.$route.query.id
    // console.log(getId)
    let { data } = await this.$http.getVideoDetails(getId)
    this.datas = data || {}
    console.log(this.convertHost + this.datas.video_url, 'convertHost + datas.video_url')
  }
}
</script>
<style lang="scss" scoped>
.movie{
   #playView{
     position: absolute;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     z-index: 99;
   }
}
</style>
