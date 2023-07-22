/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    image: string,
}

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
  // const categories = ['Design', 'User Experience', 'Tech', 'Lifestyle', 'Skincare', 'Food']

  // const getTechPosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/technology/category', {headers: {
  //     Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjg5NjgyODEwLCJleHAiOjE2OTAyODc2MTB9.60PdUb82C0r3IrEiG2sYhRbKhN2o_ajrQsjZ23bhAKX_cvA0fLGkV6F5oj7ehcE8O4gC-VUtkGzj_lscFOboCw',
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
  //     }})
  //     console.log(response)
  // }
  // const getDesignPosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/design')
  // }
  // const getLifestylePosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/lifestyle')
  // }
  // const getSkincarePosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/skincare')
  // }
  // const getFoodPosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/food')
  // }
  // const getUXPosts = async () => {
  //   const response = await axios.get('https://fidelis.serveo.net/api/v1/publish/ux')
  // }

  // useEffect(() => {
  //   getTechPosts()
  // }, [])
  
  

  return (
    <div className='newsreader'>
        <Section category='technology' />
        {/* <div className='flex space-x-5 justify-between'>
          <LongCard image="https://yinkablog.blob.core.windows.net/yinkasblog/5dbc1700-1cab-4669-86a3-aa102cd57022Rectangle 3786.png" />
          <LongCard image="https://yinkablog.blob.core.windows.net/yinkasblog/915aea79-b3a3-4973-89e9-0660133bb87bRectangle 3786 (1).png" />
        </div> */}
    </div>
  )
}

export default Sections

const Section = ({category}: SectionProps) => {
  const [posts, setPosts] = useState<BigProps[]>([])

  const getPost = async () => {
    const response = await axios.get(`https://scaldus.serveo.net/api/v1/publish/${category}/category`, {headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
      }})
      setPosts(response.data.content)
      console.log(response)
  }

  const filteredPost = posts.filter((p, i) => i != 0)

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <h2 className='uppercase text-[#B67253] text-right text-2xl leading-7'>- {category}</h2>
      <div className='flex space-x-11'>
        <div className='basis-3/4'>
          <BigPicture category={posts[0]?.category} title={posts[0]?.title} blurb={posts[0]?.blurb} publishedDate={posts[0]?.publishedDate} postId={posts[0]?.postId} thumbnailUrl={posts[0]?.thumbnailUrl} />
        </div>  
        <div className='basis-1/4 flex flex-col justify-between '>
          {filteredPost.map((p, i) => (<SmallCard key={i} title={p.title} blurb={p.blurb} postId={p.postId} thumbnailUrl={p.thumbnailUrl} />))}
          {/* <SmallCard /> */}
        </div>
      </div>
    </>
  )
}

const BigPicture = ({category, title, blurb, publishedDate, postId, thumbnailUrl}: BigProps) => {
  return (
    <div className='relative h-[820px] rounded-lg newsreader'>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <img src={thumbnailUrl ? thumbnailUrl : "https://yinkablog.blob.core.windows.net/yinkasblog/f88b3f34-60dc-42d1-9bed-0b93f77de4d610.21.50.jpg"} alt="" className="w-full h-full object-cover object-center rounded-lg" />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-20 bg-[#ffffff00] px-12 pt-24 pb-16 rounded-lg text-white flex flex-col items-start justify-between">
        <div>
          <h3 className='text-xl font-medium'>— {category}</h3>
          <h4 className='text-5xl font-bold italic w-3/4'>{title}</h4>
        </div>
        <div className=''>
          <p className='text-2xl leading-8 font-medium'>{blurb}</p>
          <div className='flex justify-between font-medium text-lg mt-6'>
              <p>{publishedDate}</p>
              <Link to={`/post/${postId}`}>Read Article <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill="#fff"/></svg></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const SmallCard = ({title, blurb, postId, thumbnailUrl}: SmallProps) => {
  return (
    <div className='newsreader text-[#474F62]'>
      <img src={thumbnailUrl ? thumbnailUrl : "https://yinkablog.blob.core.windows.net/yinkasblog/cc198882-8a77-40ba-99a4-c5301717c87f3.09.30.jpg"} alt="" className='rounded-8 mb-5 w-full' />
      <h3 className='mb-5 text-xl font-bold tracking-wider leading-7'>{title}</h3>
      <p className='mb-5 text-xs tracking-widest leading-5'>{blurb}</p>
      <Link  to={`/post/${postId}`} className=''>Read Story <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill="#474F62"/></svg></Link>
    </div>
  )
}

const LongCard = ({image}: Props) => {
  return (
    <div className='newsreader text-[#474F62] w-[590px]'>
      <img src={image} alt="" className='rounded-lg mb-8 w-full' />
      <h3 className='text-[28px] font-bold tracking-wider leading-7'>The Safest and Easiest way to use the internet.</h3>
      <p className='text-lg leading-6 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer praesent amet amet egestas. </p>
      <a href="#" className='text-right'>Read Story</a>
    </div>
  )
}