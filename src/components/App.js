import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = () => {
    // state = {resource:'posts'}
    const [resource, setResource] = useState('posts');
    return (
        <div>
            <button onClick={()=> setResource('posts')}>posts</button>
            <button onClick={()=> setResource('todos')}>todos</button>
            <ResourceList resource={resource}/>
        </div>
    )
}

export default App;
