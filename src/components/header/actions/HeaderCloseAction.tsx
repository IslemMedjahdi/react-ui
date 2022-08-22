import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import {
  HeaderLeftActionIcon,
  HeaderLeftActionIconProps,
} from './HeaderLeftActionIcon'

export type HeaderCloseActionProps = Omit<HeaderLeftActionIconProps, 'icon'> & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
}

export function HeaderCloseAction({
  icon = IconClose,
  label,
  ...props
}: HeaderCloseActionProps): ReactElement {
  const internationalization = useInternationalization()

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label || internationalization.translate('shared.button.close')}
      {...props}
    />
  )
}