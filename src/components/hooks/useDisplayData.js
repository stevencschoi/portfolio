import React, { useContext } from 'react';
import  { DisplayContext } from '../context/DisplayContext';

export const useDisplayData = () => {
  const { displayData, setDisplayData } = useContext(DisplayContext);

  const displayModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: true
    }));
    console.log('showModal:', displayData.showModal);
  }

  const hideModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: false
    }));
    console.log('showModal:', displayData.showModal);
  }

  return { displayData, displayModal, hideModal }
}