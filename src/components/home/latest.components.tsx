/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

    const getPost = async () => {
        const response = await axios.get('https://scaldus.serveo.net/api/v1/publish?page=0&size=3', {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjg5NjgyODEwLCJleHAiOjE2OTAyODc2MTB9.60PdUb82C0r3IrEiG2sYhRbKhN2o_ajrQsjZ23bhAKX_cvA0fLGkV6F5oj7ehcE8O4gC-VUtkGzj_lscFOboCw',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
        }})
        setPost(response.data.content)
        console.log(response)
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className='newsreader my-10'>
        <h2 className='uppercase text-[#B67253] font-semibold'>The Latest Posts</h2>
        <div className='first:bg-[#FF86A5] grid grid-cols-3 gap-12'>
            {posts.map((p, i) => (
                <LatestBlog key={i} title={p.title} description={p.description} blurb={p.blurb} publishedDate={p.publishedDate} postId={p.postId} position={i} />
            ))}
        </div>
    </div>
  )
}

export default Latest

const LatestBlog = ({title, description, blurb, publishedDate, postId, position}: BlogProps) => {

    return (
        <div className={`${position === 0 ? 'bg-[#FF86A5] col-span-3 text-white h-[600px]': (position === 1 ? 'bg-[#FCE0E2]': 'bg-[#F7F7ED] col-span-2')} p-16 flex flex-col justify-between`}>
            <div className={`flex ${position === 0 ? 'flex-row space-x-12':'flex-col space-y-5'}`}>
                <h3 className={`text-[56px] tracking-tight font-light leading-[67px] ${position === 0 ? 'basis-1/2':''}`}><span className='italic'>{title}</span><span className={`${position === 1 ? 'hidden':''}`}> - {description}</span></h3>
                <p className={`${position === 0 ? 'basis-1/2':''} text-base leading-10 tracking-widest`}>{blurb}</p>
            </div>
            <div className='flex justify-between font-medium mt-10'>
                <p>{publishedDate}</p>
                <Link to={`/posts/${postId}`}>Read Article <svg className='inline' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0 8V6H10.3535L6.90234 2L7.76513 0L13.8047 7L7.76513 14L6.90234 12L10.3535 8H0Z" fill="#474F62"/></svg></Link>
            </div>
        </div>
    )
}