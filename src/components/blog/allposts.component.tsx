/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { API } from '../../controllers/API'
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';


export type IPost ={
  postCoverId: number;
  postId : number;
  blurb: string;
  thumbnailUrl: string;
  category: string;
  title: string;
  description: string ;
  publishedDate : string;
}
const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [totalPages,setTotalPages]=useState(0)
  const size=18;


  const getAllPosts = async () => {
    try {
      const response = await API.get(`/publish?page=0&size=${size}`)
      setPosts(response.data.content);
      setTotalPages(response.data.totalPages)
      console.log(response);
    } catch (error) {
      console.log(error);
    
    }
    
  }

  const getPage=async(currentPage : number)=>{
    try{
      const response= await API.get(`/publish?page=${currentPage}&size=${size}`);
      return response.data.content
    }
    catch(err){
      console.log(err)
    }
}

const handlePageChange=async(data : {selected :number})=>{
  try{
    const page=await getPage(data.selected);
    setPosts(page)
  }
  catch(err){
    console.log(err);
  }
  
}
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      {/* <div className='grid grid-cols-3 gap-x-7 gap-y-14'> */}
      {posts ? (
            <>
              {posts.length > 0 ? (
                <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14'>
                  {posts.map((element) => {
                    return (
                      <Post key={posts.indexOf(element)} post={element} />
                    
                    );
                  })}
                  </div>
                   <ReactPaginate
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        onPageChange={handlePageChange}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        containerClassName={
                          "pagination flex items-center justify-center space-x-5 pb-2 mt-5"
                        }
                        activeClassName={"active py-3 bg-[#ff86a5] rounded"}
                        activeLinkClassName={"active text-white bg-[#FF86A5]"}
                        pageClassName={"page-item bg-gray-200 py-3 rounded"}
                        pageLinkClassName={"page-link p-3 rounded"}
                        previousClassName={"page-item font-semibold hover:text-[#ff86a5]"}
                        nextClassName={"page-item font-semibold hover:text-[#ff86a5]"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                      />
                </>
              ) : (
                <div className="text-center mb-5">
                  <h2>There are no posts here</h2>
                </div>
              )}
            </>
               ) : (
                <div className="mt-5 pt-5 mb-5 text-center">
                  Loading 
                </div>
              )}
                
      </div>
  )
}


export default AllPosts

type Props = {
  post: IPost
}

export const Post = ({post}: Props) => {
  return (
    <div className='newsreader hover:shadow-lg duration-300 flex flex-col items-start justify-between h-[500px] border-[1px] border-gray-200 p-4 rounded-lg'>
      {/* <div className=' w-full flex items-center'> */}
        <img src={post.thumbnailUrl} alt="" className='max-w-full max-h-[75%] m-auto object-cover object-center' />
      {/* </div> */}
      <div className='h-1/4'>
        <Link to={`/posts/${post.postId}`} className='inter font-medium mt-3 mb-6 block'>{post.title}</Link>
        <p className='text-sm'>{post.description}</p>
      </div>
    </div>
  )
}