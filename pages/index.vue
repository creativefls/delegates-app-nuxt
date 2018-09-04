<template>
  <v-container fluid grid-list-sm class="white">
    <v-layout row wrap>
      <v-flex v-for="(menu, index) in menus" :key="index" xs4 class="text-xs-center my-0 py-0">
        <v-btn icon dark color="primary" fab>
          <v-icon v-html="menu.icon"></v-icon>
        </v-btn>
        <p>{{ menu.name }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: 'discovery panel', icon: 'assignment', path: '' },
        { name: 'makanan', icon: 'assignment', path: '' },
        { name: 'vote', icon: 'assignment', path: '' },
        { name: 'discovery panel', icon: 'assignment', path: '' },
        { name: 'discovery panel', icon: 'assignment', path: '' },
      ]
    }
  }
}
</script>
