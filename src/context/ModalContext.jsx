import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialProjectType, setInitialProjectType] = useState('');
  const [selectedQuickProject, setSelectedQuickProject] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const openQuoteModal = (projectType = '') => {
    setInitialProjectType(projectType);
    setIsQuoteModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openQuickProject = (project) => {
    setSelectedQuickProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickProject = () => {
    setSelectedQuickProject(null);
    document.body.style.overflow = 'unset';
  };

  const openMaterialModal = (material) => {
    setSelectedMaterial(material);
    document.body.style.overflow = 'hidden';
  };

  const closeMaterialModal = () => {
    setSelectedMaterial(null);
    document.body.style.overflow = 'unset';
  };

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <ModalContext.Provider
      value={{
        isQuoteModalOpen,
        initialProjectType,
        openQuoteModal,
        closeQuoteModal,
        selectedQuickProject,
        openQuickProject,
        closeQuickProject,
        selectedMaterial,
        openMaterialModal,
        closeMaterialModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
