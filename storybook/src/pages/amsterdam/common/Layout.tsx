/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageFooter, SkipLink } from '@aram-limpens/design-system-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'
import { Default as PageFooterStory } from '../../../components/PageFooter/PageFooter.stories'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <AppHeader />
    {children}
    <PageFooter>{PageFooterStory.args?.children}</PageFooter>
  </>
)
