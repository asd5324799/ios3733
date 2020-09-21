<template>
  <div class="download-manage">
    <Navigation :title="'下载管理'"></Navigation>
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <van-list v-model="pullUpState" :finished="noMore" finished-text="没有更多了" @load="pullUp">
          <div class="game-list content">
            <div 
              class="game-info"
              v-for="(item, index) in list"
              :key="index">
              <div @click="toDetail(item)">
                <div class="container">
                  <img :src="item.titlepic" class="game-img" />
                  <div class="game-content">
                    <div class="game-name">
                      <span>{{item.title}}</span>
                    </div>
                    <div class="game-type">
                      <span
                        v-for="(items, indexs) in item.app_tag"
                        :key="indexs"
                        :style="{backgroundColor: items.color}"
                        class="type"
                      >{{items.name}}</span>
                      <span class="size">{{item.size_ip}}</span>
                    </div>
                    <div class="game-boon">
                      <div class="text">{{item.yxftitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                @click="clickEvent(item, index)"
                class="game-download"
                ref="down"
                :class="{
                  grq_status1: item.grq_status === '1' || item.grq_status === '0',
                  grq_status3: item.grq_status === '3'
                }"
              >
                <span></span>
                <div>{{text(item)}}</div>
              </div>
              <div 
                class="visa-button" 
                v-show="item.grq_status === '2'"
                @click="visaAgain(item, index)"
              >{{text2}}</div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Navigation from "@/components/navigation/navigation.vue";
import Loading from "@/components/loading/loading.vue";
import { JSEncrypt } from "jsencrypt";
import {JSEncrypt as JSEncryptLong} from 'encryptlong';
import Box from "@/common/box.js";

export default {
  data() {
    return {
      list: [],
      page: 2,
      loading: "ready",
      pullDownState: false,
      pullUpState: false,
      noMore: false,
      text2: '重新获取',
    };
  },
  activated() {
    this.createdMethod();
  },
  created() {
    this.createdMethod();
    // this.getPublicKey();
  },
  methods: {
    // getPublicKey() {
    //   this.$axios({
    //     url: '/api/index/rsaKey',
    //     data: {}
    //   })
    //   .then(res => {
    //     this.publicKey = res.data.rsa_public_key;
    //   })
    // },
    text(item) {
      if (item.grq_status === '3') {
        return "重新获取";
      } else if (item.grq_status === '2') {
        return "安装";
      } else if (item.grq_status === '1') {
        return '签名中'
      } else if (item.grq_status === '0') {
        return '排队中'
      }
    },
    toDetail(item) {
      sessionStorage.setItem("goBack", this.$route.name);
      this.$store.commit("setGameInfo", item);
      this.$router.push({
        name: "DetailIndex"
      });
    },
    BOX_openInBrowser(url) {
      let box = new Box();
      box.openInBrowser(url); 
    },
    clickEvent(item, index) {
      if (item.grq_status === '3') {
        this.visaAgain(item, index);
      } else if(item.grq_status === '2') {
        // 如果是下载列表
        this.$refs.down[index].classList.add('loading');
        let box = new Box();
        box.openInBrowser(item.grq_down_ip);
        setTimeout(() => {
          this.$refs.down[index].classList.remove('loading');
        }, 2000)
      } else if(item.grq_status === '1') {
        // 签名中
      } else if(item.grq_status === '0') {
        // 排队中
      }
    },
    visaAgain(item, index) {
      // 如果是签名失败
      let data = this.opensslEncryptLong(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","game_id":"${item.id}","status":"${item.grq_status}","from":"212"}`);
      this.$axios({
        url: "/manage/resignGame",
        data: {
          code: 2,
          data: data
        }
      }).then(res => {
        this.$toast(res.msg);
        if(res.code === 1) {
          this.$set(this.list[index], 'grq_status', '0');
        }
      }).catch(() => {
        this.$toast('网络不太好~，请稍后再试~');
      })
    },
    opensslEncrypt(str) {
      let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
      // if(this.publicKey === '') {
      //   this.getPublicKey();
      // }
      // encryptor.setPublicKey(this.publicKey)  // 设置公钥
      encryptor.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1K5ed2hWiO1Q7GQQeyDrtljzJCD84hLLd5rJjBRo/YyBVjPeYSFTkNim9bPoPGnzwz1u4/SKsXU5647Brw0JC9p9nx7FViDV29ecgU5CvjbyhtqdeUtPohKAnaokPiRtnVNtvUcNnWMvxr6Ik/UfjfVNf77QHr+jF2iKd5QKVWQIDAQAB");
      let temp = encryptor.encrypt(str); // 对密码进行加密
      return temp;
    },
    opensslEncryptLong(str) {
      let encryptor = new JSEncryptLong();
      encryptor.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1K5ed2hWiO1Q7GQQeyDrtljzJCD84hLLd5rJjBRo/YyBVjPeYSFTkNim9bPoPGnzwz1u4/SKsXU5647Brw0JC9p9nx7FViDV29ecgU5CvjbyhtqdeUtPohKAnaokPiRtnVNtvUcNnWMvxr6Ik/UfjfVNf77QHr+jF2iKd5QKVWQIDAQAB')
      let temp = encryptor.encryptLong(str);
      return temp;
    },
    createdMethod() {
      this.loading = "ready";
      this.page = 2;
      let data;
      data = this.opensslEncrypt(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","from":"212","page":"1"}`);
      this.$axios({
        url: "/manage/gameList",
        data: {
          code: 2,
          data: data
        }
      }).then(res => {
        this.handleInitData(res);
        if (res.data.list.length < 20) {
          this.noMore = true;
        }
        this.$nextTick(() => {
          this.loading = "success";
        });
      })
      .catch(() => {
        this.loading = "fail";
      });
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      this.page = 2;
      this.noMore = false;
      let data;
      data = this.opensslEncrypt(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","from":"212","page":"1"}`);
      this.$axios({
        url: "/manage/gameList",
        data: {
          code: 2,
          data: data
        }
      }).then(res => {
        this.handleInitData(res);
        if (res.data.list.length < 20) {
          this.noMore = true;
        }
        this.$toast("刷新成功");
        this.pullDownState = false;
      })
      .catch(() => {
        this.pullDownState = false;
      });
    },
    pullUp() {
      let data;
      data = this.opensslEncrypt(`{"uuid":"${localStorage.getItem("uuid")}","token":"${sessionStorage.getItem("token")}","from":"212","page":"${this.page}"}`);
      this.$axios({
        url: "/manage/gameList",
        data: {
          code: 2,
          data: data
        }
      }).then(res => {
        this.handleInitData(res);
        if (res.data.list.length < 20) {
          this.noMore = true;
        }
        this.page++;
        this.pullUpState = false;
        this.list.push(...res.data.list);
      })
      .catch(() => {
        this.pullUpState = false;
      });
    }
  },
  components: {
    Navigation,
    Loading
  }
};
</script>
<style lang="less" scoped>
@import "./DownloadManage.less";
</style>