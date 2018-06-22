import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ( {todos, toggleTodo } ) => (
  <ul>
    {
      todos && todos.map(todo => 
        (<Todo
          key={todo.id}
          // {...todo}
          text={todo.text}
          completed={todo.completed}
          onClick={() => toggleTodo(todo.id)}
        />)
      )
    }
  </ul>
)

export default TodoList;
