import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import { ComponentWrapper } from './index.styled';

const SwitchStyled = styled(Switch)`
  &.ant-switch-checked {
    background-color: #0f213c;

    .ant-switch-handle {
      left: calc(100% - 20px);
      :before {
        background: #01c8f8;
      }
    }
  }

  .ant-switch-handle {
    width: 30px;
    height: 30px;
    top: -5px;
    left: -2px;

    :before {
      border-radius: 50%;
      background: #919191;
    }
  }
`;

const TestComponent: React.FC = () => {
  return (
    <ComponentWrapper>
      <SwitchStyled />
    </ComponentWrapper>
  );
};

export default TestComponent;
