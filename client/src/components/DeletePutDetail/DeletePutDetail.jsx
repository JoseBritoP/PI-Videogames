import React,{useState} from 'react'
import style from './DeletePutDetail.module.css'
import ModalDelete from './ModalDelete/ModalDelete'
import ModalPut from './ModalPut/ModalPut'

const DeletePutDetail = ( {id}) => {
  const [modalDEL,setModalDEL] = useState(false);
  const [modalPUT,setModalPUT] = useState(false);

  const handleClickDelete = () => {
    setModalDEL(true);
    setModalPUT(false);
    if(modalDEL === true){
      setModalDEL(false);
      setModalPUT(false);
    }
  };

  const handleClickPut = () => {
    setModalPUT(true);
    setModalDEL(false);
    if(modalPUT === true){
      setModalDEL(false);
      setModalPUT(false);
    }
  };

  return (
    <div className={style['btn-delete']}>
      <button onClick={handleClickPut}>Pen</button>
      {modalPUT && <ModalPut setModalPUT={setModalPUT}/>}
      <button onClick={handleClickDelete} >X</button>
      {modalDEL && <ModalDelete setModalDEL={setModalDEL} id={id}/>}
    </div>
  )
}

export default DeletePutDetail