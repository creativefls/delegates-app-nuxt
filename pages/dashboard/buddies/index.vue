<template>
  <div>
    <v-data-table
      hide-headers
      :items="users"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.info.fullName }}</td>
        <td class="text-xs-right">{{ props.item.roles[0] }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
          >
            edit
          </v-icon>
          <v-icon
            small
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="reload">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import _ from 'lodash'

function generateNumbs (start, end) {
  let length = end - start + 1
  return [...Array(length)].map((_,i) => i + start)
}

export default {
  data () {
    return {
      users: []
    }
  },
  computed: {
    buddyEdu () {
      return  [
        ...generateNumbs(41, 48),
        ...generateNumbs(81, 88),
        ...generateNumbs(121, 128),
        ...generateNumbs(161, 168),
        ...generateNumbs(201, 208),
      ]
    },
    buddyHumanCapital () {
      return [
        ...generateNumbs(1, 8),
        ...generateNumbs(89, 96),
        ...generateNumbs(129, 136),
        ...generateNumbs(169, 176),
        ...generateNumbs(209, 216),
      ]
    },
    buddyDigital () {
      return [
        ...generateNumbs(9, 16),
        ...generateNumbs(49, 56),
        ...generateNumbs(137, 144),
        ...generateNumbs(177, 184),
        ...generateNumbs(217, 224),
      ]
    },
    buddyEntre () {
      return [
        ...generateNumbs(17, 24),
        ...generateNumbs(57, 64),
        ...generateNumbs(97, 104),
        ...generateNumbs(185, 192),
        ...generateNumbs(225, 232),
      ]
    },
    buddyUrban () {
      return [
        ...generateNumbs(25, 32),
        ...generateNumbs(65, 72),
        ...generateNumbs(105, 112),
        ...generateNumbs(145, 152),
        ...generateNumbs(233, 240),
      ]
    },
    buddyPoverty () {
      return [
        ...generateNumbs(33, 40),
        ...generateNumbs(73, 80),
        ...generateNumbs(113, 120),
        ...generateNumbs(153, 160),
        ...generateNumbs(193, 200),
      ]
    },
  },
  methods: {
    reload () {

    },
    fetchUsers () {
      this.$axios.$get('/api/users').then(res => {
        // this.users = res.sort((a,b) => { a.email - b.email })
        this.users = _.orderBy(res, ['roles'])
      }).catch(err => {
        console.log('error', err);
      })
    }
  },
  created () {
    this.fetchUsers()
    console.log('angka', generateNumbs(33, 49));

  }
}
</script>
