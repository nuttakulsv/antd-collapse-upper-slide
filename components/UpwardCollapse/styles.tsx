'use client';

import styled from '@emotion/styled';
import { Collapse as AntCollapse } from 'antd';

export const ReverseCollapseWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  .ant-collapse {
    background: transparent !important;
  }

  .ant-collapse-item {
    position: relative;
    border-bottom: none !important;
    border-top: 1px solid rgba(5, 5, 5, 0.06);
  }

  .ant-collapse-content {
    position: absolute;
    bottom: 100%;
    width: 100%;
    margin-bottom: 1px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;