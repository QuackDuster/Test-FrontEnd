import { useState, useRef, useEffect } from 'react';
import ImgDesktop from '../assets/car1-web.jpg';
import ImgDesktop2 from '../assets/car2-web.jpg';
import ImgMobile from '../assets/car1-mobile.jpg';
import ImgMobile2 from '../assets/car2-mobile.jpg';

export default function SliderComparison() {
  const [imagePercent, setImagePercent] = useState(0.5);
  const [isLargerThanLG, setIsLargerThanLG] = useState(false);
  const sliderContainer = useRef(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsLargerThanLG(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slide = (xPosition) => {
    const containerBoundingRect = sliderContainer.current.getBoundingClientRect();
    setImagePercent(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
      }
    });
  };

  const handlerTouchDown = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handlerDown = () => {
    window.onmousemove = handlerMovement;
    window.onmouseup = handlerUp;
  };

  const handlerMovement = (event) => {
    slide(event.clientX);
  };

  const handlerUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div>
      <div ref={sliderContainer} className='max-h-full relative select-none pointer-events-none'>
        {isLargerThanLG ? (
          <img
            src={ImgDesktop}
            style={{
              clipPath: `polygon(0 0, ${imagePercent * 100}% 0, ${
                imagePercent * 100
              }% 100%, 0 100%)`,
            }}
            className='absolute inset-0'
          />
        ) : (
          <img
            src={ImgMobile}
            style={{
              clipPath: `polygon(0 0, ${imagePercent * 100}% 0, ${
                imagePercent * 100
              }% 100%, 0 100%)`,
            }}
            className='absolute inset-0'
          />
        )}
        {isLargerThanLG ? <img src={ImgDesktop2} alt={''} /> : <img src={ImgMobile2} alt={''} />}
      </div>
      <div style={{ left: `${imagePercent * 100}%` }} className='absolute inset-y-0'>
        <div className='absolute h-screen'>
          <div className='absolute inset-y-0 -ml-0.5 bg-white w-1'></div>
          <div
            style={{ touchAction: 'none' }}
            onMouseDown={handlerDown}
            onTouchMove={handlerTouchDown}
            className='h-12 w-2 -ml-1 -mt-6 absolute top-1/2 bg-white shadow-xl flex items-center justify-center cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-12 text-white rotate-90 transform gap-6 absolute'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
