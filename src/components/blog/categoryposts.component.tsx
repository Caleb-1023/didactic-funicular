/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import { API } from '../../controllers/API'
import { useParams } from 'react-router-dom'
import { Post } from './allposts.component'

type Post = {
    title: string;
    description: string;
    image: string;
}

const CategoryPost = () => {
    const {category} = useParams()

    const [posts, setPosts] = useState<Post[]>([])

    const getPosts = async () => {
        const response = await API.get(`/publish/${category}/category`)
        console.log(response)
        setPosts(response.data.content)
    }
    
    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className='grid grid-cols-3 gap-x-7 gap-y-14'>
        {posts.map(() => (<Post />))}
    </div>
  )
}

export default CategoryPost