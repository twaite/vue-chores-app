<template>
  <CApp id="app">
    <transition name="backdrop">
      <c-backdrop v-if="showBackdrop" @click="closeMenu"></c-backdrop>
    </transition>
    <c-header @openMenu="openMenu"></c-header>
    <transition name="menu">
      <c-menu v-if="showMenu" @closeMenu="closeMenu"></c-menu>
    </transition>
    <router-view/>
  </CApp>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import styled from 'vue-styled-components';
  import styleVars from '@/style-vars';
  
  import CHeader from '@/components/common/c-menu';
  import CMenu from '@/components/common/c-menu';

  const CApp = styled.div`
    font-family: 'Montserrat';
    margin: 0;
    color: ${styleVars.grey.dark};

    * {
      box-sizing: border-box;
    }
  `;

  const CBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,.6);
    z-index: 1;
  `;

  @Component({
    components: {
      CApp,
      CHeader,
      CMenu,
      CBackdrop,
    },
  })
  export default class App extends Vue {
    private showMenu: boolean = false;
    private showBackdrop: boolean = false;

    private openMenu(): void {
      this.showMenu = true;
      this.showBackdrop = true;
    }

    private closeMenu(): void {
      this.showMenu = false;
      this.showBackdrop = false;
    }
  }
</script>

<style scoped>
  .menu-enter-active, .menu-leave-active {
    transition: left .2s ease-in;
  }
  .menu-enter, .menu-leave-to {
    left: 80vw;
  }

  .backdrop-enter-active, .backdrop-leave-active {
    transition: opacity .2s ease-in;
  }
  .backdrop-enter, .backdrop-leave-to {
    opacity: 0;
  }
</style>
