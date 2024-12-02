import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import { modalFunction } from '../redux/modalSlice';
import { useDispatch } from 'react-redux';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';

const Header = () => {
    const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
        <div className='text-3xl'>
            REACT UYGULAMASI
        </div>
        <div className='flex items-center gap-5'>
            <div className='text-black'>
                <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='h-10 rounded-lg' name='' id=''>
                    <option value="asc">
                    ARTAN
                    </option>
                    <option value="desc" name='' id=''>
                    AZALAN
                    </option>
                </select>
                <div>
                    <input onChange={e => dispatch(searchDataFunc(e.target.value))} className='h-10 rounded-lg px-4 text-black' type='text' placeholder='Arama Yapiniz...'>
                    </input>
                </div>
                <div onClick={()=>dispatch(modalFunction())} className='bg-indigo-800 w-10 h-10 rounded-full flex item-center justify-center cursor-pointer'>
                <MdPostAdd size={24}/>
                </div>    
            </div>
        </div>  
    </div>
  )
}

export default Header