"use client"
// Logo component that adapts to light/dark mode
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

  /**
   * Logo component that adapts to light/dark mode
   *
   * This component will render a placeholder/default logo during SSR, and
   * will render the correct logo for the current theme once the component
   * has mounted. This is due to the fact that the `useTheme` hook only returns
   * a valid theme on the client, and not on the server.
   */
export const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or default logo during SSR
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
