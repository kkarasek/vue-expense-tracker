<script setup>
import displayAmount from '@/helpers/displayAmount';

// const props = defineProps({}) -> then access via props.total or just {{total}} in template syntax
defineProps({
  total: {
    type: Number,
    default: 0
  },
});
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ displayAmount(total) }}</h1>
</template>@/helpers/displayAmount