<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "reka-ui";
import { DialogRoot, useForwardPropsEmits } from "reka-ui";
import { LayoutGroup, Motion } from "motion-v";
import { sTransitions, sVariants } from "@/lib/smoothcn";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>
<!-- INCOMPLETE -->
<template>
  <LayoutGroup>
    <DialogRoot v-slot="slotProps" data-slot="dialog" v-bind="forwarded">
      <slot v-bind="slotProps" />
    </DialogRoot>
  </LayoutGroup>
</template>
