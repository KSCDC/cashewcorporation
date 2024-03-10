import React from 'react'

function ProductImages() {
  return (
    <div>
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-4">
        {Array.from({length:21}).map((_,index) => (
            <img className='' src={`/images/products/product-${index+1}.png`} alt={`/images/products/product-${index+1}.png`} />
        ))}
        </div>
    </div>
  )
}

export default ProductImages