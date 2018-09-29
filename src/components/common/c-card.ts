// @ts-ignore
import styled from 'vue-styled-components'; // TODO: fix this error
import styledVars from '@/style-vars';

const CCard = styled.div`
  box-shadow: ${styledVars.shadows[0]};
  width: 100%;
  padding: .5em;
  border-radius: .25em;
`;

export default CCard;
