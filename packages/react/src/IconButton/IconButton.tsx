/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

export type IconButtonProps = {
  label: string
  onBackground?: 'light' | 'dark'
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  svg?: Function
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = forwardRef(
  ({ className, label, onBackground, ...restProps }: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-icon-button',
        onBackground === 'light' && 'ams-icon-button--on-background-light',
        onBackground === 'dark' && 'ams-icon-button--on-background-dark',
        className,
      )}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  ),
)

IconButton.displayName = 'IconButton'
