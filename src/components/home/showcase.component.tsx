/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react'
import { API } from '../../controllers/API'
import { Link } from 'react-router-dom'

type Blogprops = {
  title: string,
  blurb: string,
  thumbnailUrl: string,
  postId: number
}

const Showcase = () => {
  const [article, setArticle] = useState<Blogprops | any>()
  const [loading, setLoading] = useState<boolean>(true)

  const getTopArticle = async () => {
    setLoading(true)
    const response = await API.get('/publish/main')
    // console.log(response)
    setArticle(response.data.object)
    setLoading(false)
  }

  useEffect(() => {
    getTopArticle()
  }, [])

  return (
    <div className='w-full mt-10 mb-[30px] lg:mb-[100px]'>
        <div className=''>
          <h1 className='newsreader uppercase tracking-widest text-5xl md:text-6xl lg:text-[100px] text-[#4D4D4D] text-center font-light'>The Art of <span className='line-through decoration-[#FF86A5]'>Living</span>
          </h1>
          <h2 className='newsreader text-right text-sm md:text-lg tracking-normal md:px-10 lg:px-0 -my-3'>EST.2023</h2>
        </div>
        {loading ? 
        <div className='animate-pulse newsreader flex flex-col md:flex-row justify-between items-center p-5 space-x-10 my-16'>
          <div className='basis-1/2'>
            <h1 className='uppercase text-6xl bg-gray-300 text-[#4d4d4d] font-medium mb-7 h-5 rounded-xl'></h1>
            <p className='tracking-widest leading-10 text-xl text-gray-300 bg-gray-300 h-5 rounded-xl'></p>
            <p className='my-10 bg-gray-300 h-5 rounded-xl'></p>
          </div>
          <div className='relative basis-1/2 me-[30px] h-full'>
            <div className='w-full rounded-lg z-20 bg-gray-300 h-64'></div>
          </div>
        </div>
        :
        <TopArticle title={article?.title} blurb={article?.blurb} thumbnailUrl={article?.thumbnailUrl} postId={article?.postId} />
        }
    </div>
  )
}

export default Showcase


const TopArticle = ({title, blurb, thumbnailUrl, postId}: Blogprops) => {
  const maxLength = 250

  const titleWords = title?.split(' ')
  const truncateBlurb = blurb?.split(' ').splice(0, 25).concat(['...']).join(' ')

  return (
    <div className='newsreader flex flex-col md:flex-row justify-between items-center p-5 lg:space-x-10 my-8 lg:my-16'>
      <div className='basis-1/2'>
        <h1 className='uppercase text-xl md:text-4xl lg:text-5xl text-[#4d4d4d] font-medium mb-7'>{titleWords?.map((t, i) => (
          <span className={i === 0 ? 'block text-[#FCE0E2]' : ''} key={i}>{t} </span>
        ))}</h1>
        <p className='tracking-widest leading-10 lg:text-lg text-[#828282]'>{blurb.length > maxLength ? truncateBlurb : blurb}</p>
        <Link to={`/posts/${postId}`} className='my-10 block text-right' >Read Article <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill='#000' /></svg></Link>
      </div>
      <div className='relative basis-1/3 me-[30px]'>
        <img src={thumbnailUrl} alt="" className='w-full rounded-lg z-20' />
        <div className='absolute w-full h-full border-[1px] border-[#C4C4C4] -bottom-[20px] lg:-bottom-[60px] -right-[10px] lg:-right-[30px] rounded-lg z-[-10]'></div>
      </div>
    </div>
  )
}