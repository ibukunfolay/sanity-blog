'use client'

import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Home: FC = () => {
  const router =useRouter()
  const { data, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  if (!data) {
    router.push('/auth/login')
  }

  return (
    <div>
      <p>welcome</p>
      <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
    </div>
  );
};

export default Home;