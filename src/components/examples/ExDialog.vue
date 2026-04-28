<script setup lang="ts">
import { VButton } from "../smoothcn/vbutton";
import {
  VDialog,
  VDialogClose,
  VDialogContent,
  VDialogDescription,
  VDialogFooter,
  VDialogHeader,
  VDialogOverlay,
  VDialogScrollContent,
  VDialogTitle,
  VDialogTrigger,
} from "../smoothcn/vdialog";
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";
import { sVariants, sTransitions } from "@/lib/smoothcn";

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
  <VDialog>
    <VDialogTrigger as-child>
      <VButton variant="outline"> Open Dialog </VButton>
    </VDialogTrigger>
    <VDialogContent>
      <VDialogHeader>
        <VDialogTitle>Hello</VDialogTitle>
        <VDialogDescription>This is a dialog</VDialogDescription>
      </VDialogHeader>

      <motion.div
        layout
        :transition="sTransitions.spring.solid"
        class="border-1 border-green-300 relative h-fit rounded-sm p-1 gap-2 flex flex-col"
      >
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
      </motion.div>

      <VDialogFooter class="flex justify-center items-center">
        <VButton variant="outline" @click="decrease" class="flex-1">
          Remove child
        </VButton>

        <VButton @click="increase" class="flex-1"> Add child </VButton>
      </VDialogFooter>
    </VDialogContent>
  </VDialog>
</template>
