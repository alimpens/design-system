/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon } from '@aram-limpens/design-system-react/src'
import * as Icons from '@aram-limpens/design-system-react-icons'
import { IconGallery, IconItem } from '@storybook/blocks'

export const AmsterdamIconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>

  return (
    <IconGallery>
      {icons.map((key) => (
        <IconItem key={key} name={key.substring(0, key.length - 4)}>
          <Icon svg={Icons[key]} />
        </IconItem>
      ))}
    </IconGallery>
  )
}
