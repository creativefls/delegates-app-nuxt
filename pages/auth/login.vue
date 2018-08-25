<template>
  <v-layout justify-center style="height: 100vh">
    <v-flex md6>
      <v-card>
        <v-card-title>Login</v-card-title>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        },
      }).then(res => {
        this.$router.replace('/');
      }).catch(err => {
        console.log('err login', err.message);
      });
    }
  }
}
</script>
