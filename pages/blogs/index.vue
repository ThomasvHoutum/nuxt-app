<template>

</template>

<script>
export default {
  data() {
    return {
      blogsCount: null
    }
  },
  async mounted() {
    const data = await $fetch('/api/blogs/get-blog-count')
    console.log(data);
  }
}
</script>

<style scoped>

</style>