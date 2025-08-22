import React from 'react'

const card = ({ productData }) => {
    return (
        <div>
            {productData.map((value, index) => {
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs mt-6 border border-gray-200">
                    <img
                        src={value.imageUrl}
                        alt={value.productName}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{value.productName}</h3>
                        <p className="text-sm text-gray-600 mb-2">{value.description}</p>
                        <p className="text-xl font-bold text-indigo-600">₹{value.price}</p>
            
                    </div>
                </div>
            })}

        </div>
    )
}

export default card