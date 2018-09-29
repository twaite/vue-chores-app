<template>
  <CApp id="app">
    <c-header></c-header>
    Hello World
    <router-view/>
  </CApp>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import styled from 'vue-styled-components';
  
  import CHeader from '@/components/common/c-header.vue';

  const CApp = styled.div`
    font-family: 'Montserrat';
    margin: 0;
  `;

  @Component({
    components: {
      CApp,
      CHeader,
    },
  })
  export default class App extends Vue {}
</script>
