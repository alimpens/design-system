/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef(
  ({ className, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} className={clsx('amsterdam-text-input', className)} ref={ref} type="text" />
  ),
)

TextInput.displayName = 'TextInput'
