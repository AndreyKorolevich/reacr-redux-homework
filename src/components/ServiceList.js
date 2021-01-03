import React, { useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField, showCancel, selectService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const [filter, setFilter] = useState('');
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setServices([...services, ...items])
  }, [])

  const handleUpdate = (id, name, price) => {
    dispatch(changeServiceField('name', name))
    dispatch(changeServiceField('price', price))
    dispatch(selectService(id))
    dispatch(showCancel(true));
  }

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleChange = filter => {
    setFilter(filter);
    setServices(items.filter(e => {
      const name = e.name.toLowerCase();
      if(name.indexOf(filter.toLowerCase().trim()) !== -1) {
        return true
      }
      return false
    }))
  }

  return (
    <>
    <label>Filter:</label>
    	<input name='filter' onChange={e => handleChange(e.target.value)} value={filter} />
       <ul>
      {services.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleUpdate(o.id,  o.name, o.price)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default ServiceList
