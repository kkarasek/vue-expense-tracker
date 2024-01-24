<script setup>
import displayAmount from '@/helpers/displayAmount';

defineProps({
  income: {
      type: Number,
      default: 0
  },
  expenses: {
    type: Number,
    default: 0
  }
});

</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">{{ displayAmount(income) }}</p>
    </div>
    <div>
      <h4>Expenses</h4>
      <p id="money-minus" class="money minus">{{ displayAmount(expenses) }}</p>
    </div>
  </div>
</template>@/helpers/displayAmount