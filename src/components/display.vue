<<<<<<< HEAD
<template>
  <div>
    <h4>Count is {{ getCount }}{{getData}}</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getCount',
        'getData'
      ])
    }
  }
=======
<template>
  <div>
    <h4>Count is {{ getCount }}{{getData}}</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getCount',
        'getData'
      ])
    }
  }
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
</script>