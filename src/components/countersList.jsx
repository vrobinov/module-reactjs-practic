import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'}, 
        {id: 1, value: 4, name: 'Ложка'}, 
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];
    const [counters, setCounters] = useState(initialState);
    const hundleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const hundleReset = () => {
        console.log('hundleReset');
    };
        const hundleIncrement = (id, value) => {
        const nextValue = counters.map((v) =>{
        if (v.id === id) {
        return {...v, value: v.value + 1};
        } else {
        return v; 
        }
        });
            setCounters(nextValue);
    };
    const hundleDecrement = (id) => {
        const prevValue = counters.map((v) =>{
        if (v.id === id) {
        return {...v, value: v.value - 1};
        } else {
        return v; 
        }
        });
            setCounters(prevValue);
    };
    return (
        <>
        {counters.map((count) => (
            <Counter key={count.id} onDelete={hundleDelete} onDecrement={hundleDecrement} onIncrement={hundleIncrement} {...count}/>
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={hundleReset}>Сброс</button>
        </>
    );
};

export default CountersList;