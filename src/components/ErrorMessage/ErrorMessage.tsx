import React from 'react';

type ErrorMessageProps = {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className='text-center text-red-600 font-bold'>{error}</p>
    )
}