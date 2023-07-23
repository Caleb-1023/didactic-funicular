import { Link } from "react-router-dom"

type Props = {
    name: string,
}
const Navbar = () => {
  return (
    <div className="py-3 my-6 flex flex-row items-center justify-between">
      <h1 className="shadows text-5xl">ola<span className="text-[#FF86A5]">y</span>inks</h1>
      <div className="flex space-x-14">
        <ul className="flex items-center space-x-12 inter text-[#B8B8B8] font-medium text-lg">
          <li><Link to={'/'}>Design</Link></li>
          <li><Link to={'/'}>User Experience</Link></li>
          <li><Link to={'/'}>Tech</Link></li>
          <li><Link to={'/'}>Lifestyle</Link></li>
          <li><Link to={'/'}>Skincare</Link></li>
          <li><Link to={'/'}>Food</Link></li>
        </ul>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="search-normal"><g id="vuesax/linear/search-normal"><g id="search-normal_2"><path id="Vector" d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M18.9304 21.1898C19.4604 22.7898 20.6704 22.9498 21.6004 21.5498C22.4504 20.2698 21.8904 19.2198 20.3504 19.2198C19.2104 19.2098 18.5704 20.0998 18.9304 21.1898Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g></g></svg>
      </div>
    </div>
  )
}

export default Navbar

// 'Design', 'User Experience', 'Tech', 'Lifestyle', 'Skincare', 'Food'