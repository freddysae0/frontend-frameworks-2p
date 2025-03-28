<script setup lang="ts">
import { ref } from 'vue'
import shrekAdjetives from '../assets/shrek_adjetives.json'

const adjetives = ref(shrekAdjetives)
const currentAdjective = ref(adjetives.value[0])

const onClick = () => {
  const currentIndex = adjetives.value.findIndex((val) => val === currentAdjective.value)
  currentAdjective.value = adjetives.value[(currentIndex + 1) % adjetives.value.length]
}
</script>

<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
  >
    <h1 class="text-xl">
      I&apos;m
      <span class="text-emerald-500" data-testid="adjective-span">{{ currentAdjective }}</span>
    </h1>
    <button
      data-testid="shrek-button"
      @click="onClick"
      class="p-2 px-4 bg-slate-200 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
    >
      Click
    </button>

    <img src="/shrek.webp" alt="Shrek" :width="500" :height="500" />
  </main>
</template>
