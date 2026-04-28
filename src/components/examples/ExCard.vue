<script setup lang="ts">
import { Button } from "../ui/button";
import {
  VCard,
  VCardAction,
  VCardContent,
  VCardDescription,
  VCardFooter,
  VCardHeader,
  VCardTitle,
} from "../smoothcn/vcard";
import { ref } from "vue";
import { motion, AnimatePresence, LayoutGroup } from "motion-v";
import { sVariants } from "@/lib/smoothcn/variants";

const count = ref(0);

const items = ref<number[]>([]);

const increase = () => {
  if (count.value >= 8) return;
  count.value++;
  items.value.push(count.value);
};
const decrease = () => {
  if (count.value <= 0) return;
  count.value--;
  if (items.value.length > 0) {
    items.value.pop();
  }
};
</script>

<template>
  <LayoutGroup>
    <VCard
      :disable-layout-group="true"
      class="w-full max-w-xl mt-10 overflow-hidden"
    >
      <VCardHeader>
        <VCardTitle>Animated Layout Card</VCardTitle>
        <VCardDescription>Smoothly synchronized!</VCardDescription>
        <VCardAction> Hello </VCardAction>
      </VCardHeader>

      <VCardContent class="relative flex flex-col gap-2">
        <AnimatePresence mode="popLayout">
          <motion.div
            v-for="id in items"
            :key="id"
            layout
            v-bind="sVariants.fadeSlideUp"
            class="p-3 bg-secondary rounded-md border text-primary"
          >
            Child Item #{{ id }}
          </motion.div>

          <motion.div
            v-if="items.length === 0"
            layout
            v-bind="sVariants.fadeIn"
            class=""
          >
            <p class="text-muted-foreground text-sm">No children added yet</p>
          </motion.div>
        </AnimatePresence>
      </VCardContent>

      <VCardFooter class="flex flex-row gap-2">
        <p>This is the footer</p>
      </VCardFooter>
    </VCard>

    <!-- <VCard :disable-layout-group="true" class="w-full max-w-xl overflow-hidden">
      <VCardHeader>
        <VCardTitle>Animated Layout Card</VCardTitle>
        <VCardDescription>Smoothly synchronized!</VCardDescription>
        <VCardAction> Hello </VCardAction>
      </VCardHeader>

      <VCardContent class="relative flex flex-col gap-2">
        <AnimatePresence mode="popLayout">
          <motion.div
            v-for="id in items"
            :key="id"
            layout
            v-bind="sVariants.fadeSlideUp"
            class="p-3 bg-secondary rounded-md border text-primary"
          >
            Child Item #{{ id }}
          </motion.div>

          <motion.div
            v-if="items.length === 0"
            layout
            v-bind="sVariants.fadeIn"
            class=""
          >
            <p class="text-muted-foreground text-sm">No children added yet</p>
          </motion.div>
        </AnimatePresence>
      </VCardContent>

      <VCardFooter class="flex flex-row gap-2">
        <p>This is the footer</p>
      </VCardFooter>
    </VCard> -->
  </LayoutGroup>

  <div
    class="fixed bottom-0 w-full flex flex-row gap-2 py-5 px-10 border-t-1 border-t-gray-400 rounded-t-md index-10 bg-background"
  >
    <Button
      variant="outline"
      class="flex-1 text-primary"
      @click="decrease"
      :disabled="count === 0"
      >Remove child</Button
    >
    <Button class="flex-1" @click="increase" :disabled="count === 8"
      >Add child</Button
    >
  </div>
</template>
