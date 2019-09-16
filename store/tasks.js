export const state = ({
  tasks: [],
})

export const getters = {
  getTasks: state => state.tasks,
}

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  }
}

export const actions = {
  getTasks(store) {
    return new Promise((resolve, reject) => {
      this.$axios.get('http://newburydevs-tasks-api.test/api/tasks')
        .then((response) => {
          store.commit('setTasks', response.data)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  addTask(store, content) {
    return new Promise((resolve, reject) => {
      this.$axios.post('http://newburydevs-tasks-api.test/api/tasks', {
        content,
      })
        .then((response) => {
          store.dispatch('getTasks')
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  completeTask(store, id) {
    return new Promise((resolve, reject) => {
      this.$axios.patch(`http://newburydevs-tasks-api.test/api/tasks/${id}/complete`)
        .then((response) => {
          store.dispatch('getTasks')
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  deleteTask(store, id) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`http://newburydevs-tasks-api.test/api/tasks/${id}`)
        .then((response) => {
          store.dispatch('getTasks')
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
