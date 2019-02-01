<template>
  <div class="billboard">
      <div class="title"><h3><i class="left-ico"></i>畅销榜<i class="right-ico"></i></h3></div>
      <div class="game-box">
          <ul class="game-list">
              <li class="game-item">
                  <div class="game-pic">
                      <router-link to="home"><img src="http://pic5.3733.com/icon/201812/e68a0ab54e2f228db205b8422d692e16.png" alt=""></router-link>
                      <i class="cap-ico"></i>
                      <span class="no-ico"></span>
                  </div>
                  <p class="game-title">大圣归来星耀版</p>
                  <a href="" class="down">下载</a>
              </li>
              <li class="game-item">
                  <div class="game-pic">
                      <router-link to="home"><img src="http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png" alt=""></router-link>
                      <i class="cap-ico"></i>
                      <span class="no-ico"></span>
                  </div>
                  <p class="game-title">大圣归来星耀版</p>
                  <a href="" class="down">下载</a>
              </li>
              <li class="game-item">
                  <div class="game-pic">
                      <router-link to="home"><img src="http://pic5.3733.com/icon/201812/6eaaa35c5798cab05b7d65ddb89cfaf6.png" alt=""></router-link>
                      <i class="cap-ico"></i>
                      <span class="no-ico"></span>
                  </div>
                  <p class="game-title">大圣归来星耀版</p>
                  <a href="" class="down">下载</a>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Billboard',
  props: ['gameList'],
  mounted() {
  },
}
</script>
<style lang="less" scoped>
  @import './billboard.less';
</style>
