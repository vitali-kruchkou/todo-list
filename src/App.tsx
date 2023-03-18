import React from 'react';

import ButtonComponents from './components/atoms/Button';
import IconButtonComponents from './components/atoms/IconButton';

import TextFieldComponents from './components/atoms/TextField';
import ParagraphComponent from './components/atoms/Typography/Paragraph';
import TitleComponent from './components/atoms/Typography/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent>123</TitleComponent>
        <ParagraphComponent>321</ParagraphComponent>
        <TextFieldComponents placeholder="Example" />
        <ButtonComponents>{123}</ButtonComponents>
        <IconButtonComponents />
      </header>
    </div>
  );
}

export default App;
