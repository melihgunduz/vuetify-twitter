<template>
  <v-col>
    <v-card flat class=" rounded-lg" color="grey" width="600">

      <div class="mx-4 pt-1 align-center font-weight-black text-h6">Kimi takip etmeli</div>
      <v-divider></v-divider>
      <v-list color="transparent">
        <template v-for="(item, index) in items.slice(0, 6)">
          <v-divider v-if="item.divider" :key="index"> </v-divider>
          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <img :src="item.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="d-inline-flex" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn color="blue" outlined rounded class="font-weight-bold text-capitalize blue--text">
                Takip et
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brian',
        subtitle: `<span class="font-weight-bold">@brian</span>`,
        follow: '<v-btn>sss</v-btn>'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'James',
        subtitle: `<span class="font-weight-bold">@james</span>`,
        follow: '<v-btn>sss</v-btn>'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'John',
        subtitle: '<span class="font-weight-bold">@john</span> ',
        follow: '<v-btn>sss</v-btn>'
      }
    ]
  }),
  drawer: false,
  menu: false,
  theme: false
};
</script>