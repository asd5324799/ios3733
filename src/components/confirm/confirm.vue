<template>
    <div class="confirm" v-if="isShow">
        <div class="con_box" :class="{bind: text.type === 5}">
            <div v-if="text.type != 3" class="close-confirm" @click="close()"></div>
            <div class="context">
                <h6>{{text.title}}</h6>
                <p v-if="text.type===1">{{text.msg}}</p>
                <div v-if="text.type===2 || text.type===4" class="input-box">
                    <input type="text" ref="inputText" @input="handleInput" @focus="$event.target.select()" v-model.trim="text.inputText" autofocus="autofocus" class="confirmInput">
                    <div class="tips">注：{{text.tips}}</div>
                </div>
                <div v-if="text.type===3" class="select-sex">
                    <div class="man" @click="ok()">
                        <i></i>
                        <div class="sex-text">我是汉纸</div>
                    </div>
                    <div class="woman">
                        <i></i>
                        <div class="sex-text">我是妹纸</div>
                    </div>
                </div>
                <div class="bind-phone" v-if="text.type===5">
                    <input v-if="text.isBind" type="number" ref="phoneText" @focus="$event.target.select()" v-model.trim="text.phoneText" class="confirmInput">
                    <input v-else type="number" ref="phoneText" @focus="$event.target.select()" v-model.trim="text.phoneText" class="confirmInput" disabled="disabled">

                    <div class="code-box">
                        <input type="number" maxlength='6' class="code-text" v-model="text.codeText">
                        <div class="code-btn" :class="codeBtnShow?'bgGreen':'bgGrey'" @click="getCode">{{codeBtnShow?'获取验证码':'重新发送('+count+'秒)'}}</div>
                    </div>
                </div>
                
                <div class="btn" v-if="text.btnShow">
                    <span @click="close()" v-if="text.btn.no">{{text.btn.no}}</span>
                    <span @click="ok()" v-if="text.btn.ok">{{text.btn.ok}}</span>
                </div>
            </div>
        </div>
        <Prompt :message="message" />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShow: true,
                text: {
                    title: '提示',
                    msg: '提示消息',
                    inputText:'在此输入...',
                    tips:'注意内容',
                    btn: {
                        ok: '确定',
                        no: '取消'
                    },
                    sex:1,
                    phoneText:'',
                    isBind:true,
                    codeText:'',
                    bindType:'',
                    btnShow:true,
                    token:''
                },
                message:'',
                codeBtnShow:true,
                codeTimer:null,
                count:0
            }
        },
        methods: {
            close() {},
            handleInput(e){
                if(this.text.type===4){//只能输入数字
                    this.text.inputText=e.target.value.replace(/[^\d]/g,'');
                }
            },
            getCode(){
                if(!this.text.phoneText){
                    this.message = '请输入手机号'
                    return false;
                }else if(!(/^1[34578]\d{9}$/.test(this.text.phoneText))){
                    this.message = '请输入正确的中国大陆11位手机号'
                    return false;
                }
                if(this.codeBtnShow){
                    this.$axios({
                        url: '/api/sms/send',
                        data: {
                          phone: this.text.phoneText,
                          type: this.text.bindType,
                          token: this.text.token
                        }
                    }).then(res =>{
                        if(res === null && this.text.bindType === 5) {
                          this.message = '该手机号已被注册或绑定过';
                        } else if (res === null && this.text.bindType === 6) {
                          this.message = '111'
                        } else {
                          this.message = '222';
                          this.message = res.msg;
                          this.codeBtnShow = false;
                          const TIME_COUNT = 60;   
                          if (!this.codeTimer) {    
                              this.count = TIME_COUNT;    
                              this.codeBtnShow = false;    
                              this.codeTimer = setInterval(() => {    
                                  if (this.count > 0 && this.count <= TIME_COUNT) {     
                                      this.count--;     
                                  } else {     
                                      this.codeBtnShow = true;     
                                      clearInterval(this.codeTimer);     
                                      this.codeTimer = null;     
                                  }    
                              }, 1000)    
                          }  
                        }
                    }).catch(() =>{
                    })
                }
            }
        }
    }
</script>
<style lang="less" scoped>
@rem: 0.0267rem;
    .confirm {
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index:10000;
    }
    .con_box {
        width: 300*@rem;
        height: 150*@rem;
        background-color: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 5*@rem;
        &.bind {
          height: 170*@rem;
        }
    }
    .close-confirm{
        width: 15*@rem;
        height: 15*@rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACWUlEQVRIS7WWPYvUUBSG3/dmmH+hrBbrR6G4bmGpIgiCYLWKYKkIgrowk0xSTTPcZKpFBUHWQhEEtRFEO7VbVAQbRRwWdgX/gtWQI3fJLMlsMrnJxHQhH0/uc07ec6m1XgNwRil13fO8z/h/B7XWSyQfA/hoTjZIngKwRXLV87zXAKRJfr/fV+12+xLJNZL7AHww4BMknwE4KiJ/RORuEASvGgQbxnkAjxLoiORVGoDW+jTJJwD2A/gdx/GVIAg2GoAb6DKAFyQXzMIcx7nhuu7bHXACP0fyPoDDTWjP0ftdRG77vv/e8HbBCfwkyacNaN+j13Gca91u99NkoRlwQ9oL9aZLtwc8j/YyvaXgmtpL9VqBK2q30msNttTOKIouxnH8IPlPM91b9Evm1nj6Zq11Ybdrrc8mMbgAYDTdvXOBi7Qrpf6KiAmHxXQ42ASP1YrzQkZEtknGAA4AsNJbqcbTXx9F0bKImJA5klyz1jsXOAzD4xO9yYu2RGTF9/0vNooLk2vGwwzD8AKAewAOisgPkirJ9hGAO71e750t3LrGSfeuJzXd0Tsej8eTbDdTTSl1y3XdNzZwK3Ba73T3To3UTRG57Pv+1zJ4GTijt6h7tdbpkWqlfSY4T296tKVXlQ4ZG+2F4Fl6izRW0Z4HttI7A26lPW8jYLI3071FemfAd7O9SHsGXEdvXe0T8Fx662ifbG/n1ltVOweDwTGl1Ms6o60sJFJTLb1v31RKrRjFPwEcqjPabME5O5lvBvwcwGKr1brZ6XQqTZgqYHPvcDhciuP4IYBf/wB82cDtpbsO6AAAAABJRU5ErkJggg==) center center no-repeat;
        background-size: 10*@rem 10*@rem;
        position: absolute;
        right: 5*@rem;
        top: 5*@rem;
    }
    .context {
        padding: 10*@rem;
    }
    .context h6 {
        font-size: 14*@rem;
        padding: 10*@rem;
    }
    .context p {
        font-size: 12*@rem;
        padding: 15*@rem 5*@rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .context .input-box{
        padding: 0 20*@rem;
    }
    .context .confirmInput{
        box-sizing: border-box;
        display: block;
        width: 100%;
        font-size: 16*@rem;
        padding: 10*@rem 10*@rem;
        height: 30*@rem;
        border: 1px solid #aaa;
    }
    .context .tips{
        color: red;
        font-size: 10*@rem;
        padding: 5*@rem 0;
    }
    .context .bind-phone{
        padding: 0 20*@rem;
        .code-box{
            display: flex;
            margin-top: 10*@rem;
            height: 30*@rem;
            justify-content: space-between;
            margin-bottom: 10*@rem;
            .code-text{
                box-sizing: border-box;
                display: block;
                font-size: 16*@rem;
                width: 110*@rem;
                border: 1px solid #aaa;
                padding: 10*@rem;
            }
            .code-btn{
                background: #48a83a;
                color:#fff;
                font-size: 14*@rem;
                width: 110*@rem;
                text-align: center;
                line-height: 30*@rem;
                &.bgGreen{
                    background: #48a83a;
                }
                &.bgGrey{
                    background: #aaa;
                }
            }
        }

    }
    .context .select-sex{
        display: flex;
        justify-content: space-around;
        padding: 10*@rem;
        .man{
            width: 100*@rem;
            i{
                display: block;
                margin: 0 auto;
                width: 50*@rem;
                height: 50*@rem;
                background: url(data:image/png;base64,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)no-repeat;
                background-size: 50*@rem;
                height: 50*@rem;
            }
            .sex-text{
                font-size: 12*@rem;
                text-align: center;
            }
        }
        .woman{
            width: 100*@rem;
            i{
                display: block;
                margin: 0 auto;
                width: 50*@rem;
                height: 50*@rem;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAJ0UlEQVRoQ+2Ye1xUZRrHf+85c2WAUREVUCENFATJbDN0BslM3d22XNfyQpnOYKBb3tpsazVF1jaNYMWlknCULGXXdatPa4SuqcyAubuYLiICkshVBB0Rhrme8/Y5M34oRGUGb/X57PvnOc95nt/3fZ73ch6Cn/ggP3H9+D+ApxmcMEETSAgTYDC0Hgd2c55+f639bc9AbGxCOKX0aQBDABpAKekghJ6mlJZRyqgZBosEEQT4d4H+yvhbhbhNAGsZtbrmBUKwmFISJQj0kYMb1JchZhtFXQvPOCUDmDlQDG8RwfZ6GyilWQaDLvFWsnDLAGq19mERQ7c5eIRPe1DMx0aK2AeGieAt/9612Uqx46AVHx20I3WEHFE+LFLOmGG4zIFSVDEM/2hBwbba3oDcEoBarZ0NSj8ODWLomjlydugA9oYamlt5PJtqAssBy4NlKDNx+HuT3WnPMOSc3W59uKhoxwVPIXoNoFJp5gHYHhbEkk0veHWZ8RuJOFLmwLpdZpisLouxD0Vg5szJWL0qk3IcV8Yw3NhDh7ZbPIHoFUBMjHYMy9LiQD+GfPCSAr5e7rupqOeQkNEBhUKO3XtSUX66GitfSYfd7hDKab3ZzCYXF2e5UuPGcD/yVWdxcXEi0OEnJSKMyF6iwBB/xo0wXU1yDlixdZ8NkZHDUV5+DkrCw4ehOGuhAsQho/HK1NLS3TZ3HHsMoFItWEIIs2nFdCmmx0huGqOkmgPPU0QPE3Wze3evFbkFLo2Lh0jx8/4ivFtrRV6LAxzHP1ZUtO2rOwIQq9aUBw9gwnJWKEDIzflfy+nA1+U8UhfIMDa0O0Tef+3YddgGo5EiK0KOo60OpFU7oebo9VtzbzuASqWJJoQcT5wmQfyj0h79P5dmxrkmB2RSBq/NlODR0eJu3xSV2ZG80wLz1YIhwCWG5YYfOrT9co8BXAei+0Ol0i4mBJnbl3lhWMCNt0zBY20zj/hUE8JCA3CupgVWqx0jhojxzAQWfRQEZ84zKKxg8L/KNix7SoriMw7oS4Vzga41GHTJ7qryEECTSghePvyWz03Lh+eBl3UWFFfa8VH2EohELP64cQ9Onqq5rq61c2WYGCnCY39oA0/xvl6vc1433BkeAmg/8fPFk5+u8rnh1kMpxZu77cgvtmLsmOFIf2t+p472djMuXmrHZeMVMKZaNF/qwNrNRyAATIoWY3pKG3+xjX5mMOhmuCNesPEU4GBQfyY2d6WCqWvh8M6ndoT4A1EhLLykBJUNHPK+Aeou2DDA3xeZaQsxcECf7lp4B2A8jaMnGvHKhoJOgFkb2vnGS/x+vV437Y4DHDhuR/Ku7oemsDM9PikaSdrH0d/P9/o6fkwA8+bGgWUIFAoZfLxlaLrQimdnxzrr/ofD4eCwN/8YpkyKhlzK3MMM+DGxua8qmAMnHEjeaUbG2xo8MPo+p9bDhlNYnbILWzISET5icBeAU6drkbQ0C+vXzIX6kdCrAOfxyobDd7mEbgIg7DKrU3KRmZaAwIB+XQDq6i/ixd9l4801cxERFvDjBHB34aFzDdyLDPS1T8xdaiUHyvshOdfWpYR6DTBHjEkjjJiVLqWNraJ9d3QXGtzXFrdLW4mDFUqs+XwwNm3UYEy0aw24Pa5m4OvjDVi5UY91v6pBXFgbZmeHoqFVnH9XAE41ypG0cxhWLp+OJ6aNdVu709DRAbR+iz35ldiUcwxb4qsQPshydwHMdgZTM8Ix48lxWPbbJzoBKiobcOBwCZK0UzqvG8KVeotuHybHRSH0/kDAYgRM9fjT+0eRV1CN/JfKIJfwdxdAUDxjSxgGDR2Od9MXdgJ8lFuArG378cyM8U4IYWRmfYk9n32NRM0UxM9SA6ZGwHIRC37/JUyXW/C3hRVOu7taQkLArYUD8OFRf2S8rUV0VIhTBMfxWPbqNpwoqYZS6QXhYtfW1oGoUUOxOTUBDDig9QyOlTRg2fqDWDD+AhbENN8tAM3+/t7c5E+Syp0BbQ6CubpQOERK7PhgKXx8vJzPBcEHC0px4mQ1CGEwetRQTJoYCW9vOdBei9aWC4h/+QvIiAk7NZWQiKjzu6feGwFjB7tXr9d9X5M9rC4PL3OaLELIwqkRRgQoXf/dJfVeKK7xRsTIIKSsngP//sobhzQ3o+FsFd7IKELFWSN+FtyGUYFmp33DZTH2lfUV/gcyDAbdUnd3BY8AYmMT7qOUzwdI6PUCeMkldMVLT5Ipj0V3f22qxz/zirF5xzcwWxzX1UcpLbfbmclHj2bX3RGAmzkdP14bLBKRHErpRKWvHPeFDMLw4H5w2G2oPteMqppLaDfZIBKRLziOS+ptJ+5aDR5loKdZiYmZP1IkYkr9fBlGaCd2XG1gySWAUkFw3uis9YV6/dbsnny5+763ACQ2NiGEUhpBKR0JQPhbvySVsineMuKvWyon/by7ujZbgRcyLTjXZOcBJFNKbYSAE7rWPM+XFRXlfAvAtZo9GL0CUKm0HxOCudfGGf9gIJY8NwaB/hLXYcV1uExEckDSD82tDmzK+QYF/+le4pTSPINB9wsPtDtNPQIYPfo5hVIpXkMIWREsY9hVw2QQM8DzJR2Y+PBgpCyb4Fb8198xwFBcjx1Rclh4YF2VBbXOrhzNoxSzCgt1bW458gzgaVat9i0EME4iZnG/FEgfKXfGSSw1oc4G5P75lxjgp7hp7KYWE2Yv34tgCfDeKJfti6c6cNZG4XAIFURPsSw/4bb3hVQqbQohWKV9OhJFxxpAmlo7AQqNdqyrsiJooDf+8sYk+PV1gV07LhrNeHHdV6hvasf6UBkeUrq6dYtLOyAJUCJkcB/kFZwVIPbo9bqZ7mTBrRKKi5vfh+fZ81NVIdLXF41D4ur9XQCEQNl1Vuw+b4dcJsK46ABEhvphaKAPpBKXyOKTTc7bp8lsx7xAMeIDv+/sLSrtgDRAicy1k5H4xr+EQ44nhB2s12c19gThFoBKpfk1IeQfb65QQfVQkAvgfCvSw7vO9IkrHP7a7ECx8frd8Uf6spg9UIJw764//EknTZAF9MGW9VOwJ7/CudB5HvGFhVt33hYAtVq7HEDa5+sGQukfiMSNlUCNEamDLCByGYhIBLCCKNd8tHEUVWbgjJnCQgGhCRHrSzBQcnW+hFLnOVCHHdRsxqJGLyiGKLHl1TBUnKlDQlqzsKBfMxh0b/UaICZmXhDLSpxXBkL451mGzE9b6LqspX1iAb1oRZLC1JN/t96nt/vAq58YK34jg8lC8XqOWQDYBTBZggOOs1UeOfJh/fWc3bCEVCpNKSEkwi0Fd9yIluj1utEeAfwwA3dcXw8BepWBey3a3fhu7ULuOrsXdj95gO8ArZmRbfpjLsIAAAAASUVORK5CYII=)no-repeat;
                background-size: 50*@rem;
                height: 50*@rem;
            }
            .sex-text{
                font-size: 12*@rem;
                text-align: center;
            }
        }
    }
    .btn {
        padding: 10*@rem;
        text-align: right;
    }
    .btn span {
        padding: 5*@rem 15*@rem;
        color: white;
        border-radius: 5*@rem;
        font-size: 12*@rem;
    }
    .btn span:nth-child(1) {
        background-color: #f1f1f1;
        color: #48a83a;
        margin-right: 5*@rem;
    }
    .btn span:nth-child(2) {
        background-color: #48a83a;
    }
</style>