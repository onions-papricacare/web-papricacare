import React from 'react';
import styled from 'styled-components';
import SwitchSelector from "react-switch-selector";

const options=[
  {
    label: 'Option 1',
    value: true
  },
  {
    label: 'Option 2',
    value: 20
  },
  {
    label: 'Option 3',
    value: '30'
  }
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({value}) => value === "bar");


function ToggleSwitch() {
  return (
    <Wrapper>
   <div className="your-required-wrapper" style={{width: 30, height: 300}}>
    <SwitchSelector
       onChange={onChange}
       options={options}
       initialSelectedIndex={initialSelectedIndex}
       backgroundColor={"#353b48"}
       fontColor={"#f5f6fa"}
    />
  </div>
  </Wrapper>
  );
}

export default ToggleSwitch;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 10px 0;
`;