import React, { useState,useEffect } from 'react'
import ListElements from './ListElements'

function List({listItems, setListItems}) {

  const [filteredList, setFilteredList] = useState(listItems)
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setFilteredList(listItems);
  }, [listItems]);

  const filterList = (mostrarTodo)=>{
    mostrarTodo 
    ? setFilteredList(listItems) 
    : setFilteredList(listItems.filter((item) => item.completed===false))
    setActiveFilter(mostrarTodo ? 'all' : 'incomplete');
  }
  const showCompleted = ()=>{
    setFilteredList(listItems.filter((items)=> items.completed===true))
    setActiveFilter('completed');
  }
  const eraseCompleted = ()=>{
    setListItems(items => items.filter(item => !item.completed))
  }
  const showTaskLeft = ()=>{
    return listItems.filter((item) => !item.completed).length;
  }
  return (
    <div>
      <ul className='min-h-80 bg-gray-300 rounded-xl shadow-md shadow-black dark:shadow-slate-400'>
          <ListElements filteredList={filteredList} listItems={listItems} setListItems={setListItems}/>
      </ul>
      <div className='grid grid-cols-2 sm:flex items-center gap-5 p-2 mt-4 bg-gray-300 rounded-xl text-gray-600 text-xs text-center shadow-md shadow-black dark:shadow-slate-400'>
        <p>{showTaskLeft()} por realizar</p>
        <div className='order-2 col-span-2 sm:order-none flex gap-5 p-2 justify-between '>
          <p className={`hover:text-blue-500 hover:cursor-pointer ${activeFilter === 'all' ? 'text-blue-500' : ''}`} onClick={()=>filterList(true)}>Todos</p>
          <p className={`hover:text-blue-500 hover:cursor-pointer ${activeFilter === 'incomplete' ? 'text-blue-500' : ''}`} onClick={()=>filterList(false)}>Incompletos</p>
          <p className={`hover:text-blue-500 hover:cursor-pointer ${activeFilter === 'completed' ? 'text-blue-500' : ''}`} onClick={showCompleted}>Completos</p>
        </div>
        <p className='hover:text-blue-500 hover:cursor-pointer' onClick={eraseCompleted}>Eliminar completos</p>
      </div>
    </div>
  )
}

export default List