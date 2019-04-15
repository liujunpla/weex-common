<template>
    <div class="root" @click="onClose">
        <div class="match-parent-bottom" @click="onContentClick">
            <div v-if="isShowShare" class="icon-list flex-row">
                <div class="share-item align-center" v-for="icon in iconList" @click="onShareIconClick(icon.iconType)">
                    <image class="share-type-icon" :src="icon.iconUrl" />
                    <text class="share-title">{{icon.iconText}}</text>
                </div>
            </div>
            <div class="content">
                <div class="flex-row">
                    <image class="screen-image" :src="screenshotImage"></image>
                    <div>
                        <text class="title">截屏成功</text>
                        <text class="notice">是否联系客服反馈问题？</text>
                    </div>
                </div>
                <div class="flex-row-between button-container">
                    <div class="button align-center" @click="onFeedbackClick">
                        <text class="button-text">联系客服</text>
                    </div>
                    <div class="button align-center" @click="onShareClick">
                        <text class="button-text">分享页面</text>
                    </div>
                </div>
            </div>
        </div>
        <WebView url="https://web.dxwt.cn/10000/views/common/creenshotShare.html" />
    </div>
</template>
<style src="../../css/common.css"></style>
<style scoped>
.root {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}

.icon-list {
  width: 750px;
  padding-top: 38px;
  padding-bottom: 32px;
  background-color: white;
  padding-left: 10px;
}

.share-item {
  width: 146;
}

.share-type-icon {
  width: 80;
  height: 80;
  margin-bottom: 22;
}

.share-title {
  color: #939393;
  font-size: 26;
  letter-spacing: 1.49;
}

.content {
  background-color: white;
  padding-top: 32px;
  padding-left: 38px;
  padding-right: 38px;
  padding-bottom: 36px;
}

.screen-image {
  width: 120px;
  height: 120px;
  margin-right: 38px;
}

.title {
  font-size: 32px;
  color: #03a9f4;
  letter-spacing: 1.83px;
  margin-top: 6px;
  margin-bottom: 14px;
}

.notice {
  font-size: 28px;
  color: #5d5d5d;
  letter-spacing: 1.6px;
}

.button-container {
  border-top-width: 1px;
  border-top-color: #d8d8d8;
  padding-top: 32px;
  margin-top: 32px;
}

.button {
  width: 328px;
  height: 60px;
  background-color: #03a9f4;
  border-radius: 4px;
}

.button-text {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1.6px;
}
</style>

<script>
// import Utils from "../utils/index";

const resUrl = "https://web.dxwt.cn/10000/images/";
export default {
  data() {
    return {
    //   resUrl: "https://web.dxwt.cn/10000/images/",
      iconList: [
        {
          iconUrl: resUrl + "share_wechat.png",
          iconText: "微信好友",
          iconType: 0
        },
        {
          iconUrl: resUrl + "share_moment.png",
          iconText: "朋友圈",
          iconType: 1
        },
        { iconUrl: resUrl + "share_qq.png", iconText: "QQ", iconType: 3 },
        {
          iconUrl: resUrl + "share_qzone.png",
          iconText: "QQ空间",
          iconType: 4
        },
        { iconUrl: resUrl + "share_sms.png", iconText: "短信", iconType: 5 }
      ],
      isShowShare: true,
      appVersion: "7.0.2"
    };
  },
  props: {
    screenshotImage: { default: "" }
  },
  created: function() {
    // const str = "10000社区，你好！";
    // const len = Utils.GetLength(str);
    // console.log(`"${str}"真实长度 = ${len}`);
  },
  methods: {
    onFeedbackClick: function() {},
    onShareClick: function() {},
    onShareIconClick: function(shareType) {
      this.onClose();
    },
    onClose: function() {
      this.$emit("close", {});
    },
    onContentClick: function() {
      return;
    }
  }
};
</script>