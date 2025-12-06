'use client';

import { ReactNode } from 'react';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import CustomCursor from '@/components/ui/CustomCursor';
import Loader from '@/components/ui/Loader';
import ScrollProgress from '@/components/ui/ScrollProgress';


export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Loader />
      <CustomCursor />
      <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
    </>
  );
}
