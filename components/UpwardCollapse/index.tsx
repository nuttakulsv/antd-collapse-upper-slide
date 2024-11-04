'use client';

import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { ReverseCollapseWrapper } from './styles';

interface UpwardCollapseProps extends CollapseProps {
  className?: string;
}

export const UpwardCollapse = ({ className, ...props }: UpwardCollapseProps) => {
  const { token } = theme.useToken();

  return (
    <ReverseCollapseWrapper className={className}>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined
            rotate={isActive ? 270 : 0}
            style={{ color: token.colorPrimary }}
          />
        )}
        {...props}
      />
    </ReverseCollapseWrapper>
  );
};