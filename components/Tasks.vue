<template>
  <ul class="list-group text-left">
    <li class="list-group-item">
      <input class="form-control" v-model="content" type="text" @keyup.enter="addTask" />
    </li>
    <li v-for="task in tasks" :key="task.id" class="list-group-item">
      <span :style="task.completed ? { 'text-decoration': 'line-through' } : {}">
        {{ task.content }}
      </span>
      <div class="float-right">
        <button class="btn btn-sm btn-success" @click="$store.dispatch('tasks/completeTask', task.id)">
          Complete
        </button>
        <button class="btn btn-sm btn-danger" @click="$store.dispatch('tasks/deleteTask', task.id)">
          Delete
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('tasks/getTasks')
  },

  data() {
    return {
      content: '',
    }
  },

  computed: {
    tasks() {
      return this.$store.getters['tasks/getTasks']
    },
  },

  methods: {
    addTask() {
      this.$store.dispatch('tasks/addTask', this.content)
        .then(() => {
          this.content = ''
        })
    },
  },
}
</script>
