import { useState } from "react"

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)

  return (
    <button className="bg-[#000] rounded-full w-10 h-10 fixed bottom-5 left-5" style={{display: visible ? 'block' : 'none'}} onClick={scrollToTop}>
        <svg className="m-auto" width="20px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="arrow-up"><g><polyline data-name="Right" fill="none" id="Right-2" points="7 7.5 12 2.5 17 7.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><line fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="21.3" y2="4.8"/></g></g></g></svg>
    </button>
  )
}

export default ScrollButton