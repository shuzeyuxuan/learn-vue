<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      msgType: "",
      msgShow: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    const fromName = from.name;

    next((vm) => {
      if (vm.$store.state.auth) {
        switch (fromName) {
          case "Register":
            vm.showMsg("注册成功");
            break;
        }
      }
    });
  },
  methods: {
    showMsg(msg, type = "success") {
      this.msg = msg;
      this.msgType = type;
      this.msgShow = true;
    },
  },
};
</script>