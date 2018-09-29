// @ts-ignore
import styled from 'vue-styled-components'; // TODO: fix this error

const options = [0, 1, 2, 3, 4, 5];
const optionsMap = ['0', '.25rem', '.5rem', '1rem', '1.5rem', '3rem'];

const spaceProps = {
  left: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  right: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  top: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  bottom: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  x: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  y: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
  all: {
    type: Number,
    default: 0,
    validator: (val: number) => {
      return options.indexOf(val) !== -1;
    },
  },
};

function getSpacing(spacing: number): string {
  return optionsMap[spacing];
}

const CSpace = styled('div', spaceProps)`
  padding-left: ${ (props) => props.left ? getSpacing(props.left) : props.left ?
    getSpacing(props.x) : getSpacing(props.all)};
  padding-right: ${ (props) => props.right ? getSpacing(props.right) : props.right ?
    getSpacing(props.x) : getSpacing(props.all)};
  padding-top: ${ (props) => props.top ? getSpacing(props.top) : props.top ?
    getSpacing(props.y) : getSpacing(props.all)};
  padding-bottom: ${ (props) => props.bottom ? getSpacing(props.bottom) : props.bottom
    ? getSpacing(props.y) : getSpacing(props.all)};
`;

export default CSpace;
