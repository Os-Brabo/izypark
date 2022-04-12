import { ReactNode } from 'react';

export type ToasterProviderProps = {
  children: ReactNode;
};

export type ToasterContextData = {
  message: string;
  duration: number;
  visible: boolean;
  showToaster: (message: string, duration?: number) => void;
  onDismiss: () => void;
};
