<<<<<<< HEAD
<template>
    <div>
        <button @click= 'increment'>Increment +1</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
     export default{
        methods:{
            ...mapActions([
                'increment'
                ])
        }
    }
=======
<template>
    <div>
        <button @click= 'increment'>Increment +1</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
     export default{
        methods:{
            ...mapActions([
                'increment'
                ])
        }
    }
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
</script>