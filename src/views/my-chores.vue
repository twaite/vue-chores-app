<template>
  <c-space :all=3>
    <c-task-card title="Today's Tasks"></c-task-card>
  </c-space>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CSpace from '@/components/common/c-space';
import CTaskCard from '@/components/c-task-card.vue';
import CCol from '@/components/common/c-col';

@Component({
  components: {
    CSpace,
    CCol,
    CTaskCard,
  },
})
export default class MyChores extends Vue {}
</script>
