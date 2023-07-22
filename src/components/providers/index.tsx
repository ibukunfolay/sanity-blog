'use client'

import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children}: {children: ReactNode}) => (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
  
  export default Providers;