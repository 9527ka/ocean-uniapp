<template>
  <view class="footer blur">
    <view
      v-for="(item, index) in navItems"
      :key="index"
      :class="tabs == index ? item.class + ' add' : item.class"
      @click="toLaunch(item.page)"
    >
      <image
        :src="tabs == index ? item.activeIcon : item.icon"
        mode=""
      ></image>
      <text>{{ item.text }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      navItems: [
        {
          class: "home",
          page: "/pages/tabs/home",
          text: this.$t('Home'),
          icon: require("../static/tab/Home.png"),
          activeIcon: require("../static/tab/Home_a.png"),
        },
        {
          class: "action",
          page: "/pages/tabs/Inaction",
          text: this.$t('InAction'),
          icon: require("../static/tab/Action.png"),
          activeIcon: require("../static/tab/Action_a.png"),
        },
        {
          class: "inbox",
          page: "/pages/tabs/Inbox",
          text: this.$t('Inbox'),
          icon: require("../static/tab/Inbox.png"),
          activeIcon: require("../static/tab/Inbox_a.png"),
        },
        {
          class: "account",
          page: "/pages/tabs/account",
          text: this.$t('Account'),
          icon: require("../static/tab/Account.png"),
          activeIcon: require("../static/tab/Account_a.png"),
        },
      ],
    };
  },
  methods: {
    toLaunch(name, data) {
      uni.reLaunch({
        url: `${name}${data ? '?' : ''}${data || ''}`,
      });
    },
  },
};
</script>

<style lang="scss">
/* Add your styles here */
</style>