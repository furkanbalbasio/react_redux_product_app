import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalInput from '../components/ModalInput'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProductCard from '../components/ProductCard'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunction } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = () => {
    const {modal} = useSelector(state => (state.modal));
    const {data,keyword} = useSelector(state => (state.data));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({name: "", price: "", url: ""})

  const onChangeFunc = (e, type) => {
    if(type === "url"){
      setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))

    }else{
        setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  }

    let loc = location?.search.split('=')[1]

    useEffect(() => {
      if(loc){
        setProductInfo(data.find(dt => dt.id == loc))
      }
    },[loc])

    const buttonFunc = () => {
      dispatch(createDataFunc({...productInfo, id: data.length + 1}))
      dispatch(modalFunction());
    }

    const buttonUpdateFunc = () => {
      dispatch(updateDataFunc({...productInfo, id:loc}))
      dispatch(modalFunction());
      navigate('/')
    }
  
    const contentModal = (
      <>
      <ModalInput value={productInfo.name} type={"text"} placeholder={"Urun Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")}></ModalInput> 
      <ModalInput value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")}></ModalInput> 
      <ModalInput type={"file"} placeholder={" Resim Sec"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")}></ModalInput>
      <Button btnText={loc ? "Urun Guncelle" : "Urun Olustur"} onClick={loc ? buttonUpdateFunc : buttonFunc}/>
      </>
    )

    const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword));

  return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          filteredItems?.map((dt,i) => (
            <ProductCard key={i} dt={dt}/>
          ))
        }
      </div>
      {modal && <Modal content={contentModal} title={loc ? "Urun Guncelle" : "Urun Olustur"} />}
    </div>
  )
}

export default Product
