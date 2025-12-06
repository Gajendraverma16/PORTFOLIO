'use client';

import { ReactNode } from 'react';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import CustomCursor from '@/components/ui/CustomCursor';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
    </>
  );
}
