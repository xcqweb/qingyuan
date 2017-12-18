<style lang="less" scoped>
    .load-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .1);
    z-index: 30;
}
.load {
    padding: .3rem;
    background: #333;
    border-radius: 3px;
    color: #fff;
    font-size: 22px;
}
.fade-enter-active, .fade-leave-active {
    transition: .4s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
<template>
    <div class="load-box">
        <div class="load">开发中...</div>
    </div>
</template>

<script>
  export default {
    name:'deving',
    data() {
      return {

      }
    },
    // props: {
    //     mainContent: {
    //         type: String,
    //         default: function () {
    //                 return 'D2S'
    //         }
    //     },
    // },
    components: {

    },
    methods:{

    },
    mounted(){
        
    }
  }
</script>

