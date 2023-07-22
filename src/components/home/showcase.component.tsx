/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from 'axios'
import React, { useState, useEffect } from 'react'

type Blogprops = {
  title: string,
  blurb: string,
  thumbnailUrl: string
}

const Showcase = () => {
  const [article, setArticle] = useState<Blogprops | any>()

  const getTopArticle = async () => {
    const response = await axios.get('https://scaldus.serveo.net/api/v1/publish/main', {headers: {}})
    console.log(response)
    setArticle(response.data.content)
  }

  useEffect(() => {
    getTopArticle()
  }, [])

  return (
    <div className='w-full my-[100px]'>
        <h1 className='newsreader uppercase tracking-widest text-[120px] text-[#4D4D4D] text-center font-light'>The Art of <span className='line-through decoration-[#FF86A5]'>Living</span></h1>
        <TopArticle title={article?.title} blurb={article?.blurb} thumbnailUrl={article?.thumbnailUrl} />
    </div>
  )
}

export default Showcase


const TopArticle = ({title, blurb, thumbnailUrl}: Blogprops) => {
  const titleWords = title?.split(' ')
  return (
    <div className='newsreader flex flex-col md:flex-row justify-between items-center p-5'>
      <div className='basis-1/2'>
        <h1 className='text-6xl text-[#4d4d4d] font-medium mb-7'>{titleWords?.map((t, i) => (
          <span className={i === 0 ? 'block text-[#FCE0E2]' : ''} key={i}>{t} </span>
        ))}</h1>
        <p className='tracking-widest leading-10 text-xl'>{blurb}</p>
      </div>
      <div className='relative basis-1/3 me-[30px]'>
        <img src={thumbnailUrl} alt="" className='w-full rounded-lg z-20' />
        <div className='absolute w-full h-full border-[1px] border-[#C4C4C4] -bottom-[60px] -right-[30px] rounded-lg z-[-10]'></div>
      </div>
    </div>
  )
}