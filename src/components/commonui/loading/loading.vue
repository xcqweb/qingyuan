<<<<<<< HEAD
<template>
  <transition name="fade">
    <div class="load-box" v-show="visiable">
        <div class="load">{{text}}</div>
    </div>
  </transition>
</template>

<script>
import Bus from '@/common/js/bus.js'
  export default {
    data() {
      return {
        visiable: false,
      }
    },
    props: {
      text: String,
    },
    methods:{
        close(){
            
        },
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
@borderColor:#49d9fe;
@borderLen: 18px;

.load-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .7);
    z-index: 30;
}
.load {
    padding: .3rem;
    background: #333;
    border-radius: 3px;
    color: #fff;
}
.fade-enter-active, .fade-leave-active {
    transition: .4s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
=======
<template>
  <transition name="fade">
    <div class="load-box" v-show="visiable">
        <div class="load">{{text}}</div>
    </div>
  </transition>
</template>

<script>
import Bus from '@/common/js/bus.js'
  export default {
    data() {
      return {
        visiable: false,
      }
    },
    props: {
      text: String,
    },
    methods:{
        close(){
            
        },
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
@borderColor:#49d9fe;
@borderLen: 18px;

.load-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .7);
    z-index: 30;
}
.load {
    padding: .3rem;
    background: #333;
    border-radius: 3px;
    color: #fff;
}
.fade-enter-active, .fade-leave-active {
    transition: .4s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
</style>