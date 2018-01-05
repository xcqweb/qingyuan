 let timeMixin =  {
    props: {
        time: Number
    },
    data () {
        return {
            show: {   // 可选字段，有默认值
                default: false
            }
        };
    },
    mounted () {
        // this.$emit('lazyLoad')
    }
}

export default timeMixin