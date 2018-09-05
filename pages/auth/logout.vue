<template>
  <div>logging out...</div>
</template>

<script>
export default {
  created () {
    this.$auth.logout().then(() => {
      this.$router.push('/auth/login')
    })
  }
}
</script>
