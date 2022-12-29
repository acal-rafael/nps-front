import React, { createContext, useState, } from 'react';

interface IUserContext {
  cliente: string;
  setCliente: React.Dispatch<React.SetStateAction<string>>;
  cpf: string,
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  fone: string;
  setFone: React.Dispatch<React.SetStateAction<string>>;
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
  nota: string;
  setNota: React.Dispatch<React.SetStateAction<string>>;
  pedido: string;
  setPedido: React.Dispatch<React.SetStateAction<string>>;
  ipServer: string;
  setIpServer: React.Dispatch<React.SetStateAction<string>>;
  connect: boolean;
  setConnect: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProviderContext {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({
  cliente: "",
  setCliente: () => { },
  cpf: "",
  setCpf: () => { },
  email: "",
  setEmail: () => { },
  fone: "",
  setFone: () => { },
  tipo: "",
  setTipo: () => { },
  nota: "",
  setNota: () => { },
  pedido: "",
  setPedido: () => { },
  ipServer: "",
  setIpServer: () => { },
  connect: false,
  setConnect: () => { },
});

export function ProviderContext({ children }: IProviderContext) {
  const [cliente, setCliente] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fone, setFone] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [nota, setNota] = useState<string>("");
  const [pedido, setPedido] = useState<string>("");
  const [ipServer, setIpServer] = useState<string>("");
  const [connect, setConnect] = useState<boolean>(false);

  return <UserContext.Provider
    value={{
      cliente, setCliente,
      cpf, setCpf,
      email, setEmail,
      fone, setFone,
      tipo, setTipo,
      nota, setNota,
      pedido, setPedido,
      ipServer, setIpServer,
      connect, setConnect,
    }}
  >
    {children}
  </UserContext.Provider>
}