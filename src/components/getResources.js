import {useState, useEffect} from 'react';
import axios from 'axios';

export default ((resource) => {
    const [resources, setResources] = useState([]);
    // state = {resources:[]}
    const getResources = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }
    // componentDidMount(){
    //     this.getResources(this.props.resource);
    // }
    // componentDidUpdate(prePropsVal){
    //     if (prePropsVal.resource !== this.props.resource){
    //         this.getResources(this.props.resource);
    //     }
    // }
    useEffect(() => {
        getResources(resource)
    },[resource]);
    return resources;
})