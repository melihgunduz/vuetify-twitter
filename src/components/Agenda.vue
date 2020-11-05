<template>
  <v-col>
    <v-card width="350" flat class="mb-2">
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
      </v-toolbar>
    </v-card>

    <v-card flat class="rounded-lg" width="350">
      <v-btn color="transparent" text width="5px" class="float-right text-capitalize text-xl-h6 ">
        <v-icon color="blue">mdi-cog-outline</v-icon>
      </v-btn>
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
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider
          ><v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider
          ><v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"
                ><a class="text-decoration-none" href="/">#ssssssssss</a></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider
          ><v-list-item>
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
  </v-col>
</template>

<script>
export default {
  drawer: false,
  menu: false,
  theme: false
};
</script>
