<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { motion } from "motion-v";
import { sTransitions } from "@/lib/smoothcn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <motion.div
    layout
    :transition="sTransitions.spring.solid"
    data-slot="dialog-header"
    :class="cn('flex flex-col gap-2 text-center sm:text-left', props.class)"
  >
    <slot />
  </motion.div>
</template>
