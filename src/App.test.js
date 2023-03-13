import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/src
    /components
    /Header
    Header.js
    Header.scss
    /Search
    Search.js
    Search.scss
    /Category
    Category.js
    Category.scss
    /CharacterCard
    CharacterCard.js
    CharacterCard.scss
    /CharacterDetail
    CharacterDetail.js
    CharacterDetail.scss
    /BackButton
    BackButton.js
    BackButton.scss
  /pages
    /Home
    Home.js
    Home.scss
    /Character
    /[id]
    CharacterDetail.js
    CharacterDetail.scss
    Character.js
    Character.scss
App.js
App.scss
index.js
