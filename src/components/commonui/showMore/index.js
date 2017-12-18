import Vue from 'vue'

const LoadingConstructor = Vue.extend(require('./showMore'))

let instance  = new LoadingConstructor({
    el: document.createElement('div')
});
LoadingConstructor.prototype.alert=()=>{
  if (instance.visiable) return

  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visiable = true
    setTimeout(() => {
      instance.visiable = false
    }, 1000)
  })
}
LoadingConstructor.prototype.open = (mainContent,title) => {
  if (!instance) {
  instance = new Toast({
    el: document.createElement('div')
  })
  }
  if (instance.visiable) return
  instance.mainContent = mainContent;
  instance.title = title
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visiable = true
  })
    // pageScroll.lock();
};

LoadingConstructor.prototype.close = function () {
    Vue.nextTick(() => {
    instance.visiable = false
  })
};

window.$showMore = instance 

// export const toastInstance = (text) => {
//   if (!instance) {
//     instance = new Toast({
//       el: document.createElement('div')
//     })
//   }
//   if (instance.visiable) return
//   instance.text = text || '正在加载'
// console.log(instance.$el);
//   document.body.appendChild(instance.$el)
//   Vue.nextTick(() => {
//     instance.visiable = true
//     setTimeout(() => {
//       instance.visiable = false
//     }, 1000)
//   })
// }

