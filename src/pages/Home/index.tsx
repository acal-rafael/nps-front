import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import { UserContext } from '../../contextApp/userContext';

export const Home = () => {
  const [ipCaixa, setIpCaixa] = useState<string>("")
  const [nomeFilial, setNomeFilial] = useState<string>("");
  const [numFilial, setNumFilial] = useState<string>("0")
  const [alteraLabel, setAlteraLabel] = useState<boolean>(false);
  const [ipServidorNps, setIpServidorNps] = useState<string>("10.1.0.0");
  const [mostraBotao, setMostraBotao] = useState<boolean>(false);

  const { ipServer, setIpServer } = useContext(UserContext);

  const activarDesativarBotao = (ip: string) => {
    if (parseInt(ip) !== 1 && parseInt(ip) !== 0) {
      if (ip.length === 0) {
        setMostraBotao(prev => prev = false);
        return;
      }

      if (parseInt(ip) >= 254) {
        setMostraBotao(prev => prev = false);
        return;
      }
      setMostraBotao(prev => prev = true);
      return;
    }
    setMostraBotao(prev => prev = false);
    return;
  }

  const focusIpCaixa = () => {
    setAlteraLabel(prev => prev = true)
  }

  const blurIpCaixa = () => {
    if (ipCaixa !== "") {
      return
    } else {
      setAlteraLabel(prev => prev = false)
    }
  }

  const numeroFilialString = (numero: string) => {
    if (numFilial === "0") {
      setNomeFilial(prev => prev = "");
    }
    if (numFilial === "1") {
      setNomeFilial(prev => prev = "Tristão Gonçalves");
    }
    if (numFilial === "3") {
      setNomeFilial(prev => prev = "Antônio Sales");
    }
    if (numFilial === "5") {
      setNomeFilial(prev => prev = "Padre Cicero");
    }
    if (numFilial === "7") {
      setNomeFilial(prev => prev = "Washington Soares");
    }
    if (numFilial === "9") {
      setNomeFilial(prev => prev = "Godofredo Maciel");
    }
    if (numFilial === "11") {
      setNomeFilial(prev => prev = "Coronel Correia");
    }
    if (numFilial === "15") {
      setNomeFilial(prev => prev = "Desembargador Moreira");
    }
    if (numFilial === "17") {
      setNomeFilial(prev => prev = "José Holanda");
    }
  }

  const montaIpServidorNps = () => {
    setIpServidorNps(`10.1.${numFilial}.${ipCaixa}`);
  }

  useEffect(() => {
    numeroFilialString(numFilial)
  }, [numFilial])

  useEffect(() => {
    montaIpServidorNps();
    // activarDesativarBotao();
  }, [numFilial, ipCaixa])

  useEffect(() => {
    setIpServer(ipServidorNps);
  }, [ipServidorNps])


  // console.log("Numero da filial: ", numFilial)
  // console.log("Numero de IP do servidor: ", ipServidorNps)
  // console.log("Tamanho do IP do servidor: ", ipServidorNps.length)
  // console.log("IP do caixa: ", ipCaixa);
  // console.log("IP do caixa TAMANHO: ", ipCaixa.length);
  // console.log("IP do caixa TYPE: ", typeof ipCaixa);
  // console.log("### IpServer Context: ", ipServer);

  return (
    <div
      className='
        text-gray-500
        text-lg
        font-semibold

        flex
        flex-col
        gap-4
      '
    >
      <p>Olá, seja bem-vindo(a) Acal {nomeFilial}</p>
      <div
        className='
          flex
          gap-4
          text-gray-400

          hover:cursor-pointer
        '
      >

        <div
          className='
            border
            border-gray-300
            inline-block
            rounded-xl
            p-2
            
            hover:cursor-pointer
            transition
            ease-in-out
            delay-[]
            hover:bg-gray-100
          '
        >
          <label
            className='
              hover:cursor-pointer
              pr-2
            '
            htmlFor="numeroFilial"
          >Escolha a Filial:</label>
          <select
            className='
              hover:cursor-pointer
            '
            required
            onChange={e => setNumFilial(e.target.value)}
            onBlur={e => e.target.value === "0" && alert("Filial incorreta!")}
          >
            <option value="0" className='text-center '>-</option>
            <option value="1">TG</option>
            <option value="3">AS</option>
            <option value="5">MT</option>
            <option value="7">WS</option>
            <option value="9">GM</option>
            <option value="11">CE</option>
            <option value="15">DM</option>
            <option value="17">JH</option>
          </select>
        </div>

        {numFilial !== "0"
          &&
          <div
            className='
                flex
                justify-start
                items-center
                border-[1px]
                border-gray-300
                rounded-xl
                hover:cursor-text
                hover:border-[1px]
                hover:border-gray-500
              '
          >
            <label
              className={`
                  absolute
                  hover:cursor-text
                  bg-transparent
                  m-4
                  z-0
                  ${alteraLabel
                && `
                        transition
                        ease-in-out
                        delay-200
                        -translate-y-[1.450rem]
                        bg-white
                        text-[0.800rem]
                      `

                }
                `
              }
              htmlFor='ipCaixa'
            >IP Caixa</label>

            <input
              onFocus={e => {
                focusIpCaixa();
                // activarDesativarBotao(e.target.value);
              }}
              onBlur={e => {
                blurIpCaixa
                activarDesativarBotao(e.target.value);
              }}
              //onBlur={verificaIpCaixa}
              className='
                  bg-transparent
                  pl-4
                  h-[100%]
                  focus:outline-none
                  z-10
                '
              value={ipCaixa}
              onChange={e => {
                setIpCaixa(e.target.value)
                // activarDesativarBotao(e.target.value)
              }}
              maxLength={3}
              type={`text`}
              size={6}
            />
          </div>
          // : undefined
        }
      </div>
      <hr />

      {mostraBotao
        && <Link
          className={`
            w-[100%]
            text-center
            text-xl
            p-4
            border-[2px]

            //hover:transition
            //hover:ease-in
            //hover:delay-100

            bg-[#0096D5]
            border-[#0096D5]
            text-white
            outline-none
            
            //hover:bg-[#0096D5]
            //hover:text-gray-50
            rounded-xl
            
          `}
          to='/sliders'
        >
          Iniciar App Slide
        </Link>
        // : <Link
        //   className={`
        //     w-[100%]
        //     text-center
        //     text-xl
        //     p-4
            
        //     border-[2px]

        //     //bg-[#dfdfdf]
        //     //text-gray-400

        //     hover:transition
        //     hover:ease-in
        //     hover:delay-100
        //     border-gray-400
        //     //hover:bg-[#3d3f41]
        //     //hover:text-gray-50
        //     rounded-xl
            
        //   `}
        //   to='/'
        //   onClick={e => {
        //     e.preventDefault()
        //     alert("Falta colocar IP do Caixa!!!")
        //   }}
        // >
        //   Iniciar App Slide
        // </Link>
      }
      {/* <p>IP para conexão WebSocket: {ipServidorNps}</p> */}
    </div>
  )
}
