import { Button } from '@/components/ui/button'
import React from 'react'

const Products = () => {
  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between w-full'>
          <p>Products</p>
          <div className='flex gap-2'>
            <Button variant='outline'>Add Category</Button>
            <Button>Add Product</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products