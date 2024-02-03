<script setup>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

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

const toast = useToast();

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

const generateId = () => {
  if(!transactions.value.length) {
    return 1;
  };
  const lastIndexId = transactions.value[transactions.value.length - 1].id;
  return lastIndexId + 1;
};

const handleAddTransaction = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    ...transactionData
  });
  toast.success('Transaction Added!', { timeout: 2000 });

  saveTransactionsToLocalStorage();
};

const handleDeleteTransaction = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage();
};

const handleSayHello = (name) => {
  alert(`Hello 👋 from AddTransaction component, ${name}`);
};

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  console.log(savedTransactions);

  if(savedTransactions) {
    transactions.value = savedTransactions;
  }
});
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <BalanceComponent :total="total"/>
    <IncomeExpensesComponent :income="income" :expenses="expenses"/>
    <TransactionListComponent :transactions="transactions" @delete-transaction="handleDeleteTransaction"/>
    <AddTransactionComponent @add-transaction="handleAddTransaction" @say-hello="handleSayHello"/>
  </div>
</template>