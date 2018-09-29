// @ts-ignore
import styled from 'vue-styled-components'; //TODO: fix this error

// TODO: define props

const rowProps = {
  justify: {
    type: String,
    default: 'left',
    validator: (val : string) => {
      return ['left', 'center', 'right'].indexOf(val) !== -1;
    }
  }
}

const CCol = styled('div', rowProps)`
  display: flex;
  flex-direction: column;
`;

export default CCol;
