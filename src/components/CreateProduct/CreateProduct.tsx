import React, {useState} from 'react';
import {IProduct} from '../../models/models';
import axios from 'axios';
import {ErrorMessage} from '../ErrorMessage/ErrorMessage';

const productData: IProduct =  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (value.trim().length === 0) { //trim() удаляет все пробелы слева и справа
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        setValue('')
        onCreate(res.data)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text'
                   className='border py-2 px-4 w-full mb-2 outline-0'
                   placeholder='Enter product name...'
                   value={value}
                   onChange={changeHandler}/>

            {error && <ErrorMessage error={error}/>}

            <button type='submit' className='border rounded bg-yellow-400 py-2 px-4 hover:text-white'>Create</button>
        </form>
    )
}