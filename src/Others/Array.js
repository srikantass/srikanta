import React, {useState} from 'react';


function Arrays(){  
      
    const [items, setItems]= useState([]);
    const addItems = () => {setItems([...items, `Mail ${items.length+1}`]);  
};

return(
    <div className='cont1'>
        <h1>Array State Example</h1>
        <button className='btn' onClick={addItems}>Add ITEM</button>
        <ul className='itm1'>            
            {items.map((items)=> (
            <li>{items}</li>
            ))}
        </ul>
    </div>
)
}

export default Arrays;