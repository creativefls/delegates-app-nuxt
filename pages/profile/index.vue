<template>
  <div>
    profil
    <br>
    <v-btn @click="logout()">logout</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.logout().then(() => {
        this.$router.push('/auth/login')
      })
    }
  }
}
</script>
