/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

type SearchFieldButtonProps = HTMLAttributes<HTMLButtonElement>

// TODO: replace this with IconButton when that's done
// TODO: discuss if IconButton is the right component to replace this
export const SearchFieldButton = forwardRef(
  ({ className, ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('ams-search-field__button', className)}>
      <VisuallyHidden>Zoeken</VisuallyHidden>
    </button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
