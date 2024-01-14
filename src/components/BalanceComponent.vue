<script setup>
import displayBalanceAmount from '@/helpers/displayBalanceAmount';

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
  <h1 id="balance">{{ displayBalanceAmount(total) }}</h1>
</template>