<template>
{{msg}}
</template>

<script>
export default {
  data () {
    return {
      msg: this.$store.app.msg
    }
  }
}
</script>

<style scoped>

</style>