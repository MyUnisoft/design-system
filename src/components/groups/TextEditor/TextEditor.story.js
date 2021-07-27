import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-docs';
import { withInfo } from '@storybook/addon-info';
import TextEditor from '';

const stories = storiesOf('TextEditor', module);

stories.addDecorator(withInfo({ inline: true, header: false }));

stories.add('Default', () => {
  const isLoading = boolean('Is loading?', false);
  const hideOptions = boolean('Hide options?', false);
  const handleSubmit = action('SUBMIT CHANGES');

  return (
    <div style={{ width: 600 }}>
      <TextEditor
        isLoading={isLoading}
        hideOptions={hideOptions}
        onSubmit={handleSubmit}
        comment="Control loading with knobs"
      />
    </div>
  );
});
