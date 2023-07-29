/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../controllers/API'

type SectionProps = {
  category: string,
}

type BigProps = {
  category: string,
  title: string,
  blurb: string,
  publishedDate: string,
  postId: number,
  thumbnailUrl: string
}

type SmallProps = {
  title: string,
  blurb: string,
  postId: number,
  thumbnailUrl: string
}

const Sections = () => {
  return (
    <div className='newsreader'>
        <Section category='tech' />
    </div>
  )
}

export default Sections

const Section = ({category}: SectionProps) => {
  const [posts, setPosts] = useState<BigProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getPost = async () => {
    setLoading(true)
    const response = await API.get(`/publish/${category}/category`, {headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
      }})
      setPosts(response.data.content)
      setLoading(false)
      console.log(response)
  }

  const filteredPost = posts.filter((p) => posts.indexOf(p) > 0 && posts.indexOf(p) < 3 )

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className='my-20'>
      {loading ? 
      <>
        <h2 className='bg-gray-200 animate-pulse h-5'></h2>
        <div className='w-full h-[300px] bg-gray-200 animate-pulse mt-4'></div>
      </>
      :
      <>
        <h2 className='uppercase text-[#B67253] text-right text-lg lg:text-2xl leading-7 mb-6'>- {category}</h2>
        <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-11'>
          <div className='lg:basis-3/4'>
            <BigPicture category={posts[0]?.category} title={posts[0]?.title} blurb={posts[0]?.blurb} publishedDate={posts[0]?.publishedDate} postId={posts[0]?.postId} thumbnailUrl={posts[0]?.thumbnailUrl} />
          </div>  
          <div className='lg:basis-1/4 flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:space-x-0 space-y-4 md:space-y-0 justify-between '>
            {filteredPost.map((p, i) => (<SmallCard key={i} title={p.title} blurb={p.blurb} postId={p.postId} thumbnailUrl={p.thumbnailUrl} />))}
          </div>
        </div>
      </>
      }
    </div>
  )
}

const BigPicture = ({category, title, blurb, publishedDate, postId, thumbnailUrl}: BigProps) => {
  // const maxLength = 250

  return (
    <div className='relative h-[500px] lg:h-[820px] rounded-lg newsreader'>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <img src={thumbnailUrl ? thumbnailUrl : "https://yinkablog.blob.core.windows.net/yinkasblog/f88b3f34-60dc-42d1-9bed-0b93f77de4d610.21.50.jpg"} alt="" className="w-full h-full object-cover object-center rounded-lg" />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-20 p-5 lg:px-12 lg:pt-24 lg:pb-16 rounded-lg text-white flex flex-col items-start justify-between bg-[#00000091]">
        <div className='w-full'>
          <h3 className='text-base lg:text-xl font-medium uppercase mb-6'>— {category}</h3>
          <h4 className='text-3xl lg:text-5xl font-bold italic w-1/2'>{title}</h4>
        </div>
        <div className='  w-full'>
          <p className='text-lg lg:text-2xl leading-8 font-medium'>
            {/* {blurb.length>maxLength ? blurb.substring(0, maxLength) + "..." : blurb} */}
            {blurb}
            </p>
          <div className='flex justify-between font-medium text-lg mt-6'>
              <p className='basis-1/2'>{new Date(parseInt(publishedDate)).toDateString()}</p>
              <Link to={`/posts/${postId}`} className='basis-1/2 text-right'>Read Article <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill="#fff"/></svg></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const SmallCard = ({title, blurb, postId, thumbnailUrl}: SmallProps) => {
  const maxLength = 250

  const truncateBlurb = blurb?.split(' ').splice(0, 25).concat(['...']).join(' ')
  
  return (
    <div className='newsreader text-[#474F62] h-[400px] md:basis-1/2 lg:basis-1'>
      <img src={thumbnailUrl ? thumbnailUrl : "https://yinkablog.blob.core.windows.net/yinkasblog/cc198882-8a77-40ba-99a4-c5301717c87f3.09.30.jpg"} alt="Post Thumbnail" className='rounded-xl mb-5 w-full max-h-[200px] object-cover' />
      <h3 className='mb-3 text-xl font-bold tracking-wider leading-7'>{title}</h3>
      <p className='mb-3 text-base lg:text-xs tracking-widest leading-5'>{blurb.length > maxLength ? truncateBlurb : blurb}</p>
      <Link  to={`/posts/${postId}`} className=''>Read Story <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill="#474F62"/></svg></Link>
    </div>
  )
}