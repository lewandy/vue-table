<script setup lang="ts">
import { onMounted } from 'vue';
import Table from './components/VueTable.vue';
import { useTable } from './composables/useTable';

const { load, state, options } = useTable({
  headers: [
    {
      name: "test1",
      title: "Column title 1"
    },
    {
      name: "test2",
      title: "Column title 2"
    },
    {
      name: "test3",
      title: "Column title 3"
    }
  ]
})

onMounted(() => {
  load(
    [{
      test1: "This is a test 1 1",
      test2: "This is a test 1 2",
      test3: "This is a test 1 3"
    },
    {
      test1: "This is a test 2 1",
      test2: "This is a test 2 2",
      test3: "This is a test 2 3"
    }
    ])
})
</script>

<template>
  <div class="container">
    <Table :options="options" :state="state" />
  </div>
</template>

<style scoped>
.container {
  padding: 1.5em;
}
</style>
