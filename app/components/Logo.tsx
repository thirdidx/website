'use client';

import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.replace(window.location.pathname);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full cursor-pointer"
      viewBox="0 0 46 32"
      fill="none"
      onClick={handleClick}
    >
      <path
        d="M14.332 22.524c0-1.084.925-1.957 2.027-1.957s1.99.873 1.99 1.957c0 1.083-.888 1.956-1.99 1.956-1.102 0-2.027-.873-2.027-1.956Zm6.753 0c0-1.084.887-1.957 1.989-1.957s2.026.873 2.026 1.957c0 1.083-.924 1.956-2.026 1.956-1.102 0-1.99-.873-1.99-1.956Zm6.722 0c0-1.084.925-1.957 2.027-1.957 1.101 0 1.989.873 1.989 1.957 0 1.083-.888 1.956-1.99 1.956-1.101 0-2.026-.873-2.026-1.956ZM40.084 29.564h3.032V2.436h-3.032V0H46v32h-5.916v-2.436ZM6.064 2.436H3.032v27.128h3.032V32H.148V0h5.916v2.436Z"
        fill="currentColor"
      />
    </svg>
  );
}
