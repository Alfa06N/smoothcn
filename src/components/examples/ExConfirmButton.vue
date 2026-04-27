<script lang="ts" setup>
import "vue-sonner/style.css";
import { h } from "vue";
import { VConfirmButton } from "../smoothcn/vconfirm-button";
import VButton from "../smoothcn/vbutton/VButton.vue";
import { Toaster } from "vue-sonner";
import { toast } from "vue-sonner";

const customMsg = h("p", {}, "Hey bro wtf");
const handleClick = () => {
  toast("Confirmation triggered", {
    description: "You have to confirm",
    duration: 3000,
  });
};
const handleConfirm = () => {
  toast.success("Confirmated", {
    description: "You have confirmed the action",
    duration: 3000,
  });
};
</script>

<template>
  <Toaster />
  <div
    class="flex justify-center items-center gap-2 w-sm border-1 border-gray-600 rounded-md p-2 bg-background text-primary"
  >
    <div class="flex-1 flex">
      <VButton variant="outline" class="flex-1">I do nothing</VButton>
    </div>

    <VConfirmButton
      container-class="flex-1 "
      variant="destructive"
      :confirm-text="customMsg"
      @click="handleClick"
      @confirm="handleConfirm"
      >Hello, click me!</VConfirmButton
    >
  </div>
</template>
