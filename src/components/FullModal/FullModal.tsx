import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { FullModalOrigin, Props as FullModalOriginProps } from 'src/components/FullModal/FullModalOrigin';

export type Props = FullModalOriginProps & {
  visible: boolean;
};

export const FullModal = memo<Props>(({ children, visible, ...props }) => {
  if (!visible) return null;

  return createPortal(
    <FullModalOrigin visible={visible} {...props}>
      {children}
    </FullModalOrigin>,
    document?.body
  );
});

FullModal.displayName = 'FullModal';
