<script setup>
import displayAmount from '@/helpers/displayAmount';

defineProps({
  transactions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['deleteTransaction']);

const deleteTransaction = (id) => {
  emit('deleteTransaction', id);
};

</script>

<template>
  <h3>History</h3>
  <ul v-if="transactions.length" id="list" class="list">
    <li 
      v-for="transaction in transactions" 
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
    {{ transaction.text }}<span>{{ displayAmount(transaction.amount) }}</span>
    <button type="button" class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
  <div v-else>
    No previous transactions
  </div>
</template> 



<!-- COMPOSITION API w/ explicit setup() hook -->

<!-- <script>
import displayTransactionAmount from '@/helpers/displayTransactionAmount';

export default {
  props: {
    transactions: {
      type: Array,
      default: () => {}
    }
  },
  setup() {
    // const transactions = [
    //   {id: 1, text: 'Flower', amount: -19.99},
    //   {id: 2, text: 'Salary', amount: 297.91},
    //   {id: 3, text: 'Book', amount: -10},
    //   {id: 4, text: 'Camera', amount: 150}
    // ];

    return {
      // transactions,
      displayTransactionAmount
    };
  }
};
</script> -->


<!-- OPTIONS API -->

<!-- <script>
import displayTransactionAmount from '@/helpers/displayTransactionAmount';

export default {
//  data() {
//     return {
//       transactions: [
//         {id: 1, text: 'Flower', amount: -19.99},
//         {id: 2, text: 'Salary', amount: 297.91},
//         {id: 3, text: 'Book', amount: -10},
//         {id: 4, text: 'Camera', amount: 150}
//       ]
//     };
//   },
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  methods: {
    displayTransactionAmount(amount) {
      return displayTransactionAmount(amount);
    }
  },
};
</script> -->