/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { API } from '../../controllers/API'
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


type post ={
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
  const [posts, setPosts] = useState<post[] | null>(null);
  const [totalPages,setTotalPages]=useState(0)
  const size=5;


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
                <div className='grid grid-cols-3 gap-x-7 gap-y-14'>
                  {posts.map((element) => {
                    return (
                      <div className='newsreader flex flex-col items-start justify-between h-[500px] border-[1px] border-gray-200 p-4 rounded-lg'>
                        {/* <div className=' w-full flex items-center'> */}
                          <img src={element.thumbnailUrl} alt="" className='max-w-full max-h-[75%] m-auto object-cover object-center' />
                        {/* </div> */}
                        <div className='h-1/4'>
                          <h3 className='inter font-medium my-3'>{element.title}</h3>
                          <p className='text-sm'>{element.description}</p>
                        </div>
                      </div>
                    
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
                          "pagination justify-content-end pb-2 mt-5"
                        }
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
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

export const Post = () => {
  return (
    <div className='newsreader'>
      <img src="https://yinkablog.blob.core.windows.net/yinkasblog/a7706e22-22ee-44f7-9279-2746aafc2943Rectangle 3800.png" alt="" className='w-full' />
      <h3 className='inter font-medium my-3'>The Safest and Easiest way to use the internet</h3>
      <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer praesent amet amet egestas. </p>
    </div>
  )
}