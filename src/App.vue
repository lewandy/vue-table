<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VueTable from './components/VueTable.vue';
import { VueTableConfiguration } from './types/types';

const data = ref<Array<any>>([]);

const tableOptions: VueTableConfiguration = {
  headers: [
    {
      name: "test1",
      title: "Header 1"
    },
    {
      name: "test2",
      title: "Header 2"
    },
    {
      name: "test3",
      title: "Header 3"
    }
  ]
};

onMounted(() => {
  data.value = [{
    test1: "This is a test 1 1 asda sdasd asdasd as d",
    test2: "This is a test 1 2",
    test3: "This is a test 1 3"
  },
  {
    test1: "This is a test 2 1",
    test2: "This is a test 2 2",
    test3: "This is a test 2 3"
  }
  ]
})
</script>

<template>
  <div class="container">
    <VueTable class="table" :options="tableOptions" :state="data" />
  </div>
</template>

<style>
.container {
  padding: 1.5em;
}

.headerCustom {
  background-color: blue;
}
</style>
