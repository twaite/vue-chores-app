<template>
  <c-styled-header>
    <c-styled-app-title>My Chores</c-styled-app-title>
    <c-header-icon-wrapper>
      <menu-icon></menu-icon>
    </c-header-icon-wrapper>
  </c-styled-header>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import styled from 'vue-styled-components';

  import MenuIcon from 'vue-material-design-icons/Menu';

  const CStyledHeader = styled.header`
    background-color: lightseagreen;
    padding: 0.5rem;
    color: white;
  `;

  const CStyledAppTitle = styled.h1`
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
  `;

  const CHeaderIconWrapper = styled.div`
    position: absolute;
    right: .5rem;
    top: 0;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  @Component({
    components: {
      CHeaderIconWrapper,
      CStyledAppTitle,
      CStyledHeader,
      MenuIcon,
    },
  })
  export default class CHeader extends Vue {}
</script>