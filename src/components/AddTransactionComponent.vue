<script setup>
import {ref} from 'vue';
import { useToast } from "vue-toastification";

const toast = useToast();

const emit = defineEmits(['addTransaction']);

const text = ref('');
const amount = ref('');

const handleSubmit= () => {
  if(! text.value || !amount.value){
    toast.error('You have to fill both fields!');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: amount.value
    // parseFloat()
  };

  emit('addTransaction', transactionData);

  text.value = '';
  amount.value = '';
};
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input id="text" v-model="text" type="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input id="amount" v-model="amount" type="number"  placeholder="Enter amount..." />
    </div>
    <button class="btn" type="submit">Add transaction</button>
  </form>
</template>