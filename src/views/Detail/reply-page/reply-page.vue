<template>
  <div class="reply-page">
    <Navigation :title="'回复'" :type="2" @reply="upLoad"></Navigation>
    <main>
      <textarea 
        class="text-area" 
        cols="30" 
        rows="10" 
        :placeholder="`回复:${nickname}`"
        v-model="reply"></textarea>
      <ul class="image-list">
        <li 
          class="image-item"
          v-for="(item, index) in imageList"
          :key="index"
          :class="{isImage: imageList[index] !== ''}"
          @click="changeImageList(index)">
          <input 
            type="file" 
            ref="input" 
            @change="showImage(index)">
          <div class="add"></div>
          <img class="preview" :src="imageList[index]">
          <i class="close"></i>
        </li>
      </ul>
    </main>
    <Prompt :message="message" />
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
import Prompt from '@/components/prompt/prompt.vue';

export default {
  data() {
    return {
      nickname: '',
      sourceId: '',
      reply: '',
      imageList: [''],
      type: 2,
      message: '',
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
      this.sourceId = JSON.parse(this.$route.query.source_id);
      this.type = JSON.parse(this.$route.query.type);
      this.commentId = JSON.parse(this.$route.query.comment_id);
      this.replyOuterId = JSON.parse(this.$route.query.reply_outer_id);
      this.reply = '';
      this.imageList = [''];
    },
    changeImageList(index) {
      this.$refs.input[index].click();
    },
    showImage(index) {
      let filePath = this.$refs.input[index].value;
      let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
      if(!fileFormat.match(/.png|.jpg|.jpeg/)) {
        this.message = '上传的图片格式应为：png/jpg/jpeg';
        return;
      }
      this.imageList.splice(index, 1, window.URL.createObjectURL(this.$refs.input[index].files[0]));
      this.imageList.push('');
    },
    upLoad(item) {
      let token = localStorage.getItem('token');
      let data = {
        token: token,
        sourceId: this.sourceId,
        classId: 103,
        model: 'iPhone X',
        content: this.reply,
      };
      if(this.imageList.length !== 1) {
        data.imageList = this.imageList.slice(0, this.imageList.length - 1);
      }
      if(this.type === 2) {
        data.commentId = this.commentId;
      }
      if(this.replyOuterId !== '0') {
        data.replyOuterId = this.replyOuterId;
      }
      this.$axios({
        url: '/api/comment/submit',
        data,
      })
      .then(() => {

      })
      .catch(() => {
        this.message = '回复失败，请稍后再试！';
      })
    }
  },
  components: {
    Navigation,
    Prompt,
  }
}
</script>
<style lang="less" scoped>
  @import './reply-page.less';
</style>