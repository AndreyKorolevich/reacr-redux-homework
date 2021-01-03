import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, showCancel, updateService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const isCancel = useSelector(state => state.serviceAdd.showCancel);
	const selectId = useSelector(state => state.serviceAdd.id);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();

		if(isCancel) {
			dispatch(updateService(selectId, item.name, item.price));
			dispatch(showCancel(false))
		} else {
			dispatch(addService(item.name, item.price));	
		}
		dispatch(changeServiceField('name', ''));
		dispatch(changeServiceField('price', ''));
	}

	const handleReset = evt => {
		dispatch(changeServiceField('name', ''));
		dispatch(changeServiceField('price', ''));
		dispatch(showCancel(false))		
}

	return (
		<form onSubmit={handleSubmit} onReset={handleReset}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{isCancel && <button type='reset'>Cancel</button>}														
		</form>
	);
}

export default ServiceAdd;
