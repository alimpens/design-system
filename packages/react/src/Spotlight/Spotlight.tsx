/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface SpotlightProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  color?: 'blue' | 'dark-green' | 'green' | 'light-blue' | 'magenta' | 'orange' | 'purple' | 'yellow'
}

export const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(
  ({ children, className, as = 'div', color = 'blue', ...restProps }: SpotlightProps, ref) => {
    const Component = as

    return (
      <Component
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-spotlight', `amsterdam-spotlight--${color}`, className)}
      >
        {children}
      </Component>
    )
  },
)

Spotlight.displayName = 'Spotlight'