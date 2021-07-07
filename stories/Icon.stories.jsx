import React from 'react';

import Icon from './Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
};

const Template = (args) => <Icon fill={args.iconColor} />;

export const ColoredIcon = Template.bind({});
ColoredIcon.argTypes = {
  iconColor: {
    control: { type: 'color' },
    description: 'Icon whose color can be set',
    table: {
      defaultValue: {
        detail: 'Choose hexcolor for the icon',
        summary: '#206058',
      },
    },
  },
};

ColoredIcon.args = {
  iconColor: '#206058',
};
