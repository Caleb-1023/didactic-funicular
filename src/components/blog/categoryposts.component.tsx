/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import { API } from '../../controllers/API'
import { Link, useParams } from 'react-router-dom'
import { Post } from './allposts.component'
import ReactPaginate from "react-paginate";
import { IPost } from './allposts.component';

const CategoryPost = () => {
    const {category} = useParams()

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [totalPages,setTotalPages]=useState(0)
    const size=5;

    const getAllPosts = async () => {
        try {
          const response = await API.get(`/publish/${category}/category?page=0&size=${size}`)
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
    }, [category])

  return (
    <div>
      {/* <div className='grid grid-cols-3 gap-x-7 gap-y-14'> */}
      {posts ? (
            <>
              {posts.length > 0 ? (
                <>
                <div className='grid grid-cols-3 gap-x-7 gap-y-14'>
                  {posts.map((element) => {
                    return (
                      <Post key={posts.indexOf(element)} post={element} />
                    
                    );
                  })}
                  </div>
                   <ReactPaginate
                        previousLabel={"|<"}
                        nextLabel={">|"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        onPageChange={handlePageChange}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        containerClassName={
                          "pagination flex items-center justify-center space-x-10 pb-2 mt-5"
                        }
                        pageClassName={"page-item text-xl py-1 px-2 rounded bg-gray-200"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active text-white bg-[#FF86A5]"}
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

export default CategoryPost