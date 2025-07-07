"use client"
// Logo component that adapts to light/dark mode
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image 
        src="/loho-horizontal.svg" 
        alt="Logo"
        width="124"
        height="32"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Image 
      src={isDark ? "/loho-horizontal-white.svg" : "/loho-horizontal.svg"}
      alt="Logo"
      width="124"
      height="32"
    />
  );
}
