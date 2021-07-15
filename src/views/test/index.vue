<template>
  <div>
    <CsHeader @click-left="$router.go(-1)" left-arrow @click-right="onclick">
      <template v-slot:left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
      <template v-slot:right>
        2222
      </template>
    </CsHeader>
    <CsContent>
      <CsList :request-method="(params)=>PreConnect(params)"  v-model:List="messageList">
        <template v-slot:content="{list}">
          <messageItem v-for="(messageItem,i ) in list" :key="messageItem.msgid" v-bind="messageItem" @getChildList="messageitem=>getChildList(messageitem,i)">
            <template v-slot:child v-if="messageItem.children">
              <messageItem v-for="(item) in messageItem.children" :key="item.msgid" v-bind="item"></messageItem>
            </template>
          </messageItem>
        </template>
      </CsList>
    </CsContent>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from "vant";
import { reactive, toRefs } from "vue";
import messageItem from "./components/message-item.vue";
export default {
  name: "Home",
  components: { messageItem },
  setup() {
    const onclick = () => {
      Toast.fail("失败文案");
    };
    const data = reactive({
      getChildList: (childList, i) => {
        data.messageList[i].children = [...childList];
      },
      PreConnect: /*async*/ (params)=> {
            console.log(params);
        // await    {msg} = {data.messageList}
        let loading = false,
          error = false,
          finished = false,
          list = [];
        if (params)
          list = [
            {
              msgid: 2630300149563392,
              gallerysid: 1603891598831031,
              userid: 1594042755355275,
              rootmsgid: 2630300149563392,
              replyuserid: 0,
              replymsgid: 0,
              msgtext: "fsefedfefedf",
              time: "2021-01-06T15:02:15",
              nick: "mlxj001",
              icon: "2020-9-24-1600913185811243.jpg",
              level: 1,
              replynick: "",
              replyicon: "",
              replylevel: 0,
              msgcount: 1
            },
            {
              msgid: 2609778688630784,
              gallerysid: 1603891598831031,
              userid: 1594321820267227,
              rootmsgid: 2609778688630784,
              replyuserid: 0,
              replymsgid: 0,
              msgtext: "我们的生活方式是什么时候回来呢",
              time: "2020-12-08T15:11:14",
              nick: "jojo004",
              icon: "2020-8-25-1598382721994004.jpg",
              level: 0,
              replynick: "",
              replyicon: "",
              replylevel: 0,
              msgcount: 4
            },
            {
              msgid: 2609778533859328,
              gallerysid: 1603891598831031,
              userid: 1578456615308131,
              rootmsgid: 2609778533859328,
              replyuserid: 0,
              replymsgid: 0,
              msgtext: "12",
              time: "2020-12-08T15:10:55",
              nick: "jojo123",
              icon: "2020-9-30-1601504883933050.jpg",
              level: 1,
              replynick: "",
              replyicon: "",
              replylevel: 0,
              msgcount: 0
            }
          ];
        return new Promise(resolve => {
          resolve({ loading, error, finished, list });
        });
      },
      messageList: []
    });
    return {
      ...toRefs(data),
      onclick
    };
  }
};
</script>
