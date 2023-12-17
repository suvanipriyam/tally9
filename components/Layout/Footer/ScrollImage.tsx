// 

import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import aos from 'aos'
import styles from './image.module.css'

const ScrollFlashyImage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    aos.init({
      once: true, // Only animate once
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      offset: 50, // Offset (in pixels) from the top of the element when animation starts
    })
  }, [])
// ${styles['container']}
  return (
    <div className={` ${styles['animated-container']}`}>
      <div
        data-aos="fade-up" // Specify the AOS animation type
        data-aos-duration="800" // Override the duration for this specific element
        data-aos-once="true" // Only animate once for this specific element
      >
        <img
          src="/images/footer-rock.png"
          width={200}
          className={styles['animated-img']}
          alt="Animated Image"
        />
      </div>
    </div>
  )
}

export default ScrollFlashyImage
