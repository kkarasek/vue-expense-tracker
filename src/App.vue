<script setup>
import {ref} from 'vue';

import HeaderComponent from '@/components/HeaderComponent.vue';
import BalanceComponent from './components/BalanceComponent.vue';
import IncomeExpenseComponent from '@/components/IncomeExpenseComponent.vue';
import TransactionListComponent from '@/components/TransactionListComponent.vue';
import AddTransactionComponent from '@/components/AddTransactionComponent.vue';

// export default {
//   components: {
//     HeaderComponent,
//     BalanceComponent,
//     IncomeExpenseComponent,
//     TransactionListComponent,
//     AddTransactionComponent
//   }
// };

const transactions = ref([
  {id: 1, text: 'Flower', amount: -19.99},
  {id: 2, text: 'Salary', amount: 297.91},
  {id: 3, text: 'Book', amount: -10},
  {id: 4, text: 'Camera', amount: 150}
]);
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <BalanceComponent/>
    <IncomeExpenseComponent/>
    <TransactionListComponent :transactions="transactions"/>
    <AddTransactionComponent/>
  </div>
</template>