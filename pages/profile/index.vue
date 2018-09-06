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
      <input ref="avatar" type="file" @change="onFileChanged" style="display: none;">
      <v-btn color="primary" @click="$refs.avatar.click()" small :loading="loadingUpload">ganti foto</v-btn>
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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      selectedFile: null,
      loadingUpload: false,
      settingMenus: [
        { text: 'Ubah Password', to: '/auth/change-password', class: '' },
        { text: 'Logout', to: '/auth/logout', class: 'error--text' },
      ]
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify'
    }),
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
      this.onUpload()
    },
    async onUpload() {
      this.loadingUpload = true
      let formData = new FormData()
      formData.append('file', this.selectedFile)
      formData.append('filename', this.selectedFile.name)

      try {
        let image = await this.$axios.$post('http://spgdt.setyadhiputra.com:8080/digisar-service/image/submit', formData)
        console.log('image', image);

        let response = await this.$axios.$patch(`/api/users/${ this.$auth.user.id }/info`, {
          avatar: image.data
        })
        await this.$auth.fetchUser()
        this.notify({ type: 'success', message: 'Sukses update foto' });
        this.loadingUpload = false
      } catch (error) {
        this.notify({ type: 'error', message: error.message });
        this.loadingUpload = false
      }
    }
  }
}
</script>
