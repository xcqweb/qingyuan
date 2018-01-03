let showMoreData =  {
    props: {

    },
    data () {
        return {
           
        };
    },
    computed: {
        idName:function(){
            
            let arr = [];
            for(let i = 0;i<42;i++){
                arr.push('showMoreItem'+i)
            }
            console.log(arr)
            return arr
        }
    },
    mounted () {

    }
}

export default showMoreData