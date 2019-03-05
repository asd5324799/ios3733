<template>
  <div class="reply-page">
    <Navigation :title="'回复'"></Navigation>
    <main>
      <textarea class="text-area" cols="30" rows="10" :placeholder="`回复:${nickname}`"></textarea>
      <ul class="image-list">
        <li 
          class="image-item"
          v-for="(item, index) in imageList"
          :key="index"
          @click="upLoad(index)">
          <input type="file" ref="input">
          <div class="add"></div>
          <img class="preview" :src="imageList[index].value">
          <i class="close"></i>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
export default {
  data() {
    return {
      nickname: '',
      imageList: [{}],
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.nickname = JSON.parse(this.$route.query.nickname);
    },
    upLoad(index) {
      this.$refs.input[index].addEventListener('change', () => {
        this.imageList[index].value = this.$refs.input[index].value;
      })
      this.$refs.input[index].click();
    }
  },
  components: {
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './reply-page.less';
</style>