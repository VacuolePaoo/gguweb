<script setup>
const route = useRoute()
const isJoinDoscRoute = computed(() => route.path === '/joindosc')
const isPostIndex = computed(() => route.path === '/post')
const bodyClass = computed(() => (isPostIndex.value ? 'no-scroll' : ''))

const navItems = [
  { label: '首页', to: '/', match: '/' },
  { label: '星河文库', to: '/post', match: '/post' },
  { label: '线上申请', to: '/joindosc', match: '/joindosc' },
  { label: '通行证', to: '/mail', match: '/mail' },
]

const activeIndex = computed(() => {
  const path = route.path
  if (path === '/') return 0
  if (path.startsWith('/post')) return 1
  if (path.startsWith('/joindosc')) return 2
  if (path.startsWith('/mail')) return 3
  return -1
})

const navRef = ref(null)

const indicatorLeft = ref(0)
const indicatorWidth = ref(0)
const indicatorVisible = ref(false)

function updateIndicator() {
  const idx = activeIndex.value
  const navEl = navRef.value
  if (idx < 0 || !navEl) {
    indicatorVisible.value = false
    return
  }
  // Skip the indicator div (first child), nav links start at index 1
  const links = navEl.querySelectorAll('a[href]')
  const itemEl = links[idx]
  if (!itemEl) {
    indicatorVisible.value = false
    return
  }
  indicatorLeft.value = itemEl.offsetLeft
  indicatorWidth.value = itemEl.offsetWidth
  indicatorVisible.value = true
}

let resizeObserver = null

onMounted(() => {
  nextTick(updateIndicator)
  resizeObserver = new ResizeObserver(updateIndicator)
  if (navRef.value) resizeObserver.observe(navRef.value)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

watch(() => route.path, () => {
  nextTick(updateIndicator)
})

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
      <nav ref="navRef" class="pointer-events-auto relative flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/55 px-2 py-2 text-sm font-medium text-gray-300 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl md:gap-2 md:px-3">
        <!-- Sliding pill indicator (white bg, slides horizontally) -->
        <div
          class="absolute top-2 bottom-2 rounded-full bg-white transition-all duration-300 ease-out"
          :style="{
            left: indicatorLeft + 'px',
            width: indicatorWidth + 'px',
            opacity: indicatorVisible ? 1 : 0,
          }"
        />
        <NuxtLink
          v-for="(item, i) in navItems"
          :key="item.to"
          :to="item.to"
          class="relative z-10 shrink-0 rounded-full px-4 py-2 transition-colors duration-300"
          :class="activeIndex === i ? 'text-black font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/10'"
        >{{ item.label }}</NuxtLink>
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
