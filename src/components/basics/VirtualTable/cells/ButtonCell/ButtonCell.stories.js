
import React from 'react';

import { withKnobs, boolean } from '@storybook/addon-docs';
import { action } from '@storybook/addon-actions';

import VirtualTableContext from '../../context';
import ButtonCell from './index';

const config = {
  columns: [
    {
      header: 'Header Name',
      key: 'button',
      handleClick: action('click action'),
      label: "Envoyer",
      isDisabled: boolean('is Disabled?', false),
      showCellButton: true
    }
  ]
};

export default {
  title: 'Components/VirtualTable',
  component: ButtonCell,
  decorators: [withKnobs]
};

const Template = (args) => (
  <VirtualTableContext.Provider value={{ config }}>
    <ButtonCell {...args} />
  </VirtualTableContext.Provider>
);


export const ButtonCellVT = Template.bind({});
ButtonCellVT.args = {
  columnIndex: 0
};