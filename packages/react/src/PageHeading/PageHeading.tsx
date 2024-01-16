/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface PageHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  /**
   * De kleur van de titel
   * Gebruik deze property om de titel in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
}

export const PageHeading = forwardRef(
  ({ children, className, inverseColor, ...restProps }: PageHeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h1
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-page-heading', inverseColor && 'amsterdam-page-heading--inverse-color', className)}
    >
      {children}
    </h1>
  ),
)

PageHeading.displayName = 'PageHeading'
