<template>
  <c-menu-panel class="menu-panel">
    <c-row justify="center">
      <h4>My Chores</h4>
    </c-row>
    <c-break></c-break>
    <c-space :all=3>
      <c-menu-option :selected=true>My Chores</c-menu-option>
      <c-menu-option>New Chore</c-menu-option>
      <c-menu-option>Logout</c-menu-option>
    </c-space>
  </c-menu-panel>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import styled from 'vue-styled-components';
  import styleVars from '@/style-vars';

  import CRow from '@/components/common/c-row';
  import CSpace from '@/components/common/c-space';
  import CBreak from '@/components/common/c-break';

  const CMenuPanel = styled.div`
    height: 100%;
    width: 80vw;
    top: 0;
    left: 20vw;
    position: absolute;
    background: white;
    box-shadow: ${styleVars.shadows[1]};
    z-index: 1;
  `;

  const CMenuOptionProps = {
    selected: Boolean,
  };

  // TODO stylevars scope
  const CMenuOption = styled('a', CMenuOptionProps)`
    padding: .5rem;
    width: 100%;
    text-align: center;
    display: block;
    background: ${props => props.selected ? '#a8f0ec' : ''};
    border-radius: 1rem;
  `

  @Component({
    components: {
      CMenuPanel,
      CRow,
      CBreak,
      CSpace,
      CMenuOption,
    },
  })
  export default class CMenu extends Vue {}
</script>
