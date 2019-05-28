<template>
  <div class="mine">
  <Navigation title="个人信息"/>
  <main>
      <!-- 图片裁剪 -->
      <Cropper :initParam="uploadParam" :successCallback="uploadHandle" ref="cropper">
      </Cropper>
      <div class="func">
              <ul class="func-list">
                  <li @click="changeUserPic" class="func-item message">
                      <div class="item-content userPic">
                          <div class="func-left">
                              <div class="func-name">头像</div>
                          </div>
                          <div class="func-right">
                              <div class="user-pic">
                                <img v-if="userPic" :src="userPic">
                                <img v-else :src="defaultPic">
                                </div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
                  <li @click="changeUserName(userName)" class="func-item message">
                      <div class="item-content userName">
                          <div class="func-left">
                              <div class="func-name">昵称</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userName}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
                  <li class="func-item message">
                      <div class="item-content userNum">
                          <div class="func-left">
                              <div class="func-name">账号</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userNum}}</div>
                          </div>
                      </div>
                  </li>
                  <li @click="bandPhone(userPhone)" class="func-item message">
                      <div class="item-content userPhone">
                          <div class="func-left">
                              <div class="func-name">手机绑定</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userPhone||'点此绑定'}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
                  <router-link :to="{name:'Identity',query:{name:userRealName,num:userIdNumber}}" class="func-item message" tag="li">
                      <div class="item-content userRealName">
                          <div class="func-left">
                              <div class="func-name">实名认证</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userRealName||'点此认证'}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </router-link>
                  <router-link to="ChangePwd" class="func-item message" tag="li">
                      <div class="item-content userChangePwd">
                          <div class="func-left">
                              <div class="func-name">修改密码</div>
                          </div>
                          <div class="func-right">
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </router-link>
                  <li @click="changeUserSex" class="func-item message">
                      <div class="item-content userSex">
                          <div class="func-left">
                              <div class="func-name">性别</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userSex | stringSex}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
                  <li @click="changeUserBirth" class="func-item message">
                      <div class="item-content userBirth">
                          <div class="func-left">
                              <div class="func-name">生日</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userBirth | formatDate}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
                  <li @click="changeUserQQ(userQQ)" class="func-item message">
                      <div class="item-content userQQ">
                          <div class="func-left">
                              <div class="func-name">QQ</div>
                          </div>
                          <div class="func-right">
                              <div class="user-name right-text">{{userQQ || '添加QQ号'}}</div>
                              <span class="right-arrow"></span>
                          </div>
                      </div>
                  </li>
              </ul>
      </div>
      <div class="quitBtn" @click="quitLogin">退出登录</div>
  </main>
  </div>
</template>
<script>
    import Navigation from '@/components/navigation/navigation.vue';
    import Cropper from '@/components/cropper/cropper.vue';
    export default {
        data() {
          return {
            token:'',
            userName:'',
            userPic:'',
            userNum:'',
            userQQ:'未设置',
            userBirth:'',
            userPhone:'点此绑定',
            userSex:'未设置',
            userRealName:'点此认证',
            checked: true,
            userIdNumber: '',
            defaultPic: 'http://pic5.3733.com/avatar/img_user_default.png',
            uploadParam: {
                  fileType: 'recruit', // 其他上传参数 
                  uploadURL: 'http://image.3733.com/upload', // 上传地址 
                  scale: 4 // 相对手机屏幕放大的倍数: 4倍 
              },
          }
        },
        computed: {
          date(){
              if(this.userBirth){
                  let date = new Date(Number(this.userBirth)*1000);
                  let y = date.getFullYear();
                  let MM = date.getMonth() + 1;
                  MM = MM < 10 ? ('0' + MM) : MM;
                  let d = date.getDate();
                  d = d < 10 ? ('0' + d) : d;
                  return y + '-' + MM + '-' + d;
              }else{
                  return '未设置'
              } 
          }
        },
        watch: {
          token(){
              this.getUser();
              this.getUserInfo();
          }
        },
        filters: {
            stringSex(value){
                if(value == 1){
                    return "女"
                }else if(value == 2){
                    return "男"
                }else{
                    return "未设置"
                }
            },
            formatDate(value) {
                if(value){
                    let date = new Date(Number(value)*1000);
                    let y = date.getFullYear();
                    let MM = date.getMonth() + 1;
                    MM = MM < 10 ? ('0' + MM) : MM;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    return y + '-' + MM + '-' + d;
                }else{
                    return '未设置';
                }
            },
            hasPic (str) { 
                return str || '';
            }
        },
        
        methods: {
          getUser(){
            this.$axios({
              url:'/api/user/info',
              data:{
                  token:this.token
              }
            }).then(res=>{
              if(res.data){
                  this.userPic = res.data.avatar;
                  this.userName = res.data.nickname;
                  this.userNum = res.data.username;
                  this.userPhone = res.data.mobile;
              }
            })
          },
            getUserInfo(){
              this.$axios({
                url:'/api/user/infoEx',
                data:{
                    token:this.token
                }
              }).then(res=>{
                if(res.data){
                  this.userBirth = res.data.birthday;
                  this.userQQ = res.data.qq;
                  this.userSex = res.data.sex;
                  this.userRealName = res.data.real_name;
                  this.userIdNumber = res.data.id_card;
                }
              })
            },
            uploadPic(){
              document.getElementById('upload-pic').click();
            },
            uploadHandle(data) {
                if (data.code == 0) {
                    this.$toast(data.msg);
                }
                 if (data.code == 1) {
                     this.$axios({
                         url:'',
                         method:'POST',
                         data:{
                             token:this.token,
                             avatar:data.data.object
                         }
                     }).then(res=>{
                         this.$toast(res.msg);
                         this.getUser()
                     })
                 }
             },
            filePic(e){
                var that=this;
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    var dataURL = reader.result;// 图片的 base64 格式
                    var form = new FormData();
                    form.append("type", "avatar");
                    form.append("image", dataURL);
                    form.append("auth_key", "blabla");
                    form.append("time", new Date().getTime());
                    that.$axios({
                        url:'http://image.3733.com/upload',
                        method:'POST',
                        // data:{
                        //     form
                        // }
                        data:{
                            type:'avatar',
                            image:dataURL,
                            auth_key:'blabla',
                            time:new Date().getTime()
                        }
                    }).then(()=>{
                    })
                }
            },
            // 修改头像
            changeUserPic(){
                var that = this;
                this.$confirm({
                    type:1,
                    title:'头像设置',
                    msg:'从本地相册中选择?',
                    btn:{
                        ok:"确定",
                        no:"取消"
                    },
                    btnShow:true
                }).then(()=>{
                    that.$refs['cropper'].upload()
                }).catch(()=>{
                })
            },
            // 修改昵称
            changeUserName(username){
                this.$confirm({
                    type:2,
                    title:'昵称设置',
                    inputText:username,
                    tips:'16个字符以内(8个中文)',
                    btn:{
                        ok:'确定',
                        no:'取消'
                    },
                    btnShow:true
                }).then((res)=>{
                    this.$axios({
                        url:'/api/user/changeInfo',
                        data:{
                            token:this.token,
                            nickname:res.inputText
                        }
                    }).then(res2=>{
                        this.$toast(res2.msg);
                        this.userName = res.inputText
                    }).catch(() => {
                      this.$toast('修改失败请重试');
                    })
                })
            },
            // 修改性别
            changeUserSex(){
                this.$confirm({
                    type:3,
                    title:'性别选择',
                    btnShow:false
                }).then(()=>{
                    this.$axios({
                        url:'/api/user/changeInfoEx',
                        data:{
                            token:this.token,
                            sex:2
                        }
                    }).then(res=>{
                        this.userSex = 2;
                        this.$toast(res.msg);
                    })
                }).catch(()=>{
                    this.$axios({
                        url:'/api/user/changeInfoEx',
                        data:{
                            token:this.token,
                            sex:1
                        }
                    }).then(res=>{
                        this.userSex = 1;
                        this.$toast(res.msg);
                    }).catch(() => {
                      this.$toast('修改失败请重试');
                    })
                })
            },
            //绑定手机号
            bandPhone(phoneNum){
                if(!phoneNum){
                    this.$confirm({
                        type:5,
                        title:'绑定手机号',
                        phoneText:'',
                        codeText:'',
                        bindType:5,
                        isBind:true,
                        btnShow:true,
                        btn:{
                            ok:'确定',
                            no:'取消'
                        },
                        token:this.token
                    }).then(res=>{
                        this.$axios({
                            url:'/api/user/bindPhone',
                            data:{
                                phone:res.phoneText,
                                code:res.codeText,
                                token:this.token
                            }
                        }).then(data=>{
                            this.$toast(data.msg);
                            this.getUserInfo();
                        })
                    }).catch(()=>{
                    })
                }else{
                    this.$confirm({
                        type:5,
                        title:'解绑手机号',
                        phoneText:phoneNum,
                        codeText:'',
                        btnShow:true,
                        bindType:6,
                        isBind:false,
                        btn:{
                            ok:'确定',
                            no:'取消'
                        },
                        token:this.token
                    }).then(res=>{
                        if(res.codeText == ''){
                            this.$toast('请输入验证码')
                        }else{
                            this.$axios({
                                url:'/api/user/unbindPhone',
                                data:{
                                    phone:res.phoneText,
                                    code:res.codeText,
                                    token:this.token
                                }
                            }).then(data=>{
                                this.$toast(data.msg);
                                this.getUserInfo();
                            })
                        }
                        
                    }).catch(()=>{
                    })
                }
                
            },
            // 修改生日
            changeUserBirth(){
                let date = new Date();
                this.$picker.show({
                    type:'datePicker',
                    date:this.date,
                    endTime: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,  //截至时间
                    startTime:'1970-02-11',  //开始时间
                    onOk: (date) =>{
                        this.$axios({
                            url:'/api/user/changeInfoEx',
                            data:{
                                token:this.token,
                                birthday: date
                            }
                        }).then(res => {
                            this.userBirth = res.data.birthday;
                            this.$toast(res.msg);
                        }).catch(() => {
                          this.$toast('修改失败请重试');
                        })
                    }
                })
            },
            // 修改QQ
            changeUserQQ(userQQ){
                this.$confirm({
                    type:4,
                    title:'设置QQ',
                    inputText:userQQ,
                    tips:'填写正确的QQ号',
                    btn:{
                        ok:'确定',
                        no:'取消'
                    },
                    btnShow:true
                }).then((res)=>{
                    if(res.inputText < 1000){
                        this.$toast("请输入正确的QQ号")
                    }else{
                        this.$axios({
                        url:'/api/user/changeInfoEx',
                        data:{
                            token:this.token,
                            qq:res.inputText
                        }
                    }).then(res=>{
                        this.$toast(res.msg);
                        this.userQQ = res.data.qq;
                    })
                    }
                }).catch(() =>{
                })
            },
            quitLogin(){
                this.$confirm({
                    type:1,
                    title:'提示',
                    msg:'退出登录？',
                    btn:{
                        ok:'确定',
                        no:'取消'
                    },
                    btnShow:true
                }).then(() => {
                    sessionStorage.token = '';
                this.$router.replace('/login')
                })
                .catch(() => {
                })
                
            }
        },
        created () {
          this.token = sessionStorage.token;
          this.getUser()
          this.getUserInfo()
        },
        components: {
            Navigation,
            Cropper
        }
    }
</script>
<style lang="less" scoped>
    @import './user-info.less';
</style>
<style lang="less">
// 日期选择器的样式修正
  .m-picker .m-picker-header {
    align-items: center;
  }
</style>

