<template>
  <CApp id="app">
    Hello World
    <router-view/>
  </CApp>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import styled from 'vue-styled-components';

  const CApp = styled.h1`
    font-family: 'Montserrat'
  `;

  @Component({
    components: {
      CApp,
    },
  })
  export default class App extends Vue {}
</script>