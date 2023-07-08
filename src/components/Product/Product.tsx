import {IProduct} from '../../models/models';
import {useState} from 'react';

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {

    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'py-2 px-2 bg-blue-400' : 'py-2 px-2 bg-yellow-400'
    const btnClasses = ['py-2 px-2 border rounded', btnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img className='w-1/6' src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p>Price: <span className='font-bold'>{product.price}</span></p>

            <button className={btnClasses.join(' ')}
                    onClick={() => setDetails(prevState => !prevState)}
            >{details ? 'Hide more' : 'Show more'}</button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}