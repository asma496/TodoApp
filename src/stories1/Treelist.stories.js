import React from 'react'
import Todos from '../components/Todos'
export default{
    title:'treelist',
    componenet:Todos
}
 export const list1 = () => <Todos todolist={[]} />
 export const list2 = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2}]} />
 export const list3 = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2}]} />
