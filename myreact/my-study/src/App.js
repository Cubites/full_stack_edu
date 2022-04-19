import React from 'react';
import Todo from './container/Todo';
import Counter from './component/Counter';

class App extends React.Component {
  render() {
    return (
      <>
        <Todo />
        <div className='text-center'>
          <Counter />
        </div>
      </>
    );
  }
}

export default App;
