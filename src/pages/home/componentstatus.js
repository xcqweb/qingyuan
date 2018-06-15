

let sleckte = resolve => {require.ensure(['@/components/commonui/dropdown/dropdown-menu.vue'], () => {resolve(require('@/components/commonui/dropdown/dropdown-menu.vue'))})}

let groupMenu = resolve => {require.ensure(['@/components/commonui/dropdown/groupMenu.vue'], () => {resolve(require('@/components/commonui/dropdown/groupMenu.vue'))})}

let groupMenus = resolve => {require.ensure(['@/components/commonui/dropdown/groupMenus.vue'], () => {resolve(require('@/components/commonui/dropdown/groupMenus.vue'))})}

let groupMenut = resolve => {require.ensure(['@/components/commonui/dropdown/groupMenuo.vue'], () => {resolve(require('@/components/commonui/dropdown/groupMenuo.vue'))})}

let listMenu = resolve => {require.ensure(['@/components/commonui/dropdown/listMenu.vue'], () => {resolve(require('@/components/commonui/dropdown/listMenu.vue'))})}


let tips = resolve => {require.ensure(['@/components/commonui/tips/tips.vue'], () => {resolve(require('@/components/commonui/tips/tips.vue'))})}
//客流总数，经济分析，富民指数
let A3 = resolve => {require.ensure(['@/pages/home/vcomponent/vtopThree.vue'], () => {resolve(require('@/pages/home/vcomponent/vtopThree.vue'))})}

//营销推广
let A5SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/a5ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/a5ss.vue'))})}

let A1SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/a1ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/a1ss.vue'))})}

let A2SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/a2ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/a2ss.vue'))})}



//4A级以上景区
let A10 = resolve => {require.ensure(['@/pages/home/vcomponent/a10.vue'], () => {resolve(require('@/pages/home/vcomponent/a10.vue'))})}

//游客来源国内
let B15 = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/guonei_map'], () => {resolve(require('@/pages/home/showMore/smallComponent/guonei_map.vue'))})}

//游客来源省内
let B17 = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/shengnei_map'], () => {resolve(require('@/pages/home/showMore/smallComponent/shengnei_map.vue'))})}

//游客来源全国省
let B18 = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/quanguosheng_map'], () => {resolve(require('@/pages/home/showMore/smallComponent/quanguosheng_map.vue'))})}

let B6S = resolve => {require.ensure(['@/pages/home/showMore/bigComponent/b6s.vue'], () => {resolve(require('@/pages/home/showMore/bigComponent/b6s.vue'))})}

let C4 = resolve => {require.ensure(['@/pages/home/c/c4.vue'], () => {resolve(require('@/pages/home/c/c4.vue'))})}
let C7 = resolve => {require.ensure(['@/pages/home/c/c7.vue'], () => {resolve(require('@/pages/home/c/c7.vue'))})}
let C8 = resolve => {require.ensure(['@/pages/home/c/c8.vue'], () => {resolve(require('@/pages/home/c/c8.vue'))})}
let C11 = resolve => {require.ensure(['@/pages/home/c/c11.vue'], () => {resolve(require('@/pages/home/c/c11.vue'))})}
let C12 = resolve => {require.ensure(['@/pages/home/c/c12.vue'], () => {resolve(require('@/pages/home/c/c12.vue'))})}
let C13 = resolve => {require.ensure(['@/pages/home/c/c13.vue'], () => {resolve(require('@/pages/home/c/c13.vue'))})}
let C14 = resolve => {require.ensure(['@/pages/home/c/c14.vue'], () => {resolve(require('@/pages/home/c/c14.vue'))})}

let D7 = resolve => {require.ensure(['@/pages/home/d/d7.vue'], () => {resolve(require('@/pages/home/d/d7.vue'))})}

let D10 = resolve => {require.ensure(['@/pages/home/d/d10.vue'], () => {resolve(require('@/pages/home/d/d10.vue'))})}
let D11 = resolve => {require.ensure(['@/pages/home/d/d11.vue'], () => {resolve(require('@/pages/home/d/d11.vue'))})}
//景区可提升度
let D13 = resolve => {require.ensure(['@/pages/home/d/d13.vue'], () => {resolve(require('@/pages/home/d/d13.vue'))})}
//景区客流
let D14 = resolve => {require.ensure(['@/pages/home/d/d14.vue'], () => {resolve(require('@/pages/home/d/d14.vue'))})}

//视频监控
let D16 = resolve => {require.ensure(['@/pages/home/d/d16.vue'], () => {resolve(require('@/pages/home/d/d16.vue'))})}

//评论详情
let D15 = resolve => {require.ensure(['@/pages/home/d/d15.vue'], () => {resolve(require('@/pages/home/d/d15.vue'))})}


//景区热力图
let D1SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/d1ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/d1ss.vue'))})}

//游客路线
let D9SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/d9ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/d9ss.vue'))})}

//停留时长
let D12SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/d12ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/d12ss.vue'))})}

//客流预警
let B2SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/b2ss.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/b2ss.vue'))})}

//路况监测
let B4SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/traffic.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/traffic.vue'))})}

//年龄
let C2SS = resolve => {require.ensure(['@/pages/home/showMore/smallComponent/nialing_pie.vue'], () => {resolve(require('@/pages/home/showMore/smallComponent/nialing_pie.vue'))})}


//存放当前模块状态，数组字符串
let status =[
    'sleckte',
    'groupMenu',
    'groupMenut',
    'listMenu',
    'groupMenus',
    'tips',
    'A3',
    'A10',
    'A1SS',
    'A2SS',
    'A5SS',
    'B6S',
    'B15',
    'B17',
    'B18',
    'B2SS',
    'B4SS',
    'C4',
    'C7',
    'C8',
    'C11',
    'C12',
    'C13',
    'C14',
    'C2SS',
    'D7',
    'D10',
    'D11',
    'D13',
    'D14',
    'D15',
    'D16',
    'D1SS',
    'D9SS',
    'D12SS',
    ]
let conponets={}
//字符串转对象变量
for (var i = 0; i < status.length; i++) {
let index=status[i]
conponets[index]=eval(index)
} 
export default conponets;