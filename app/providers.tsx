'use client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: 'indigo',
        fontFamily:
          'Inter, "Helvetica Neue", "Segoe UI", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
        defaultGradient: { from: '#5b8def', to: '#36cfc9', deg: 135 },
        headings: {
          fontWeight: '700'
        }
      }}
    >
      <Notifications position="top-right" zIndex={4000} />
      {children}
    </MantineProvider>
  );
}
