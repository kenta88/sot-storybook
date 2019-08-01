import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from '../components/button/Button';

const withInfoConfig = { info: { inline: true, header: true } };

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const colorOptions = {
  "is-primary": "is-primary",
  "is-link": "is-link",
  "is-info": "is-info",
  "is-success": "is-success",
  "is-warning": "is-warning",
  "is-danger": "is-danger",
}

const sizeOptions = {
  "is-small":"is-small",
  "is-normal": "is-normal",
  "is-medium": "is-medium",
  "is-large": "is-large",
}

stories.add('Default', () => (
  <div style={{ maxWidth: '300px', marginLeft: 32}}>
    <Button
      color={select('color', colorOptions, 'is-primary')}
      size={select('size', sizeOptions, 'is-normal')}
      disabled={boolean('Disabled', false)}
      isLoading={boolean('is loading', false)}
      label={text('Label', 'Hello Storybook')}
    />
  </div>
  ), withInfoConfig);


  