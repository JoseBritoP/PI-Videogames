import {useState} from 'react'

const useModalConfirmation = () => {
  const [modalDeleteCon,setModalDeleteCon] = useState(false);
  const [modalPutCon,setModalPutCon] = useState(false);
  const [modalCreateCon,setModalCreateCon] = useState(false);

  const setFalseState = () => {
    setModalDeleteCon(false);
    setModalPutCon(false);
    setModalCreateCon(false);
  };

  return {
    modalDeleteCon,setModalDeleteCon,
    modalPutCon,setModalPutCon,
    modalCreateCon,setModalCreateCon,
    setFalseState,
  }
};

export default useModalConfirmation;