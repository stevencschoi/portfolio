import { useContext } from 'react';
import { DisplayContext } from '../context/DisplayContext';

export const useDisplayData = () => {
  const { displayData, setDisplayData } = useContext(DisplayContext);

  const toggleNav = () => {
    setDisplayData((prev) => ({
      ...prev,
      showNav: !displayData.showNav,
    }));
  };

  const closeNav = () => {
    setDisplayData((prev) => ({
      ...prev,
      showNav: false,
    }));
  };

  const displayModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: true,
    }));
  };

  const hideModal = () => {
    setDisplayData((prev) => ({
      ...prev,
      showModal: false,
    }));
  };

  const selectProject = (project) => {
    setDisplayData((prev) => ({
      ...prev,
      selectedProject: project,
    }));
  };

  return { displayData, toggleNav, closeNav, displayModal, hideModal, selectProject };
};
