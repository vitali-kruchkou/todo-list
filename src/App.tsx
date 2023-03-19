import React from 'react';

import ButtonComponents from './components/atoms/Button';
import IconButtonComponents from './components/atoms/IconButton';

import TextFieldComponents from './components/atoms/TextField';
import Text from './components/atoms/Typography/Paragraph';
import TitleComponent from './components/atoms/Typography/Title';
import SearchBar from './components/molecules/search-bar';

import { PlusOutlined } from '@ant-design/icons';
import ListItem from './components/molecules/list-item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent>123</TitleComponent>
        <Text>321</Text>
        <TextFieldComponents placeholder="Example" />
        <ButtonComponents>{123}</ButtonComponents>
        <IconButtonComponents icon={<PlusOutlined />} />
        <SearchBar />
        <ListItem />
      </header>
    </div>
  );
}

export default App;
