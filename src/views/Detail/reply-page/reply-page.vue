<template>
  <div class="reply-page">
    <Navigation v-if="type === 2" :title="'回复'" :type="2" @rightClick="upLoad"></Navigation>
    <Navigation v-else :title="'评论'" :type="2" @rightClick="upLoad"></Navigation>
    <main>
      <textarea 
        class="text-area" 
        cols="30" 
        rows="10" 
        :placeholder="placeholder"
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
          <i class="close" @click.stop="deleteImage(index)"></i>
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
      ajaxSwitch: true,
    }
  },
  computed: {
    placeholder() {
      if(this.type === 2) {
        return `回复:${this.nickname}`
      } else {
        return `写出你对游戏玩法、操作、攻略等方面的客观评价吧，优质评论将会前排展示~并获得金币奖励~`
      }
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
      this.type = JSON.parse(this.$route.query.type);
      if(this.type === 2) {
        this.nickname = JSON.parse(this.$route.query.nickname);
        this.replyOuterId = JSON.parse(this.$route.query.reply_outer_id);
        this.replyCommentId = JSON.parse(this.$route.query.comment_id);
      }
      this.sourceId = JSON.parse(this.$route.query.source_id);
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
    deleteImage(index) {
      event.preventDefault();
      this.imageList.splice(index, 1);
    },
    upLoad(item) {
      let token = sessionStorage.getItem('token');
      if(this.reply.length <= 15) {
        this.$toast('评论的字数不得小于15个字');
      }
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
        data.replyCommentId = this.replyCommentId;
      }
      if(this.replyOuterId !== '0') {
        data.replyOuterId = this.replyOuterId;
      }
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.message = '正在发布评论...';
        this.$axios({
          url: '/api/comment/submit',
          headers: {
            "User-Agent": "xmyy",
          },
          data,
        })
        .then(() => {
          this.message = '发布成功';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.$router.back();
          }, 1000);
        })
        .catch(() => {
          this.message = '回复失败，请稍后再试！';
          this.ajaxSwitch = true;
        })
      }
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