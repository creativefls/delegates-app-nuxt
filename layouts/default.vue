<template>
  <v-app>
    <v-toolbar dark fixed app color="primary">
      <v-btn
        icon
      >
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
      >
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-nav :value="true" :active.sync="activeNavigation" fixed color="white" height="50">
      <v-btn v-for="(nav, key) in navs" :key="key"  flat color="blue lighten-1" :value="nav.route">
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Vuetify.js',
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        activeNavigation: 'history',
        navs: [
          { route: 'recent', icon: 'history' }
        ]
      }
    }
  }
</script>
