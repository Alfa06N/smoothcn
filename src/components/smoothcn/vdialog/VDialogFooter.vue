<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { DialogClose } from "reka-ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "motion-v";
import { sTransitions } from "@/lib/smoothcn";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    showCloseButton?: boolean;
  }>(),
  {
    showCloseButton: false,
  },
);
</script>

<template>
  <motion.div
    data-slot="dialog-footer"
    :class="
      cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end border-1 border-red-300',
        props.class,
      )
    "
  >
    <slot />
    <DialogClose v-if="showCloseButton" as-child>
      <Button variant="outline"> Close </Button>
    </DialogClose>
  </motion.div>
</template>
