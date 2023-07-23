/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from 'react'
import { API } from '../../controllers/API'

const AllPosts = () => {
  const getAllPosts = async () => {
    const response = await API.get('/publish?page=0&size=3')
    console.log(response)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <div className='grid grid-cols-3 gap-x-7 gap-y-14'>
        <Post />
      </div>
    </div>
  )
}

export default AllPosts

const Post = () => {
  return (
    <div className='newsreader'>
      <img src="https://yinkablog.blob.core.windows.net/yinkasblog/a7706e22-22ee-44f7-9279-2746aafc2943Rectangle 3800.png" alt="" className='w-full' />
      <h3 className='inter font-medium my-3'>The Safest and Easiest way to use the internet</h3>
      <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer praesent amet amet egestas. </p>
    </div>
  )
}