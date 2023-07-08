import React from 'react';
import {Product} from './components/Product/Product';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import {Loading} from './components/Loading/Loading';
import {useProduct} from './hooks/useProduct';

function App() {

    const {products, loading, error} = useProduct()

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loading/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(p => <Product key={p.id} product={p}/>)}
        </div>
    )
}

export default App