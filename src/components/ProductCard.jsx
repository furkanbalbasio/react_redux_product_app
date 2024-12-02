import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteDataFunc } from '../redux/dataSlice'
import { modalFunction } from '../redux/modalSlice'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({dt}) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateFunc = () => {
    dispatch(modalFunction())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id}`)
   // dispatch(updateDataFunc(dt))
  }
  return (
    <div className='w-[200px] -[200px] relative m-2 rounded-md'>
      <img src={dt?.url} className="w-full h-full rounded-md" alt="" />
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full'>
      <div className='text-lg font-semibold'> {dt?.name}</div>
      <div> {dt?.price}€</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute right-0 top-2'>
        {<BsThreeDots color='white' size={24}/>}
      </div>
      {
        openEdit && (
          <div className='bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm'>
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
            <div onClick={updateFunc} className='cursor-pointer'>Guncelle</div>
          </div>
          
        )
      }
    </div>
  )
}

export default ProductCard
