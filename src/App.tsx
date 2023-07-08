import React, {useState} from 'react';
import {Product} from './components/Product/Product';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import {Loading} from './components/Loading/Loading';
import {useProduct} from './hooks/useProduct';
import {Modal} from './components/Modal/Modal';
import {CreateProduct} from './components/CreateProduct/CreateProduct';
import {IProduct} from './models/models';

function App() {

    const [modal, setModal] = useState(true)

    const {products, loading, error, addProduct} = useProduct()

    const createHandler = (product: IProduct) => {
        addProduct(product)
        setModal(false)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loading/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(p => <Product key={p.id} product={p}/>)}

            {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal && <button className='fixed bottom-5 right-5 text-2xl'
                               onClick={() => setModal(true)}>+</button>}
        </div>
    )
}

export default App