<template>
  <v-layout justify-center style="height: 100vh">
    <v-flex md6>
      <v-card>
        <v-card-title>
          <h3 class="headline">Login</h3>
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="login">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  name="email"
                  label="Email"
                  v-model="email"
                  required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="password"
                  label="Password"
                  v-model="password"
                  type="password"
                  required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-btn type="submit" :loading="loading" color="primary">
                  Login
                </v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-card-text>
      </v-card>
      <p class="text-xs-center mt-4">
        <a href="https://aku.nusantaramuda.org">Bikin akun sini</a>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    ...mapActions(['notify']),
    login () {
      this.loading = true
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        },
      }).then(res => {
        this.$router.replace('/');
        this.loading = false
      }).catch(err => {
        console.log('err login', err.message);
        let msg = err.message
        if (err.response) msg = err.response.data.message
        this.notify({ type: 'error', message: msg });
        this.loading = false
      });
    }
  }
}
</script>
