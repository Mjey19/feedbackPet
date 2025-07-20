import { createContext, useContext, useState } from "react";

interface NotifyContextType {
  isActive: boolean;
  text: string;
  openNotify: (msg: string) => void;
  closeNotify: () => void;
}

const NotifyContext = createContext<NotifyContextType>(null!);

export const NotifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  const openNotify = (msg: string) => {
    setText(msg);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  };

  const closeNotify = () => setIsActive(false);

  return (
    <NotifyContext.Provider value={{ isActive, text, openNotify, closeNotify }}>
      {children}
    </NotifyContext.Provider>
  );
};

export const useNotify = () => useContext(NotifyContext);
