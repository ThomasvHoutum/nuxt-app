<template>
  <div v-for="index in blogsCount">

  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsCount: null
    }
  },
  async mounted() {
    this.blogsCount = await $fetch('/api/blogs/get-blog-count')
  }
}
</script>

<style scoped>

</style>