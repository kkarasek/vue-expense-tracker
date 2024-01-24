<script setup>
import { ref, computed } from 'vue';

import HeaderComponent from '@/components/HeaderComponent.vue';
import BalanceComponent from './components/BalanceComponent.vue';
import IncomeExpensesComponent from '@/components/IncomeExpensesComponent.vue';
import TransactionListComponent from '@/components/TransactionListComponent.vue';
import AddTransactionComponent from '@/components/AddTransactionComponent.vue';


// no script setup syntax
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


const calculateTransactions = (filterFn) => computed(() => {
  return transactions.value
    .filter(filterFn)
    .reduce((acc, current) => acc + current.amount, 0);
});

const total = calculateTransactions(()=> true);
const income = calculateTransactions((i) => i.amount > 0);
const expenses = calculateTransactions((i) => i.amount < 0);

const handleAddTransaction = (transactionData) => {
  transactions.value.push({
  id: generateUniqueId(),
  ...transactionData
  });
};

const generateUniqueId = () => {
  const lastIndexId = transactions.value[transactions.value.length -1 ].id;
  return lastIndexId + 1;
};
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <BalanceComponent :total="total"/>
    <IncomeExpensesComponent :income="income" :expenses="expenses"/>
    <TransactionListComponent :transactions="transactions"/>
    <AddTransactionComponent @add-transaction="handleAddTransaction"/>
  </div>
</template>