<template>
  <section class="container">
    <div class="w-100">
      <h1 class="title">
        Tasks
      </h1>
      <tasks />
    </div>
  </section>
</template>

<script>
import Tasks from '~/components/Tasks.vue'

export default {
  components: {
    Tasks
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
