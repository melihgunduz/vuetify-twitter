<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          ><v-toolbar-title class="d-block font-weight-black text-h6  ">meligi</v-toolbar-title></v-card-title
        >
        <v-card-subtitle><div class="d-block">0 Tweet</div></v-card-subtitle>

        <v-card  flat color="#f5f8fa" width="600">
          <v-divider></v-divider>
       <v-img
            :src="
            'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
          "
            :lazy-src="
            'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
          "
            height="100%"
            width="100%"
        ></v-img></v-card>


       <!-- <v-btn>Profili ayarla</v-btn>-->

        <v-tabs v-model="tabs" fixed-tabs>
          <v-tab class="text-capitalize ">
            Tweetler
          </v-tab>

          <v-tab class="flex-nowrap text-capitalize">
            Tweetler ve yanıtlar
          </v-tab>
          <v-tab class="text-capitalize ">
            Medya
          </v-tab>

          <v-tab class="text-capitalize">
            Beğeni
          </v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-tabs-items v-model="tabs">
          <v-tab-item> </v-tab-item>
          <v-tab-item>
            <v-card flat> </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="text-center d-block font-weight-black black--text text-h6">
                  Henüz bir fotoğraf veya video Tweetlemedin
                </div>
                <p class="text-center">Bir fotoğraf ya da video içeren Tweetler attığın zaman, burada gözükecekler.</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat> </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
    <v-col xl="12">
      <WhoToFollowX></WhoToFollowX>
    </v-col>
  </v-row>
</template>

<script>
import WhoToFollowX from '@/components/WhoToFollowX';
export default {
  components: { WhoToFollowX },
  data() {
    return {
      tabs: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</script>
