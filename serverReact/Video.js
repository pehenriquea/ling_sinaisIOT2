import React, { useRef, useEffect } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Função para solicitar permissão e acessar a câmera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
      }
    };

    startCamera();
  }, []);

  return (
      <iframe
        src="http://192.168.3.58:81/stream"
        autoPlay
        controls
        title='video'
        className='rounded-2xl h-72 w-80'
      />
  );
};

export default CameraComponent;
