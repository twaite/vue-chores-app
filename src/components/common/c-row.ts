import styled from 'vue-styled-components';

const rowProps = {
  justify: {
    type: String,
    default: 'left',
    validator: (val: string) => {
      return ['left', 'center', 'right'].indexOf(val) !== -1;
    },
  },
};

const CRow = styled('div', rowProps)`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export default CRow;
