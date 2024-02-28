import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

function TodoApp() {
  const [inputValue,setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue !== '') {
      const newItem = { text: inputValue, completed: false };
      setListItems([...listItems, newItem]);
      setInputValue('');
    }else{
      alert("No se puede agregar tarea sin texto.")
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-400 font-concert'>
      <div className='flex flex-col px-4 w-80 md:w-96'>
          <Header />
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddItem={handleAddItem}
          />
          <List listItems={listItems} setListItems={setListItems}/>
      </div>
    </div>
  )
}

export default TodoApp