<template>
  <div>
    <van-popup 
      v-model="popupShow"
      :position="'bottom'"
      @close="close"
      class="popup">
      <div class="content">
        <div class="title">
          <div class="name">{{$store.getters.downloadInfo.title}}:</div>
          <div class="button1" @click="normalDownload()">{{text}}</div>
        </div>
        <div 
          class="button2" 
          @click="downloadGame()" 
          ref="down">
          <span></span>
          <div>稳定版下载</div>
        </div>
        <div class="red">注：每个svip账号只能绑定一个设备，若当前账号已绑定其他设备，则无法下载稳定版。</div>
        <div class="green" @click="BOX_openInNewWindow('http://m.3733.com/go_udid.html')">如何安装稳定版游戏？</div>
      </div>
    </van-popup>
    <van-popup 
      v-model="popupShow3" 
      :close-on-click-overlay="false"
      class="popup2" >
      <div class="content">
        <div class="text">稳定版为svip用户专属渠道，请先开通svip会员下载</div>
        <div class="color" @click="handleAlert1()">稳定版有什么区别？</div>
        <div class="bottom">
          <div class="left" @click="changePopupShow3()">取消</div>
          <div class="right" @click="BOX_openInNewWindow('https://u.3733.com/float.php/float/box/svip.html')">开通svip</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Box from "@/common/box.js";
import {JSEncrypt as JSEncryptLong} from 'encryptlong';

export default {
  data() {
    return {
      popupShow: false,
      popupShow3: false,
    }
  },
  computed: {
    popupShow2() {
      return this.$store.getters.showDownloadInfo;
    },
    text() {
      return this.$store.getters.downloadInfo.hasOwnProperty('repair') && this.$store.getters.downloadInfo.repair === "1" ? '修复中' : '普通版下载';
    }
  },
  watch: {
    popupShow2() {
      this.popupShow = this.popupShow2;
    }
  },
  methods: {
    close() {
      this.$store.commit('setShowDownloadInfo', false);
    },
    opensslEncryptLong(str) {
      let encryptor = new JSEncryptLong();
      encryptor.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1K5ed2hWiO1Q7GQQeyDrtljzJCD84hLLd5rJjBRo/YyBVjPeYSFTkNim9bPoPGnzwz1u4/SKsXU5647Brw0JC9p9nx7FViDV29ecgU5CvjbyhtqdeUtPohKAnaokPiRtnVNtvUcNnWMvxr6Ik/UfjfVNf77QHr+jF2iKd5QKVWQIDAQAB')
      let temp = encryptor.encryptLong(str);
      return temp;
    },
    downloadGame() {
      this.$refs.down.classList.add("loading");
      let data = this.opensslEncryptLong(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","game_id":"${this.$store.getters.downloadInfo.id}","from":"212"}`)
      this.$axios({
        url: '/manage/addPersonalSign',
        data: {
          code: 2,
          data: data,
        }
      }).then(res => {
        this.$toast(res.msg);
        if(res.data.status === 1) {
          // 跳转下载管理页
          this.$router.push({
            name: "DownloadManage"
          });
        } else if(res.data.status === 2) {
          // 弹出办理VIP弹窗
          this.changePopupShow3();
        } else if(res.data.status === 3) {
          // 是vip但是没有绑定设备的，绑定设备
            // 转BASE64
            let dataBase64 = btoa(data);
            // 拼接并打开URL
            this.BOX_openInNewWindow(`https://grq.3733.com/index/api/index/?data=${dataBase64}&code=2&isweb=1`);
        } else if(res.data.status === 4) {
          // 弹出已经添加入列表消息
          this.$router.push({
            name: "DownloadManage"
          });
        } else if(res.data.status === 5) {
          // 签名成功的给下载游戏
          let box = new Box();
          box.openInBrowser(res.data.grq_down_ip);
        }
      }).catch(() => {
        this.$toast('网络不太好~，请稍后再试~');
      })
      setTimeout(() => {
        this.$refs.down.classList.remove("loading");
      }, 2000);
    },
    normalDownload() {
      if(this.$store.getters.downloadInfo.hasOwnProperty('repair') && this.$store.getters.downloadInfo.repair !== "1") {
        this.BOX_openInNewWindow(this.$store.getters.downloadInfo.down_ip);
      }
    },
    BOX_openInNewWindow(url) {
      let box = new Box();
      box.openInNewWindow(url); 
    },
    changePopupShow3() {
      this.popupShow3 = !this.popupShow3;
    },
    handleAlert1() {
      this.$Dialog.alert({
        message: `因为苹果系统原因，导致企业版APP不稳定，需不定期重装游戏。为此，我们推出“稳定版”绑定您的设备信息，从而解决频繁掉签，多次重装游戏的问题。在您首次安装游戏时，将进行设备绑定操作。每一位svip用户有且只能绑定一台设备。绑定完成后，当前设备下所安装的游戏均为稳定版。`
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import './download-popup.less';
</style>