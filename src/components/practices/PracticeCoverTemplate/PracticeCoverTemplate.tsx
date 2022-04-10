import React, { memo, useMemo, useState } from 'react';
import { PracticeCoverProps, PracticeCover } from 'src/components/practices/PracticeCover';
import { FullModal } from 'src/components/FullModal';

export type PracticeCoverTemplateProps = Omit<PracticeCoverProps, 'onClick'> & {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
};

export const PracticeCoverTemplate = memo<PracticeCoverTemplateProps>(({ children, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const { open, close } = useMemo(() => ({ open: () => setOpened(true), close: () => setOpened(false) }), []);

  return (
    <>
      <FullModal visible={opened} onClose={close}>
        {children}
      </FullModal>
      <PracticeCover {...props} onClick={open} />
    </>
  );
});

PracticeCoverTemplate.displayName = 'PracticeCoverTemplate';
