<template>
  <div >
    <v-card flat class="mx-auto " color="transparent" width="250">

      <v-btn width="100%" to="/" color="transparent" text class=" text-capitalize text-xl-h6 justify-start ">
        <v-icon color="blue">mdi-bird</v-icon>
      </v-btn>

      <v-btn width="100%" to="/" color="transparent" text class="mt-4 text-capitalize text-xl-h6 justify-start ">
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else color="black">mdi-home-outline</v-icon>
        <div v-if="$route.name === 'Home'" class=" text-capitalize text-xl-h6 ml-3 blue--text">Anasayfa</div>
        <div v-else class="text-capitalize text-xl-h6 ml-3 black--text">Anasayfa</div>
      </v-btn>

      <v-btn
        to="/explore"
        color="transparent"
        text
        class="text-capitalize text-xl-h6 d-block my-6 justify-start font-weight-bold black--text"
      >
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
        <v-icon v-else color="black">mdi-pound</v-icon>
        <div v-if="$route.name === 'Explore'" class="text-capitalize text-xl-h6 ml-3 blue--text">Keşfet</div>
        <div v-else class="text-capitalize text-xl-h6 ml-3 black--text">Keşfet</div>
      </v-btn>

      <v-btn
        to="/notifications"
        color="transparent"
        text
        class="text-capitalize text-xl-h6 d-block my-6 justify-start font-weight-bold black--text"
      >
        <v-icon v-if="$route.name === 'Notifications'" color="blue">mdi-bell</v-icon>
        <v-icon v-else color="black">mdi-bell-outline</v-icon>
        <div v-if="$route.name === 'Notifications'" class="text-capitalize text-xl-h6 ml-3 blue--text">Bildirimler</div>
        <div v-else class="text-capitalize text-xl-h6 ml-3 black--text">Bildirimler</div>
      </v-btn>

      <v-btn
        to="/messages"
        color="transparent"
        text
        class="text-capitalize text-xl-h6 d-block my-6 justify-start font-weight-bold black--text"
      >
        <v-icon v-if="$route.name === 'Messages'" color="blue">mdi-email</v-icon>
        <v-icon v-else color="black">mdi-email-outline</v-icon>
        <div v-if="$route.name === 'Messages'" class="text-capitalize text-xl-h6 ml-3 blue--text">Mesajlar</div>
        <div v-else class="text-capitalize text-xl-h6 ml-3 black--text">Mesajlar</div>
      </v-btn>

      <v-btn
        to="/account"
        color="transparent"
        text
        class="text-capitalize text-xl-h6 d-block my-6 justify-start font-weight-bold black--text"
      >
        <v-icon v-if="$route.name === 'Account'" color="blue">mdi-account</v-icon>
        <v-icon v-else color="black">mdi-account-outline</v-icon>
        <div v-if="$route.name === 'Account'" class="text-capitalize text-xl-h6 ml-3 blue--text">Profil</div>
        <div v-else class="text-capitalize text-xl-h6 ml-3 black--text">Profil</div>
      </v-btn>

      <div class= "mt-2 text-left">
        <v-btn height="50px" width="235px" class="text-capitalize white--text" rounded color="blue">Tweetle</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  drawer: false,
  menu: false,
  theme: false
};
</script>
