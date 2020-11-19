<template>
  <v-app>
    <div class="mb-4">
      <v-navigation-drawer class="d-xl-none d-lg-none " v-model="drawer" app floating temporary>
        <v-list dense>
          <v-row class="ma-2 mb-3">
            <v-toolbar-title class="align-center">
              <span class="title">Twitter</span>
            </v-toolbar-title>
          </v-row>
          <v-list-item v-for="item in items" :key="item.icon" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar dense class="d-xl-none d-lg-none" flat color="white" app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-spacer></v-spacer>
        <v-btn color="blue" icon>
          <router-link class="text-decoration-none" to="/">
            <v-icon>mdi-bird</v-icon>
          </router-link>
        </v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>

    <v-row>
      <v-col class=" d-none d-xl-block d-lg-block" sm="12" md="12" lg="1" xl="2"> </v-col>
      <Navigation class="d-none d-xl-block d-lg-block" />
      <v-col v-if="$route.name != 'Messages'" sm="12" md="12" lg="5" xl="4">
        <router-view />
        <Fab></Fab>
      </v-col>
      <v-col xl="8" v-else>
        <router-view />
        <Fab></Fab>
      </v-col>

      <v-col
        class="d-none d-xl-block d-lg-block"
        v-if="
          $route.name === 'Home' ||
            $route.name === 'Account' ||
            $route.name === 'Notifications' ||
            $route.name === 'Bookmarks'
        "
        lg="3"
        xl="4"
      >
        <Agenda class="d-none d-xl-block d-lg-block"></Agenda>
        <WhoToFollow class="d-none d-xl-block d-lg-block"></WhoToFollow>
      </v-col>
      <v-col class="d-none d-xl-block d-lg-block" v-if="$route.name === 'Explore'" lg="3" xl="4">
        <WhoToFollow class="d-none d-xl-block d-lg-block"></WhoToFollow>
      </v-col>
      <BottomNav></BottomNav>
    </v-row>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import BottomNav from '@/components/BottomNav';
import Agenda from '@/components/Agenda';
import WhoToFollow from '@/components/WhoToFollow';
import Fab from '@/components/Fab';
export default {
  name: 'App',
  components: { WhoToFollow, Navigation, BottomNav, Agenda, Fab },

  data: () => ({
    items: [
      { icon: 'mdi-account', text: 'Profil', to: '/account' },
      { icon: 'mdi-filter-variant', text: 'Listeler', to: '/lists' },
      { icon: 'mdi-lists', text: 'Konu Başlıkları', to: '/' },
      { icon: 'mdi-bookmark-outline', text: 'Yer İşaretleri', to: '/bookmarks' }
    ],
    drawer: false,
    menu: false,
    theme: false
  })
};
</script>
