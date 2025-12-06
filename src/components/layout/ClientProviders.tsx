'use client';

import { ReactNode } from 'react';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import CustomCursor from '@/components/ui/CustomCursor';
import Loader from '@/components/ui/Loader';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <CustomCursor />
      <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
    </>
  );
}
