import {useProduct} from '../hooks/useProduct';
import React, {useContext} from 'react';
import {ModalContext} from '../context/ModalContext';
import {IProduct} from '../models/models';
import {Loading} from '../components/Loading/Loading';
import {ErrorMessage} from '../components/ErrorMessage/ErrorMessage';
import {Product} from '../components/Product/Product';
import {Modal} from '../components/Modal/Modal';
import {CreateProduct} from '../components/CreateProduct/CreateProduct';

export function ProductsPage() {

    const {products, loading, error, addProduct} = useProduct()
    const {modal, openModal, closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        addProduct(product)
        closeModal()
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            {loading && <Loading/>}
            {error && <ErrorMessage error={error}/>}

            {products.map(p => <Product key={p.id} product={p}/>)}

            {modal && <Modal title='Create new product' onClose={closeModal}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal && <button className='fixed bg-yellow-400 rounded-full px-4 py-2 bottom-10 right-10 text-2xl'
                               onClick={openModal}>+</button>}
        </div>
    )
}