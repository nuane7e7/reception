<template>
  <div class="message-wrap">
    <div class="message-item">
      <div class="user-info">
        <van-image class="avatar" :src="`https://static-dj-test.aohuajc.com/download/media/thumb50_50/${icon}`"></van-image>
        <span class="username">{{nick}}</span>
      </div>
      <div class="time">{{time}}</div>
    </div>
    <div class="message-content">
        {{msgtext}}
        <template v-if="replynick">
          //<i>@{{replynick}}</i>
        </template>
    </div>
    <div class="message-child">
      <van-button round size="mini" v-if="remaining>0" @click="getchildList">{{remaining}} 条评论</van-button>
      <slot name="child"></slot>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  name: "message-item",
  props: {
    msgid: Number,
    gallerysid: Number,
    userid: Number,
    rootmsgid: Number,
    replyuserid: Number,
    replymsgid: Number,
    msgtext: String,
    time: String,
    nick: String,
    icon: String,
    level: Number,
    replynick: String,
    replyicon: String,
    replylevel: Number,
    msgcount: Number,
    tukuid: Number,
    sort: Boolean,
    children: {
      type: Array,
      default: () => []
    }
  },
  setup(props,{emit} ) {
    const remaining = computed(() => props.msgcount - props.children.length);
    const data = reactive({
      clildList: [
        {
          msgid: 2616899195117568,
          gallerysid: 1603891598831031,
          userid: 1578456615308131,
          rootmsgid: 2609778688630784,
          replyuserid: 1594321820267227,
          replymsgid: 2609778688630784,
          msgtext: "aaaaa",
          time: "2020-12-18T16:37:57",
          nick: "jojo123",
          icon: "2020-9-30-1601504883933050.jpg",
          level: 1,
          replynick: "jojo004",
          replyicon: "2020-8-25-1598382721994004.jpg",
          replylevel: 0,
          msgcount: 0
        },
        {
          msgid: 2616898247491584,
          gallerysid: 1603891598831031,
          userid: 1578456615308131,
          rootmsgid: 2609778688630784,
          replyuserid: 1594321820267227,
          replymsgid: 2609778688630784,
          msgtext: "ffff",
          time: "2020-12-18T16:36:01",
          nick: "jojo123",
          icon: "2020-9-30-1601504883933050.jpg",
          level: 1,
          replynick: "jojo004",
          replyicon: "2020-8-25-1598382721994004.jpg",
          replylevel: 0,
          msgcount: 0
        },
        {
          msgid: 2616898211840000,
          gallerysid: 1603891598831031,
          userid: 1578456615308131,
          rootmsgid: 2609778688630784,
          replyuserid: 1578456615308131,
          replymsgid: 2616898146811904,
          msgtext: "aaaa",
          time: "2020-12-18T16:35:57",
          nick: "jojo123",
          icon: "2020-9-30-1601504883933050.jpg",
          level: 1,
          replynick: "jojo123",
          replyicon: "2020-9-30-1601504883933050.jpg",
          replylevel: 1,
          msgcount: 0
        },
        {
          msgid: 2616898146811904,
          gallerysid: 1603891598831031,
          userid: 1578456615308131,
          rootmsgid: 2609778688630784,
          replyuserid: 1594321820267227,
          replymsgid: 2609778688630784,
          msgtext: "ssss",
          time: "2020-12-18T16:35:49",
          nick: "jojo123",
          icon: "2020-9-30-1601504883933050.jpg",
          level: 1,
          replynick: "jojo004",
          replyicon: "2020-8-25-1598382721994004.jpg",
          replylevel: 0,
          msgcount: 0
        }
      ],
      getchildList: () => {
         emit("getChildList",data.clildList)
      },
    });
    return {
      remaining,
      ...toRefs(data)
    };
  }
};
</script>
<style lang="scss" >
.message-wrap {
  font-size: 13px;
  padding: 8px;
  border-top: 0.5px solid #ccc;
  .message-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      justify-items: center;
      .avatar {
        width: 20px;
        height: 20px;
        img {
          border-radius: 50%;
        }
      }
      .username {
        align-items: center;
        justify-items: center;
        margin: 0 5px;
      }
    }
  }
  .message-child,
  .message-content {
    margin-left: 25px;
    margin-top: 5px;
    i {
      color: #597ef7;
    }
  }
}
</style>