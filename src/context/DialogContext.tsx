import { createContext, useContext, useState, ReactNode, FC } from 'react';
import ReactDOM from 'react-dom';
import ConfirmDialog from '@/components/dialog/ConfirmDialog';

interface DialogContextType {
  openConfirmDialog: (customClass?: string) => Promise<boolean>;
}

interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const [confirmResolve, setConfirmResolve] = useState<
    ((value: boolean) => void) | null
  >(null);
  const [customClass, setCustomClass] = useState<string | undefined>('');

  const openConfirmDialog = (customClass?: string): Promise<boolean> => {
    setConfirmDialogOpen(true);
    setCustomClass(customClass);
    return new Promise((resolve) => {
      setConfirmResolve(() => resolve);
    });
  };

  const closeConfirmDialog = () => {
    setConfirmDialogOpen(false);
    if (confirmResolve) confirmResolve(false);
  };

  const confirmDialog = () => {
    setConfirmDialogOpen(false);
    if (confirmResolve) confirmResolve(true);
  };

  return (
    <DialogContext.Provider
      value={{
        openConfirmDialog,
      }}
    >
      {children}
      {ReactDOM.createPortal(
        <>
          {confirmDialogOpen && (
            <ConfirmDialog
              isOpen={confirmDialogOpen}
              onClose={closeConfirmDialog}
              onConfirm={confirmDialog}
              customClass={customClass}
            />
          )}
        </>,
        document.body
      )}
    </DialogContext.Provider>
  );
};

export const useDialog = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog 必須在 DialogProvider 中使用');
  }
  return context;
};
