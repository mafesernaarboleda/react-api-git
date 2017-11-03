import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

if (typeof window === 'object') {
  window.__storybook_stories__ = require('@storybook/react').getStorybook();
}