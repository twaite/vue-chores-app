<template>
  <c-card>
    <c-task-card-title>{{title}}</c-task-card-title>
    <c-space :all=1></c-space>
    <c-space :all=2 v-for="i in (1, 3)" :key="i">
      <c-row>
        <input type="checkbox">
        <label>Task {{i}}</label>
      </c-row>
    </c-space>
  </c-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import styled from 'vue-styled-components';

import CCard from '@/components/common/c-card';
import CRow from '@/components/common/c-row';
import CSpace from '@/components/common/c-space';

const CTaskCardTitle = styled.h3`
  margin: 0;
`;

@Component({
  components: {
    CCard,
    CTaskCardTitle,
    CRow,
    CSpace,
  },
  props: {
    title: String,
  },
})
export default class CTaskCard extends Vue {}
</script>
