/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/home/index.tsx'
import FileContentComponent from './components/blog/index.tsx'
import AllPosts from './components/blog/allposts.component.tsx'
import CategoryPost from './components/blog/categoryposts.component.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='posts'>
        <Route path='all-posts' element={<AllPosts />} />
        <Route path=':category' element={<CategoryPost />} />
        <Route path=':postId' element={<FileContentComponent />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
