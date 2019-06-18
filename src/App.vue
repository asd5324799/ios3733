<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Box from '@/common/box.js';

export default {
  created() {
    this.getToken();
  },
  methods: {
    getToken() {
      let box = new Box();
      let temp = box.getToken();
    }
  }
}
</script>

