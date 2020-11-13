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
        text
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
        <v-icon v-if="$route.name === 'Profile'" color="blue">mdi-account</v-icon>
        <v-icon v-else color="black">mdi-account-outline</v-icon>
        <div v-if="$route.name === 'Profile'" class="text-capitalize font-weight-bold text-xl-h6 ml-3 blue--text">
          Profil
        </div>
        <div v-else class="text-capitalize font-weight-bold text-xl-h6 ml-3 black--text">Profil</div>
      </v-btn>

      <div class="mt-2 text-left">
        <v-btn height="50px" width="235px" class="text-capitalize white--text" rounded color="blue">Tweetle</v-btn>
      </div>
      <v-spacer></v-spacer>

      <div class="mt-2 text-left">
        <v-menu offset-y rounded>
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded text width="100%" height="auto" v-bind="attrs" v-on="on">
              <v-avatar class="my-1" size="40">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
              <div class="mt-1">
                <div>
                  <div class="text-capitalize">Title</div>
                </div>
                <!--tag-->
                <div class="ml-2 text-body-2 grey--text text-capitalize">@title</div>
              </div>
              <v-spacer></v-spacer>

              <v-icon class="float-right">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-list-item-avatar>
              <div>
                <div>
                  <div class="text-capitalize">Title</div>
                </div>
                <div class=" text-body-2 grey--text text-capitalize">@title</div>
              </div>
              <v-spacer></v-spacer>

              <v-icon class="float-right" color="blue">mdi-check</v-icon>
            </v-list-item>

            <v-list-item>
              <v-btn text class="text-capitalize d-block justify-start">
                <div class="text-capitalize  text-body-2 black--text">
                  Var olan bir hesap ekle
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class=" text-capitalize d-block justify-start" text>
                <div class="text-capitalize text-body-2 black--text">
                  Hesaptan çıkış yap
                </div>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card>

    <v-card flat>
      <!--<v-card-actions>
        <v-btn rounded text width="100%" height="auto">
          <v-avatar class="my-1" size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="mt-1">
            <div>
              <div class="text-capitalize">Title</div>
            </div>
            &lt;!&ndash;tag&ndash;&gt;
            <div class="ml-2 text-body-2 grey&#45;&#45;text text-capitalize">@title</div>
          </div>
          <v-spacer></v-spacer>

          <v-icon class="float-right">mdi-chevron-down</v-icon>
        </v-btn>
      </v-card-actions>-->
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
