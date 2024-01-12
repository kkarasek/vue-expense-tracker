<script setup>
import displayTransactionAmount from '@/helpers/displayTransactionAmount';

defineProps({
  transactions: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li 
      v-for="transaction in transactions" 
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
    {{ transaction.text }}<span>{{ displayTransactionAmount(transaction.amount) }}</span>
    <button type="button" class="delete-btn">x</button>
    </li>
  </ul>
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