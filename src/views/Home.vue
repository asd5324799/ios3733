<template>
  <div class="home">
    <GameInfo 
      v-for="(list, index) of qualityFirstList"
      :key="index"
      :list="list">
    </GameInfo>
  </div>
</template>

<script>
import GameInfo from '@/components/gameinfo/gameinfo.vue';

export default {
  data() {
    return {
      qualityRecommendList: [],
      qualityFirstList: [],
    }
  },
  methods: {
    handleGameList(res) {
      this.qualityRecommendList = res.data.game_list[0].game_list;
      this.qualityFirstList = res.data.game_list;
    }
  },
  mounted() {
    this.$axios.get('/api/index/index')
    .then(this.handleGameList)
  },
  components: {
    GameInfo,
  }
}
</script>
