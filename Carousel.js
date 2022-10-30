import { useState } from 'react'
import styles from '../css/Carousel.module.css'

const Carousel = ({pictures}) => {
  let [currIndex, setCurrIndex] = useState(0)
  let [fade, setFade] = useState(false)

  const changeCarouselPic = (forward = true) => {
    setFade(true)

    setTimeout(() => {
      if (forward) {
        currIndex < pictures.length - 1 ? setCurrIndex(prevIndex => prevIndex + 1) : setCurrIndex(0)
      } else {
        currIndex > 0 ? setCurrIndex(prevIndex => prevIndex - 1) : setCurrIndex(pictures.length - 1)
      }

      setFade(false)
    }, 290)
  }

  return (
    <>
      <img src={pictures[currIndex].src}
           alt={pictures[currIndex].alt}
           className={`${styles.carouselImg} ${fade ? styles.fadeAway : ''}`}
      />
      
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="48" 
           height="48" 
           fill="white" 
           className={`bi bi-arrow-left-circle-fill ${styles.prevPic}`}
           viewBox="0 0 16 16"
           onClick={() => changeCarouselPic(false)}
      >
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="48" 
           height="48" 
           fill="white" 
           className={`bi bi-arrow-right-circle-fill ${styles.nextPic}`}
           viewBox="0 0 16 16"
           onClick={changeCarouselPic}
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg>
    </>
  )
}

export default Carousel