<template>
  <v-app>
    <div>
      <v-navigation-drawer class="d-xl-none d-lg-none " v-model="drawer" app floating temporary>
        <v-list dense>
          <v-row class="ma-2 mb-3">
            <v-toolbar-title class="align-center">
              <span class="title">Roythox</span>
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

      <v-app-bar class="d-xl-none d-lg-none" flat color="white" app clipped-left>
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
    <v-main>
      <v-row class="ml-1">
        <v-col class=" d-none d-xl-block d-lg-block" sm="12" md="12" lg="1" xl="2"> </v-col>
        <Navigation class=" d-none d-xl-block d-lg-block" />
        <v-col sm="12" md="12" lg="5" xl="4">
          <router-view />
        </v-col>
        <v-col
            v-if="$route.name === 'Home' || $route.name === 'Profile' || $route.name === 'Notifications'"
            lg="3"
            xl="4"
        >
          <Agenda class="ml-3 d-none d-xl-block d-lg-block"></Agenda>
          <WhoToFollow class="d-none d-xl-block d-lg-block mt-5 ml-3"></WhoToFollow>
        </v-col>
        <BottomNav></BottomNav>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import BottomNav from '@/components/BottomNav';
import Agenda from '@/components/Agenda';
import WhoToFollow from '@/components/WhoToFollow';
export default {
  name: 'App',

  components: { WhoToFollow, Navigation, BottomNav, Agenda },

  data: () => ({
    items: [
      { icon: 'mdi-account', text: 'Profil', to: '/profile' },
      { icon: 'mdi-lists', text: 'Listeler', to: '/explore' }
    ],
    drawer: false,
    menu: false,
    theme: false
  })
};
</script>
