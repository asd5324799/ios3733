<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <DownloadPopup />
  </div>
</template>
<script>
import Box from '@/common/box.js';
import DownloadPopup from '@/components/download-popup/download-popup.vue';

export default {
  created() {
    this.getToken();
    let uuid = localStorage.getItem('uuid');
    if(!uuid) {
      this.createUuid();
    }
  },
  methods: {
    getToken() {
      let box = new Box();
      let temp = box.getToken();
    },
    createUuid() {
      const DATE = new Date();
      let year = DATE.getFullYear();
      let month = DATE.getMonth() + 1;
      let day = DATE.getDay();
      let hour = DATE.getHours();
      let minute = DATE.getMinutes();
      let second = DATE.getSeconds();
      year = year.toString().slice(2);
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      let str = `ffffffff-${year}${month}-${day}${hour}-${minute}${second}-${year}${month}${day}${hour}${minute}${second}`;
      localStorage.setItem('uuid', str);
    }
  },
  components: {
    DownloadPopup,
  }
}
</script>