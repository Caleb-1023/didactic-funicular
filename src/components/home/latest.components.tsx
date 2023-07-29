/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../controllers/API'

type BlogProps = {
    title: string,
    description: string,
    blurb: string,
    publishedDate: string,
    postId: number,
    position: number,
}

const Latest = () => {
    const [posts, setPost] = useState<BlogProps[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getPost = async () => {
        setLoading(true)
        const response = await API.get('/publish?page=0&size=3', )
        setPost(response.data.content)
        setLoading(false)
        // console.log(response)
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className='newsreader my-5'>
        <h2 className='uppercase text-[#B67253] text-lg lg:text-2xl font-semibold mb-6'>The Latest Posts</h2>
        <div className='first:bg-[#FF86A5] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12'>
            {loading ? 
            <><div className='w-full h-60 bg-gray-300 rounded-lg animate-pulse'></div>
            <div className='w-full h-60 bg-gray-300 rounded-lg animate-pulse hidden lg:block'></div>
            <div className='w-full h-60 bg-gray-300 rounded-lg animate-pulse hidden lg:block'></div></>
            :
            <>{posts.map((p, i) => (
                <LatestBlog key={i} title={p.title} description={p.description} blurb={p.blurb} publishedDate={p.publishedDate} postId={p.postId} position={i} />
            ))}</>
            }
        </div>
    </div>
  )
}

export default Latest

const LatestBlog = ({title, description, blurb, publishedDate, postId, position}: BlogProps) => {
    const maxLength = 250

    const truncateBlurb = blurb?.split(' ').splice(0, 25).concat(['...']).join(' ')

    return (
        <div className={`${position === 0 ? 'bg-[#FF86A5] lg:col-span-3 text-white lg:h-[600px]': (position === 1 ? 'bg-[#FCE0E2]': 'bg-[#F7F7ED] lg:col-span-2')} p-8 lg:p-16 flex flex-col justify-between min-h-60 lg:min-h-none max-h-[500px] lg:max-h-none`}>
            <div className={`flex ${position === 0 ? 'flex-col lg:flex-row lg:space-x-12':'flex-col space-y-5'}`}>
                <h3 className={`text-2xl lg:text-[56px] tracking-tight font-light leading-10 lg:leading-[67px] mb-3 lg:mb-0 ${position === 0 ? 'basis-1/2':''}`}><span className='italic'>{title}</span><span className={`${position === 1 ? 'hidden':''}`}> - {description}</span></h3>
                <p className={`${position === 0 ? 'basis-1/2':''} lg:text-base lg:leading-10 tracking-widest break-all`}>{blurb.length > maxLength ? truncateBlurb : blurb}</p>
            </div>
            <div className='flex justify-between font-medium mt-10'>
                <p className='basis-1/2'>{new Date(parseInt(publishedDate)).toDateString()}</p>
                <Link className='basis-1/2 text-right' to={`/posts/${postId}`}>Read Article <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill={position === 0 ? '#fff':'#000'} /></svg></Link>
            </div>
        </div>
    )
}