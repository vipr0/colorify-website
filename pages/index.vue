<template>
  <div>
    <section id="hero"
      class="flex flex-col-reverse md:flex-row justify-between items-center py-6 space-y-reverse space-y-6 md:space-y-0">
      <div class="flex-1">
        <h1
          class="text-4xl text-center md:text-left tracking-tight leading-none font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          <span class="block">Bring your photos</span>
          <span class="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            new colors
          </span>
        </h1>
        <p class="mt-4 text-base text-justify text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl lg:mx-0">
          Colorify Bot is a telegram bot that can colorize black and white photos. Breathe new life into your old photos
          by giving them new colors.
        </p>
        <div class="flex justify-center md:justify-start">
          <a href="https://t.me/colorify_bot"
            class="mt-4 md:mt-6 px-6 py-3 md:px-8 md:py-4 border border-transparent text-base font-medium rounded-full text-white bg-purple-400 hover:bg-pink-500 transition-all duration-300 shadow-xl">
            Get started
          </a>
        </div>
      </div>
      <div class="relative w-8/12 sm:w-1/2 md:w-4/12 lg:pl-8 -mr-3">
        <img class="w-auto z-10" src="/img/phone.png">
      </div>
    </section>

    <section id="about" class="relative mt-12 md:mt-0">
      <div
        class="flex flex-col-reverse md:flex-row md:items-center space-y-reverse space-y-6 md:space-y-0 md:space-x-8 p-8">
        <div class="flex-1">
          <client-only>
            <twenty-twenty
              class="rounded-3xl shadow-2xl w-full bg-white transform rotate-1 hover:scale-105 transition-all duration-300"
              before="/img/sample-bw.jpg" after="/img/sample-color.jpeg" />
          </client-only>
        </div>
        <div class="flex-1 z-10 md:py-6">
          <h3 class="text-4xl tracking-tight font-extrabold leading-none text-white sm:text-5xl lg:text-6xl">
            Powered by AI
          </h3>
          <div class="mt-3 text-base text-red-200 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
            <p class="text-justify">
              Bot uses AI, based on neural network, that detects objects on photo and colors them.
              All you need to do is:
            </p>
            <ul class="mt-3 ">
              <li class="flex mb-1"><img src="/icons/photo.svg" class="mr-3">send a photo</li>
              <li class="flex mb-1"><img src="/icons/message.svg" class="mr-3">forward a message with a photo</li>
              <li class="flex mb-1"><img src="/icons/link.svg" class="mr-3">send a link to the photo</li>
            </ul>
            <p class="text-justify mt-3">
              and bot will immediately process your photo.
            </p>
          </div>
        </div>
      </div>
      <div
        class="absolute top-0 left-0 w-full rounded-3xl h-full md:h-11/12 shadow-lg bg-gradient-to-br from-pink-500 to-rose-500 transform lg:scale-y-75">
      </div>
    </section>

    <section id="premium" class="flex flex-col items-center pt-12 pb-12 md:pb-24">
      <div class="text-center">
        <h3 class="text-4xl tracking-tight leading-none font-extrabold sm:text-5xl lg:text-6xl">
          <span class="block">More possibilities with</span>
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 block">premium</span>
        </h3>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Purchasing a premium will allow you to use the bot without limits and will also help the developer to keep the bot running smoothly.
        </p>
      </div>
      <div class="flex flex-col md:flex-row justify-center mb-8 md:my-12 md:space-x-5">
        <div class="flex flex-col items-center px-8 md:px-16 py-10 text-gray-800">
          <p class="text-lg font-semibold uppercase tracking-wide">Normal</p>
          <div class="flex items-center my-4 relative">
            <p class="text-5xl font-bold mr-2">0</p>
            <p class="font-sm">
              <span class="block">per user</span>
              <span class="block">per month</span>
            </p>
            <span class="absolute top-0 -ml-3 text-lg">$</span>
          </div>
          <ul class="text-center text-lg">
            <li class="mb-3">
              <svg class="h-6 w-6 text-teal-500 inline mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              10 photos per day
            </li>
            <li>
              <svg class="h-6 w-6 text-teal-500 inline mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              HD photo quality
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center px-8 md:px-16 py-10 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
          <p class="text-lg font-semibold uppercase tracking-wide">Premium</p>
          <div class="flex items-center my-4 relative">
            <p class="text-5xl font-bold mr-2">0.99</p>
            <p class="font-sm">
              <span class="block">per user</span>
              <span class="block">per month</span>
            </p>
            <span class="absolute top-0 -ml-3 text-lg">$</span>
          </div>
          <ul class="text-center text-lg">
            <li class="mb-3">
              <svg class="h-6 w-6 text-teal-500 inline mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              unlimited photos
            </li>
            <li>
              <svg class="h-6 w-6 text-teal-500 inline mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              maximum quality photo
            </li>
          </ul>
        </div>
      </div>
      <nuxt-link to="/buy"
        class="px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-teal-500 hover:bg-teal-700 transition-all duration-300 shadow-xl">
        Buy premium</nuxt-link>
    </section>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>

</style>