<script setup>
const route = useRoute()
const isJoinDoscRoute = computed(() => route.path === '/joindosc')
const isPostIndex = computed(() => route.path === '/post')
const bodyClass = computed(() => (isPostIndex.value ? 'no-scroll' : ''))
useHead({
  title: '星河环球大学 - Galaxy Global University',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Galaxy Global University Official Website' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://oss1.236668.xyz/fonts/vivosans.css' },
    { rel: 'stylesheet', href: 'https://oss1.236668.xyz/fonts/lxgw/LXGWWenKai-Regular/result.css' },
    { rel: 'stylesheet', href: 'https://oss1.236668.xyz/fonts/lxgw/LXGWWenKai-Light/result.css' },
    { rel: 'stylesheet', href: 'https://oss1.236668.xyz/fonts/lxgw/LXGWWenKai-Medium/result.css' }
  ],
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4889390799936204',
      async: true,
      crossorigin: 'anonymous',
      tagPosition: 'bodyClose'
    },
    {
      src: 'https://oss1.236668.xyz/cursor.js',
      defer: true,
      tagPosition: 'bodyClose'
    }
  ],
  htmlAttrs: {
    lang: 'zh'
  },
  bodyAttrs: {
    class: bodyClass
  }
})
</script>

<template>
  <div :class="['bg-black text-white flex flex-col font-sans selection:bg-gray-800 relative overflow-hidden', (isJoinDoscRoute || isPostIndex) ? 'h-screen' : 'min-h-screen']">
    <!-- Header -->
    <header
      id="global-site-header"
      class="pointer-events-none fixed left-0 right-0 top-5 z-30 flex justify-center px-4"
    >
      <nav class="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/55 px-2 py-2 text-sm font-medium text-gray-300 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl md:gap-2 md:px-3">
        <NuxtLink
          to="/"
          class="shrink-0 rounded-full px-4 py-2 font-bold tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10"
        >GGU</NuxtLink>
        <a
          href="#"
          class="shrink-0 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/10 hover:text-white"
        >学术课程</a>
        <a
          href="#"
          class="shrink-0 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/10 hover:text-white"
        >招生信息</a>
        <a
          href="#"
          class="shrink-0 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/10 hover:text-white"
        >关于我们</a>
        <NuxtLink
          to="/mail"
          class="shrink-0 rounded-full border border-white/10 bg-white px-4 py-2 font-semibold text-black transition-colors duration-300 hover:bg-gray-200"
        >GGU通行证</NuxtLink>
      </nav>
    </header>

    <NuxtPage />

    <!-- Footer -->
    <footer
      v-if="!isJoinDoscRoute && !isPostIndex"
      id="global-site-footer"
      class="w-full py-8 text-center text-xs md:text-sm text-gray-600 border-t border-gray-900 mt-auto z-20 relative bg-black/80"
    >
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Galaxy Global University. 保留所有权利.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            class="hover:text-gray-300 transition-colors"
          >隐私政策</a>
          <a
            href="#"
            class="hover:text-gray-300 transition-colors"
          >使用条款</a>
          <a
            href="#"
            class="hover:text-gray-300 transition-colors"
          >联系方式</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.font-custom {
  font-family: "LXGW WenKai", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
  font-family: "vivo Sans", sans-serif;
}
</style>
