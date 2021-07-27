import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { CommentBox } from '../';
import AbstractDialog from '../../Dialogs/AbstractDialog';

const stories = storiesOf('CommentBox', module);

stories.addDecorator(withInfo({ inline: true, header: false }));
stories.addDecorator(story => (
  <>
    <p>Control the dialog with Knobs 🤔 🚀</p>
    {story()}
  </>
));

stories.add('Default', () => {
  const comments = [
    {
      initials: 'ID',
      avatarImgSrc: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Igor Doe',
      date: '2019-03-21 22:59',
      body: '<p><strong>This is a nice appp</strong></p><p><span style="color: red;"> I\'m a red comment</span></p>',
      history: [
        {
          initials: 'ID',
          avatarImgSrc: 'https://randomuser.me/api/portraits/men/23.jpg',
          name: 'Ivan Cole',
          date: '2019-03-21 22:59',
          body: '<p>NOT GOOOD</p>'
        },
        {
          initials: 'ID',
          avatarImgSrc: 'https://randomuser.me/api/portraits/women/40.jpg',
          name: 'Anna Fischer',
          date: '2019-03-21 22:59',
          body: '<p>B*tch better have my money</p>'
        }
      ]
    },
    {
      initials: 'ID',
      avatarImgSrc: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'Moe',
      date: '2019-03-21 22:59',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>',
      history: [
        {
          initials: 'ID',
          avatarImgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
          name: 'James Patton',
          date: '2019-03-21 22:59',
          body: '<p>Lorem amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>'
        }
      ]
    },
    {
      initials: 'ID',
      avatarImgSrc: 'https://randomuser.me/api/portraits/men/43.jpg',
      name: 'Igor Doe',
      date: '2019-03-21 22:59',
      body: '<p>Pepperoni pizza is da best</p>'
    },
    {
      initials: 'ID',
      avatarImgSrc: 'https://randomuser.me/api/portraits/men/41.jpg',
      name: 'Igor Doe',
      date: '2019-03-21 22:59',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>'
    },
    {
      initials: 'ID',
      avatarImgSrc: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: 'Igor Doe',
      date: '2019-03-21 22:59',
      body: '<p>This is a nice appp and dobly so</p>'
    }
  ];

  const submitAction = action('Submit');
  const editAction = action('Edit');

  return (
    <AbstractDialog
      dialogs={[
        {
          body: {
            Component: CommentBox,
            props: {
              onSubmit: data => new Promise(res => setTimeout(() => res(submitAction(data)), 1500)),
              onEdit: data => new Promise(res => setTimeout(() => res(editAction(data)), 1500)),
              getComments: () => new Promise(res => setTimeout(() => res(comments), 3000))
            }
          }
        }
      ]}
      closeDialog={action('Close dialog')}
    />
  );
});
