/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  onBackground?: 'light' | 'dark'
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  svg?: Function
}

export const IconButton = forwardRef(
  (
    { className, label, onBackground, size = 'level-5', svg = CloseIcon, ...restProps }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-icon-button',
        onBackground === 'light' && 'amsterdam-icon-button--on-background-light',
        onBackground === 'dark' && 'amsterdam-icon-button--on-background-dark',
        className,
      )}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon svg={svg} size={size} square />
    </button>
  ),
)

IconButton.displayName = 'IconButton'