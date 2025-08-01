import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ productData, setproductData }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setproductData([...productData, data])
        console.log(data)       
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    name="productName"
                    {...register('productName')}
                    id="" placeholder="productName" />

                <input type="text"
                    name="description"
                    {...register('description')}
                    id="" placeholder="productDescription" />

                <input type="number"
                    name="price"
                    {...register('price')}
                    id=""
                    placeholder="productNumber" />

                <input type="url"
                    name="imageUrl"
                    {...register('imageUrl')}
                    id=""
                    placeholder="productUrl" />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form;