import React, { useEffect, useState } from 'react';

function ShowLetter (){

    const [message, setMessage] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
      // Função para buscar a última mensagem do servidor Node.js
      const fetchMessage = async () => {
        try {
          const response = await fetch('http://localhost:5000/mqtt-message');
          const data = await response.json();
          setMessage(data.message);
          setIsConnected(true)
        } catch (error) {
          console.error('Erro ao buscar a mensagem MQTT:', error);
          setIsConnected(false)
        }
      };
  
      // Busca a mensagem a cada 5 segundos
      const interval = setInterval(fetchMessage, 100);
  
      // Limpeza do intervalo quando o componente desmonta
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-purple-500 p-16 rounded-2xl text-white text-center font-semibold text-3xl top-3">
                <p className="-mt-12 mb-12">Tradução</p>
                <p className='text-8xl'>{message || 'A'}</p>
            </div>
            <div className="bg-purple-500 p-16 rounded-2xl text-white text-center font-semibold text-3xl">
                <p className="-mt-12 mb-12">2ª opção</p>
                <p className='text-8xl'>{message || 'E'}</p>
            </div>
            <div>
                {isConnected ?
                    <div className='bg-green-500 text-green-500 p-1 py-36 rounded-2xl'>C</div> :
                    <div className='bg-red-500 text-red-500 p-1 py-36 rounded-2xl'>D</div>}
            </div>
        </>
    );
}

export default ShowLetterimport React, { useEffect, useState } from 'react';

function ShowLetter (){

    const [message, setMessage] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
      // Função para buscar a última mensagem do servidor Node.js
      const fetchMessage = async () => {
        try {
          const response = await fetch('http://localhost:5000/mqtt-message');
          const data = await response.json();
          setMessage(data.message);
          setIsConnected(true)
        } catch (error) {
          console.error('Erro ao buscar a mensagem MQTT:', error);
          setIsConnected(false)
        }
      };
  
      // Busca a mensagem a cada 5 segundos
      const interval = setInterval(fetchMessage, 100);
  
      // Limpeza do intervalo quando o componente desmonta
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-purple-500 p-16 rounded-2xl text-white text-center font-semibold text-3xl top-3">
                <p className="-mt-12 mb-12">Tradução</p>
                <p className='text-8xl'>{message || 'A'}</p>
            </div>
            <div className="bg-purple-500 p-16 rounded-2xl text-white text-center font-semibold text-3xl">
                <p className="-mt-12 mb-12">2ª opção</p>
                <p className='text-8xl'>{message || 'E'}</p>
            </div>
            <div>
                {isConnected ?
                    <div className='bg-green-500 text-green-500 p-1 py-36 rounded-2xl'>C</div> :
                    <div className='bg-red-500 text-red-500 p-1 py-36 rounded-2xl'>D</div>}
            </div>
        </>
    );
}

export default ShowLetter
