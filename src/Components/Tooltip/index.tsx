import React, { memo, ReactElement } from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default memo(Tooltip);
