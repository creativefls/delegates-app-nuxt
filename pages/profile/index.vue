<template>
  <div class="mt-3">
    <v-layout justify-center>
      <v-avatar
        class="ml-1"
        size="96px">
        <img
          :src="$auth.user.info.avatar"
          alt="FLS 2018"
        >
      </v-avatar>
    </v-layout>
    <v-layout justify-center>
      <v-btn color="primary" small>ganti foto</v-btn>
    </v-layout>

    <v-container class="white">
      <v-subheader>Nama</v-subheader>
      <p class="ml-3">{{ $auth.user.info.fullName }}</p>
    </v-container>

    <v-container class="white mt-2">
      <v-list>
        <v-subheader class="primary--text">Pengaturan</v-subheader>
        <v-divider></v-divider>
        <v-list-tile v-for="(setting, index) in settingMenus" :key="index" :to="setting.to">
          <v-list-tile-content>
            <v-list-tile-title :class="setting.class">{{ setting.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settingMenus: [
        { text: 'Ubah Password', to: '/auth/change-password', class: '' },
        { text: 'Logout', to: '/auth/logout', class: 'error--text' },
      ]
    }
  },
}
</script>
