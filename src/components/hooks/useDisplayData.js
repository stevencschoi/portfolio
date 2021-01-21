import React, { useContext } from 'react';
import  { DisplayContext } from '../context/DisplayContext';

export const useDisplayData = () => {
  const { displayData, setDisplayData } = useContext(DisplayContext);

  const displayModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: true
    }));
  }

  const hideModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: false
    }));
  }

  return { displayData, displayModal, hideModal }
}