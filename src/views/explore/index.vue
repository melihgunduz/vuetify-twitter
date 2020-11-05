<template>
  <v-card flat class="mx-auto mt-4" width="600">
    <v-toolbar flat>
      <v-text-field
        flat
        rounded
        hide-details
        label="Twitter'da ara"
        clearable
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
      <v-btn color="transparent" depressed small>
        <v-icon color="blue">mdi-cog-outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-img
      :src="
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
      "
      :lazy-src="
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
      "
    ></v-img>

    <v-card flat class="mx-auto my-3" width="600">
      <div class="mx-4 pt-1 align-center font-weight-black text-h6">Gündem</div>
      <v-divider></v-divider>
      <v-list color="transparent">
        <template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider ba></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-card>
</template>

<script>
/*
import WhoToFollow from "@/components/WhoToFollow";
*/
export default {
  name: 'Home',
  components: {
    /*WhoToFollow*/
  }
};
</script>