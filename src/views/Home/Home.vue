<template>
  <div class="home">
    <!-- header -->
    <TopBar :list="list" />
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="hover-ball" @click="changePopupShow()"></div>
    </main>
    <!-- footer -->
    <NavCom :pageIndex="0" />
    <van-popup v-model="popupShow" class="popup1">
      <div class="content">
        <div class="top">
          <div class="title">3733游戏盒尊享版</div>
          <div class="text">
            游戏安装更稳当
            <br />无需越狱，永不闪退
          </div>
          <div class="button" @click="installGrqapp()">立即安装尊享版</div>
          <div class="small">仅限svip用户可安装</div>
        </div>
        <div class="bottom" @click="changePopupShow()"></div>
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
import TopBar from "@/components/topbar/topbar.vue";
import NavCom from "@/components/navcom/navcom.vue";
import Box from '@/common/box.js';
import {JSEncrypt as JSEncryptLong} from 'encryptlong';

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      list: [
        {
          title: "精选",
          name: "QualitySelect"
        },
        {
          title: "新游",
          name: "NewGame"
        },
        {
          title: "分类",
          name: "CateGory"
        }
      ],
      popupShow: false,
      popupShow3: false,
    };
  },
  methods: {
    changePopupShow() {
      this.popupShow = !this.popupShow;
    },
    BOX_openInNewWindow(url) {
      if(!this.token) {
        this.$router.push({
          name: 'Login'
        })
      } else {
        let box = new Box();
        box.openInNewWindow(url); 
      }
    },
    BOX_openInBrowser(url) {
      let box = new Box();
      box.openInBrowser(url); 
    },
    installGrqapp() {
      if(!sessionStorage.getItem('token') && sessionStorage.getItem('token') === '') {
        this.$router.push({
          name: 'Login'
        })
      } else {
        let data = this.opensslEncryptLong(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","game_id":"20005328","from":"212"}`)
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
              this.BOX_openInBrowser(`https://grq.3733.com/index/api/index/?data=${dataBase64}&code=2&isweb=1`);
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
        })
      }
    },
    opensslEncryptLong(str) {
      let encryptor = new JSEncryptLong();
      encryptor.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1K5ed2hWiO1Q7GQQeyDrtljzJCD84hLLd5rJjBRo/YyBVjPeYSFTkNim9bPoPGnzwz1u4/SKsXU5647Brw0JC9p9nx7FViDV29ecgU5CvjbyhtqdeUtPohKAnaokPiRtnVNtvUcNnWMvxr6Ik/UfjfVNf77QHr+jF2iKd5QKVWQIDAQAB')
      let temp = encryptor.encryptLong(str);
      return temp;
    },
    changePopupShow3() {
      this.popupShow3 = !this.popupShow3;
    },
    handleAlert1() {
      this.$Dialog.alert({
        message: `因为苹果系统原因，导致企业版APP不稳定，需不定期重装游戏。为此，我们推出“稳定版”绑定您的设备信息，从而解决频繁掉签，多次重装游戏的问题。在您首次安装游戏时，将进行设备绑定操作。每一位svip用户有且只能绑定一台设备。绑定完成后，当前设备下所安装的游戏均为稳定版。`
      })
    }
  },
  components: {
    TopBar,
    NavCom
  }
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>

