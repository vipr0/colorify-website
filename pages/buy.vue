<template>
  <div class="mx-4 lg:mx-8 xl:mx-auto max-w-screen-xl">
    <div class="flex flex-col md:flex-row justify-between items-center py-6 space-y-6 md:space-y-0">
      <div v-if="user" class="flex-1">
        <div class="flex items-center">
          <img :src="user.photo_url" :alt="`${user.first_name} ${user.last_name}'s photo`"
            class="h-16 rounded-full mr-3">
          <div>
            <p class="text-gray-400 font-semibold leading-none">@{{user.username}}</p>
            <p class="text-gray-800 font-extrabold text-4xl sm:text-5xl">{{user.first_name}} {{user.last_name}}</p>
          </div>
        </div>
        <div class="mt-4 text-base">
          <p class="text-justify text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl lg:mx-0">
            To buy premium click <b>Buy</b> button
          </p>
          <button
            class="mt-4 px-8 py-4 border border-transparent font-medium rounded-full text-white bg-teal-500 hover:bg-teal-700 transition-all duration-300 shadow-xl"
            @click="pay()">
            Buy
          </button>
        </div>
      </div>
      <div v-else class="flex-1">
        <h1
          class="text-4xl text-center md:text-left tracking-tight font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 lg:text-6xl">
          Buy premium
        </h1>
        <p class="mt-4 text-base text-justify text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl lg:mx-0">
          To continue press the "Log in with Telegram" button
        </p>
        <div class="flex justify-center md:justify-start">
          <client-only>
            <telegram-login class="mt-6" mode="callback" telegram-login="colorify_bot" @callback="onTelegramCallback" />
          </client-only>
        </div>
      </div>
      <div class="relative w-8/12 sm:w-1/2 md:w-4/12 lg:pl-8 -mr-3">
        <img class="w-auto z-10" src="/img/phone.png">
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: 'telegramUser'
      })
    },
    mounted() {
      if (process.browser) {
        if (localStorage.getItem("user")) {
          const user = JSON.parse(localStorage.getItem("user"))
          this.saveUser(user)
        }
      }
    },
    methods: {
      ...mapActions(['saveUser']),
      onTelegramCallback(user) {
        this.saveUser(user);
        if (process.browser) localStorage.setItem("user", JSON.stringify(user));
      },
      pay() {
        alert('Currently in development')
      }
    }
  }
</script>