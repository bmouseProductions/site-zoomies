import { useEffect, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackTop(){
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsSticky(true);
            document.querySelector('#backTop')?.classList.remove('hidding')
          } else {
            setIsSticky(false);
            document.querySelector('#backTop')?.classList.add('hidding')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isSticky]);

    return(
      <div id='backTop' className='fixed right-3 bottom-5 z-50'>
        <a href="#"  className='flex justify-center items-center rounded-full p-1 bg-[#ff7e00] border border-[#326ef5] shadow-[0px_0px_5px_#ffffff]'>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    )
}