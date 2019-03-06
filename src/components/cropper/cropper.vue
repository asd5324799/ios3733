<template>
    <div class="v-simple-cropper">
        <input class="file" ref="file" type="file" accept="image/*" @change="uploadChange">
        <div class="v-cropper-layer" ref="layer">
            <div class="layer-header">
                <button class="cancel" @click="cancelHandle">取消</button>
                <button class="confirm" @click="confirmHandle">裁剪</button>
            </div>
            <img ref="cropperImg">
        </div>
    </div>
</template>
<script>
     import Cropper from 'cropperjs'
     import 'cropperjs/dist/cropper.min.css'
     export default {
         name: 'v-simple-cropper',
         props: {
             initParam: Object,
             successCallback: {
                 type: Function,
                 default: () => {}
             }
         },
         data() {
             return {
                 cropper: {},
                 filename: ''
             }
         },
         mounted() {
             this.init()
         },
         methods: {
             // 初始化裁剪插件 
             init() {
                 let cropperImg = this.$refs['cropperImg']
                 this.cropper = new Cropper(cropperImg, {
                     aspectRatio: 1 / 1,
                     dragMode: 'move'
                 })
             },
             // 点击上传按钮 
             upload() {
                 this.$refs['file'].click()
             },
             // 选择上传文件 
             uploadChange(e) {
                 let file = e.target.files[0]
                 this.filename = file['name']
                 let URL = window.URL || window.webkitURL
                 this.$refs['layer'].style.display = 'block'
                 this.cropper.replace(URL.createObjectURL(file))
             },
             // 取消上传 
             cancelHandle() {
                 this.cropper.reset()
                 this.$refs['layer'].style.display = 'none'
                 this.$refs['file'].value = ''
             },
             // 确定上传 
             confirmHandle() {
                 let cropBox = this.cropper.getCropBoxData()
                 let scale = this.initParam['scale'] || 1
                 let cropCanvas = this.cropper.getCroppedCanvas({
                     width: cropBox.width * scale,
                     height: cropBox.height * scale
                 })
                 let imgData = cropCanvas.toDataURL('image/jpeg')
                 let formData = new window.FormData()
                //  formData.append('fileType', this.initParam['fileType'])
                 formData.append('type','avatar')
                 formData.append('image', imgData)
                 formData.append('token', localStorage.token)
                //  formData.append('originalFilename', this.filename)
                 formData.append('time',new Date().getTime())
                 formData.append('auth_key','121')
                 this.$axios({
                     url:this.initParam['uploadURL'],
                     method:'POST',
                     data:{
                         formData
                     }
                 }).then(res => {
                     this.successCallback(res)
                     this.cancelHandle()
                 })
             }
         }
     }
</script>
<style lang="less" scoped>
    @rem: 0.0267rem;
    .v-simple-cropper {
        .file {
            display: none;
        }
        .v-cropper-layer {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            z-index: 99999;
            display: none;
            .layer-header {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99999;
                background: #48a83a;
                width: 100%;
                height: 40*@rem;
                padding: 0 10*@rem;
                box-sizing: border-box;
            }
            .cancel,
            .confirm {
                line-height: 40*@rem;
                font-size: 14*@rem;
                background: inherit;
                border: 0;
                outline: 0;
                float: left;
                color: #fff;
            }
            .confirm {
                float: right;
            }
            img {
                position: inherit!important;
                border-radius: inherit!important;
                float: inherit!important;
            }
        }
    }
</style>