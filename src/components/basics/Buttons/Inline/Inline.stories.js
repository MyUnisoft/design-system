import React from 'react';
import Inline from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Inline',
  component: Inline
};

const Template = (args) => <Inline {...args} />;

export const Generic = Template.bind({});
Generic.args = {
  buttons: [
    {
      _type: 'string',
      text: 'Cancel',
      variant: 'outlined',
      onClick: action('Cancel action'),
      size: 'medium',
      color: 'error'
    },
    {
      _type: 'string',
      text: 'Submit',
      onClick: action('Submit action'),
      size: 'medium'
    },
    {
      _type: 'string',
      text: 'Disabled button',
      size: 'medium',
      disabled: true
    },
    {
      _type: 'string',
      text: 'Warning button',
      size: 'medium',
      color: 'secondary'
    }
  ]
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  buttons: [
    {
      _type: 'icon',
      iconName: 'icon-calculator',
      iconSize: 28,
      titleInfoBulle: 'example additional information on hover',
      onClick: action('on click calculator icon')
    },
    {
      _type: 'icon',
      iconName: 'icon-print',
      iconSize: 28,
      color: 'secondary',
      titleInfoBulle: '...',
      onClick: action('on click print icon')
    },
    {
      _type: 'icon',
      iconName: 'icon-list',
      iconSize: 28,
      color: 'error',
      titleInfoBulle: 'custom message',
      onClick: action('on click list icon')
    },
    {
      _type: 'icon',
      iconName: 'icon-parametres',
      iconSize: 28,
      onClick: action('on click settings icon'),
      disabled: true
    }
  ]
};

export const WithDropdown = Template.bind({});
const dropdownOptions = [
  {
    value: 1,
    label: 'Item 1'
  },
  {
    value: 2,
    label: 'Item 2'
  },
  {
    value: 3,
    label: 'Item 3'
  },
  {
    value: 4,
    label: 'Item 4'
  }
];
WithDropdown.args = {
  buttons: [
    {
      _type: 'dropdown',
      options: dropdownOptions,
      onClick: action('on click dropdown button, the icon may be changed'),
      iconName: 'icon-options',
      iconSize: 28,
      iconColor: 'black'
    }
  ]
};

export const WithCustomComponent = Template.bind({});
WithCustomComponent.args = {
  buttons: [
    {
      _type: 'component',
      color: 'primary',
      component: <div>This is a custom component button</div>
    }
  ]
};

export const WithLink = Template.bind({});
WithLink.args = {
  buttons: [
    {
      _type: 'icon-link',
      titleInfoBulle: 'Redirection to storybook documentation',
      iconName: 'icon-link',
      iconSize: 28,
      href: 'https://storybook.js.org/'
    }
  ]
};