<template>
  <div class="d-none">
    <v-card flat class="rounded-lg mx-auto " width="250">
      <v-btn
        width="100%"
        to="/"
        color="transparent"
        text
        class=" text-capitalize font-weight-bold text-xl-h6 justify-start "
      >
        <v-icon color="blue">mdi-bird</v-icon>
      </v-btn>

      <v-btn
        width="100%"
        to="/"
        depressed
        text
        color="transparent"
        class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else color="black">mdi-home-outline</v-icon>
        <div v-if="$route.name === 'Home'" class=" text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Anasayfa
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Anasayfa</div>
      </v-btn>

      <v-btn
          width="100%"
          to="/explore"
          depressed
          color="transparent"
          class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
        <v-icon v-else color="black">mdi-pound</v-icon>
        <div v-if="$route.name === 'Explore'" class="text-capitalize font-weight-bold text-xl-h6  ml-3 blue--text">
          Keşfet
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Keşfet</div>
      </v-btn>


      <v-btn
          width="100%"
          to="/notifications"
          depressed
          color="transparent"
          class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Notifications'" color="blue">mdi-bell</v-icon>
        <v-icon v-else color="black">mdi-bell-outline</v-icon>
        <div v-if="$route.name === 'Notifications'" class="text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Bildirimler
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Bildirimler</div>
      </v-btn>

      <v-btn
          width="100%"
          to="/messages"
          depressed
          color="transparent"
          class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Messages'" color="blue">mdi-email</v-icon>
        <v-icon v-else color="black">mdi-email-outline</v-icon>
        <div v-if="$route.name === 'Messages'" class="text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Mesajlar
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Mesajlar</div>
      </v-btn>

      <v-btn
          width="100%"
          to="/bookmarks"
          depressed
          color="transparent"
          class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Bookmarks'" color="blue">mdi-bookmark</v-icon>
        <v-icon v-else color="black">mdi-bookmark-outline</v-icon>
        <div v-if="$route.name === 'Bookmarks'" class="text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Yer işaretleri
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Yer işaretleri</div>
      </v-btn>

      <v-btn
          width="100%"
          to="/account"
          depressed
          color="transparent"
          class="mt-4 text-capitalize font-weight-bold text-xl-h6 justify-start blue--text "
      >
        <v-icon v-if="$route.name === 'Account'" color="blue">mdi-account</v-icon>
        <v-icon v-else color="black">mdi-account-outline</v-icon>
        <div v-if="$route.name === 'Account'" class="text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Profil
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Profil</div>
      </v-btn>

      <div class="mt-2 text-left">
        <v-btn height="50px" width="235px" class="text-capitalize white--text" rounded color="blue">Tweetle</v-btn>
      </div>
      <v-spacer></v-spacer>

      <v-list-item two-line>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title class="ml-2 mb-1">
            John
          </v-list-item-title>
          <v-list-item-subtitle class="ml-2">@john</v-list-item-subtitle>
        </v-list-item-content>

        <v-icon>mdi-chevron-down</v-icon>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },

  drawer: false,
  menu: false,
  theme: false
};
</script>
