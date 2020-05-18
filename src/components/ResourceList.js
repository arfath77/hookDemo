import React from 'react';
import getResources from './getResources';


const ResourceList = ({resource}) => {
    const resources = getResources(resource);

    const renderResources = () => {
        return (
            <div>
                <ul>{resources.map(rcd => 
                        <li key={rcd.id}>{rcd.title}</li>
                    )}
                </ul>
            </div>
        )
    }
    return (
        <div>
            {renderResources()}
        </div>
    )
}

export default ResourceList;