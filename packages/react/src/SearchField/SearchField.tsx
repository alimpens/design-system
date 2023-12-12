/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { SearchFieldButton } from './SearchFieldButton'
import { SearchFieldInput } from './SearchFieldInput'

export interface SearchFieldProps extends PropsWithChildren<HTMLAttributes<HTMLFormElement>> {}

export interface SearchFieldComponent
  extends ForwardRefExoticComponent<SearchFieldProps & RefAttributes<HTMLFormElement>> {
  Input: typeof SearchFieldInput
  Button: typeof SearchFieldButton
}

export const SearchField = forwardRef(
  ({ children, className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form role="search" {...restProps} ref={ref} className={clsx('amsterdam-search-field', className)}>
        {children}
      </form>
    )
  },
) as SearchFieldComponent

SearchField.Input = SearchFieldInput
SearchField.Button = SearchFieldButton
SearchField.displayName = 'SearchField'
SearchField.Input.displayName = 'SearchField.Input'
SearchField.Button.displayName = 'SearchField.Button'