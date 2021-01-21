import { useContext } from 'react';
import  { DisplayContext } from '../context/DisplayContext';

export const useDisplayData = () => {
  const { displayData, setDisplayData } = useContext(DisplayContext);

  const displayModal = () => {
    setDisplayData(prev => ({
      ...prev,
      showModal: true
    }));
  }

  const hideModal = () => {
    setDisplayData(prev => ({
      ...prev,
      showModal: false,
      selectedProject: {},
    }));
  }

  const selectProject = project => {
    setDisplayData(prev => ({
      ...prev,
      selectedProject: project
    }))
  }

  return { displayData, displayModal, hideModal, selectProject };
}