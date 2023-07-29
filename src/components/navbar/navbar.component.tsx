import { Link, useLocation } from "react-router-dom"
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const pathList = location.pathname.split('/')

  const active = pathList[pathList.length-1]

  const categories = ['design', 'ux', 'tech', 'lifestyle', 'skincare', 'food', 'all-posts']

  const [menu, setMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="py-3 px-5 lg:px-0 my-6 flex flex-row items-center justify-between z-50">
      <Link to={'/'} className="shadows text-5xl">ola<span className="text-[#FF86A5]">y</span>inks</Link>
      <div className={`fixed top-0 left-0 w-screen h-screen bg-[#000000ee] p-10 duration-300 ${menu ? 'block':'hidden'}`}>
        <svg className="block absolute right-5 md:right-10 top-5 md:top-10" onClick={handleMenu} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Menu / Close_MD"><path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
        <Link to={'/'} className="shadows text-white text-4xl md:text-6xl mb-10 block"  onClick={handleMenu}>ola<span className="text-[#FF86A5]">y</span>inks</Link>
        <div className="flex space-x-14">
        <ul className="flex flex-col items-start inter text-[#fff] font-medium text-xl md:text-3xl space-y-10">
          {categories.map((c, i) => (
            <li key={i}><Link to={`/posts/${c === 'all-posts' ? 'all-posts':`category/${c}`}`} className={`capitalize ${active === c ? 'text-[#ff86a5]':''}`} onClick={handleMenu}>{c === 'all-posts' ? 'all posts':`${c === 'ux' ? 'user experience':c}`}</Link></li>
          ))}
        </ul>
      </div>
      </div>
      <div className="flex space-x-14">
        <svg className="lg:hidden" onClick={handleMenu} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Menu / Menu_Alt_04"><path id="Vector" d="M5 17H19M5 12H19M5 7H13" stroke="#ff86a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
        <ul className="hidden lg:flex items-center space-x-12 inter text-[#787878] font-medium text-base">
          {categories.map((c, i) => (
            <li key={i}><Link to={`/posts/${c === 'all-posts' ? 'all-posts':`category/${c}`}`} className={`capitalize ${active === c ? 'text-[#ff86a5]':''}`}>{c === 'all-posts' ? 'all posts':`${c === 'ux' ? 'user experience':c}`}</Link></li>
          ))}
        </ul>
        {/* <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="search-normal"><g id="vuesax/linear/search-normal"><g id="search-normal_2"><path id="Vector" d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path id="Vector_2" d="M18.9304 21.1898C19.4604 22.7898 20.6704 22.9498 21.6004 21.5498C22.4504 20.2698 21.8904 19.2198 20.3504 19.2198C19.2104 19.2098 18.5704 20.0998 18.9304 21.1898Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></g></g></svg> */}
      </div>
    </div>
  )
}

export default Navbar

// 'Design', 'User Experience', 'Tech', 'Lifestyle', 'Skincare', 'Food'