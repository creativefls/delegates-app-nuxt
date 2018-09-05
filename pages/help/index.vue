<template>
  <div>
    <v-layout justify-center>
      <v-avatar
        tile
        class="ml-1"
        size="96px">
        <img
          src="/icon.png"
          alt="FLS 2018"
        >
      </v-avatar>
    </v-layout>
    <v-container>
      <p class="text-xs-center">
        Future Leader Summit (FLS) merupakan konferensi nasional pemuda tahunan yang digagas oleh Nusantara Muda sejak 2011.
      </p>
    </v-container>
    <v-container>
      <v-list>
        <v-subheader>Hubungi Kami</v-subheader>
        <v-list-tile avatar v-for="(contact, index) in contacts" :key="index" :href="contact.href">
          <v-list-tile-avatar>
            <v-icon dark :class="contact.class">{{ contact.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ contact.address }}</v-list-tile-title>
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
      contacts: [
        { icon: 'web', address: 'futureleadersummit.org', class: 'primary', href: 'https://futureleadersummit.org' },
        { icon: 'email', address: 'info@futureleadersummit.org', class: 'blue', href: 'mailto:info@futureleadersummit.org' },
        { icon: 'email', address: 'futureleadersummit@gmail.com', class: 'red', href: 'mailto:futureleadersummit@gmail.com' },
        { icon: 'phone', address: '0812 5252 9921 (Kiki)', class: 'green', href: 'https://wa.me/6281252529921' },
        { icon: 'phone', address: '0815 5388 8080 (Alex)', class: 'blue', href: 'tel:081553888080' },
      ]
    }
  }
}
</script>
