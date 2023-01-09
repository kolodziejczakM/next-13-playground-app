import React, { ReactNode } from 'react';

export type SubmitButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <div>
      {children}
    </div>
  );
}
