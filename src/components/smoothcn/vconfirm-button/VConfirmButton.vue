<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from ".";
import { cn } from "@/lib/utils";
import { buttonVariants } from ".";
import { AnimatePresence, LayoutGroup, motion } from "motion-v";
import { X } from "lucide-vue-next";
import { ref } from "vue";
import type { Component } from "vue";
import { sGestures, sTransitions, sVariants } from "@/lib/smoothcn";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
  confirmText?: string | Component;
  disableConfirm?: boolean;
  cancelIcon?: Component;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  disableConfirm: false,
  confirmText: "Are you sure?",
});

const isConfirming = ref(false);
const emit = defineEmits(["click", "confirm"]);

const handleClick = (e: MouseEvent) => {
  if (props.disableConfirm) {
    emit("click", e);
    return;
  }

  if (!isConfirming.value) {
    isConfirming.value = true;
    emit("click", e);
  } else {
    emit("confirm", e);
    isConfirming.value = false;
  }
};
</script>

<template>
  <LayoutGroup>
    <motion.div
      layout
      :class="
        cn(
          'flex justify-start items-center gap-2 overflow-hidden relative',
          props.containerClass,
        )
      "
      :transition="sTransitions.spring.solid"
    >
      <motion.button
        layout
        key="confirm-btn"
        @click="handleClick"
        data-slot="button"
        :data-variant="variant"
        :data-size="size"
        :class="
          cn(buttonVariants({ variant, size }), props.class, 'flex-1  relative')
        "
        :while-press="sGestures.press.whilePress"
        :transition="sTransitions.spring.solid"
      >
        <AnimatePresence mode="popLayout" :initial="false">
          <motion.span
            layout
            :key="isConfirming ? 'confirming' : 'idle'"
            v-bind="sVariants.fadeIn"
            :transition="sTransitions.spring.solid"
            class="whitespace-nowrap"
          >
            <template v-if="isConfirming">
              <component :is="confirmText" />
            </template>
            <template v-else>
              <slot />
            </template>
          </motion.span>
        </AnimatePresence>
      </motion.button>
      <AnimatePresence mode="popLayout" :initial="false">
        <motion.button
          v-if="isConfirming"
          layout
          v-bind="sVariants.fadeIn"
          :while-press="sGestures.press.whilePress"
          :transition="sTransitions.spring.solid"
          key="cancel-btn"
          @click.stop="isConfirming = false"
          data-slot="button"
          data-variant="icon"
          variant="outline"
          :data-size="size"
          :class="cn(buttonVariants({ variant: 'outline', size }), props.class)"
        >
          <X v-if="!cancelIcon" />
          <cancelIcon v-else />
        </motion.button>
      </AnimatePresence>
    </motion.div>
  </LayoutGroup>
</template>
