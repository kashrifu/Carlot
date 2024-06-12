import React from 'react';
import ReactDOM from 'react-dom';

console.log('index.web.tsx is being executed');

const App = () => {
  console.log('Rendering App component');
  return <h1>Hello, World!</h1>;
};

const rootTag = document.getElementById('app-root');

if (!rootTag) {
  console.error('The root element with ID "app-root" was not found.');
} else {
  console.log('The root element was found successfully.', rootTag);
  ReactDOM.render(<App />, rootTag);
}
