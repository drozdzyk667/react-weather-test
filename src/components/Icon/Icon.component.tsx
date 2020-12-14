import React from 'react';
import { SvgIconProps } from '@material-ui/core';
import * as muiIcons from './helpers/mui.constants';
import * as customIcons from './customIcons';
/**
 * @param name of the icon
 */

export type IconName = keyof typeof muiIcons & keyof typeof customIcons;

export const Icon: React.FC<SvgIconProps> = React.forwardRef(
  ({ name, ...iconProps }, ref) => {
    const Icon: React.FC =
      muiIcons[name as IconName] || customIcons[name as IconName];
    return <Icon ref={ref} {...iconProps} />;
  }
);
