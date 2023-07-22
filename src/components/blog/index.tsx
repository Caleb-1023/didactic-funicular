/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './post.css'

const FileContentComponent = () => {
  const { postId } = useParams()
  const [fileContent, setFileContent] = useState<string>('');

  const getPost = async () => {
    const response = await axios.get(`https://regina.serveo.net/api/v1/post/${postId}`, {headers: {Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjg5OTYwOTQ1LCJleHAiOjE2OTA1NjU3NDV9.uFbaeRkfOUGgRY4QlUDaYl8iR2vbUAReDkDGuJS7f4xzWkWxE8FNCci_CVbDUIoVQqS50Vs8U7OSnXlRzWcD5A','Access-Control-Allow-Origin': 'http://localhost:5173'}})
      console.log(response)
      const data = await axios.get(response.data.object.content)
      console.log(data.data)
      setFileContent(data.data)
      // .then((response) => {
      //   setFileContent(response.data);
      //   // console.log(response)
      // })
      // .catch((error) => {
      //   console.error('Error fetching file:', error);
      // });
    }

  useEffect(() => {
    getPost()
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div className='max-w-5xl mx-auto'>
      <h1>File Content:</h1>
      <div className='post break-words'>{parse(fileContent)}</div>
    </div>
  );
};

export default FileContentComponent;


{/* <p><br></p><p style="text-align: left; line-height: 1.5;">This article will show you three ways to get URL params in React (with React Router V5, V6, and without).</p><h2 style="text-align: left;">How to Get URL Parameters in React?</h2><p style="text-align: left; line-height: 1.5;">The best way to get URL parameters in React is to use the library “React Router”. Thanks to a set of functions, it helps you manage your application’s routes. But, if you have a simple application without routing, you can use the built-in <span style="color: rgb(100, 255, 236);"><code>URLSearchParams</code></span> interface to fetch the query parameters.</p><h2 style="text-align: left;">URL structure</h2><p style="text-align: left; line-height: 1.5;">Before deep-diving into how to get URL params in your React application, let’s quickly go through the URL parts.</p><p style="text-align: left; line-height: 1.5;">Let’s use this URL as an example: “https://my-website.com?type=cat&amp;name=oscar”. The different URL parts are:</p><ul><li style="text-align: left; line-height: 1.5;"><strong>Protocol:</strong> “https://”</li><li style="text-align: left; line-height: 1.5;"><strong>Domain name:</strong> “mywebsite.com”</li><li style="text-align: left; line-height: 1.5;"><strong>Query parameter 1:</strong></li><li style="text-align: left; line-height: 1.5;"><strong>Query parameter 2:</strong></li></ul><p style="text-align: left; line-height: 1.5;">In the following sections, you’ll discover how to fetch the query parameters <span style="color: rgb(100, 255, 236);"><code>type</code></span> and <span style="color: rgb(100, 255, 236);"><code>name</code></span>.</p><h2 style="text-align: left;">With URLSearchParams</h2><p style="text-align: left; line-height: 1.5;">In this first example, we get the React URL params for a simple application without any routers. It means what you’ll discover below can work for all your React projects without any additional libraries (nothing to install).</p><p style="text-align: left; line-height: 1.5;">To make it work, we need to use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window" target="_blank">your browser’s Window interface</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" target="_blank">the URLSearchParams interface</a>.</p><p style="text-align: left; line-height: 1.5;">Here’s a working example:</p><p style="text-align: left; line-height: 1.5;"><br></p><pre style="text-align: left; line-height: 1;"><code class="language-jsx" style="text-align: left; line-height: 1.5;">import React from "react"export default function App() {const queryParameters = new URLSearchParams(window.location.search)const type = queryParameters.get("type")const name = queryParameters.get("name")return (&lt;div&gt;&lt;p&gt;Type: {type}&lt;/p&gt;&lt;p&gt;Name: {name}&lt;/p&gt;&lt;/div&gt;)}</code></pre><p style="text-align: left; line-height: 1.5;">As you can see above, we initialize a <span style="color: rgb(100, 255, 236);"><code>queryParameters</code></span> variable by creating a new <span style="color: rgb(100, 255, 236);"><code>URLSearchParams</code></span> instance with the current <span style="color: rgb(100, 255, 236);"><code>window.location.search</code></span> as a parameter.</p><ul><li style="text-align: left; line-height: 1.5;"><span style="color: rgb(100, 255, 236);"><code>URLSearchParams</code></span> extracts the queries from the parameter passed at construction (<span style="color: rgb(100, 255, 236);"><code>window.location.search</code></span>) and provides a set of functionalities (<span style="color: rgb(100, 255, 236);"><code>get</code></span>, <span style="color: rgb(100, 255, 236);"><code>getAll</code></span>, <span style="color: rgb(100, 255, 236);"><code>has</code></span>, etc.).</li><li style="text-align: left; line-height: 1.5;"><span style="color: rgb(100, 255, 236);"><code>window.location.search</code></span> corresponds to the query parameters part of your URL (<span style="color: rgb(100, 255, 236);"><code>?type=cat&amp;name=oscar</code></span>).</li></ul><p style="text-align: left; line-height: 1.5;">In the rendering part of our application, we display the two React URL params, <span style="color: rgb(100, 255, 236);"><code>type</code></span>, and <span style="color: rgb(100, 255, 236);"><code>name</code></span>, thanks to the <span style="color: rgb(100, 255, 236);"><code>get()</code></span> function from the <span style="color: rgb(100, 255, 236);"><code>URLSearchParams</code></span> object.</p><p style="text-align: left; line-height: 1.5;"><img src="https://herewecode.io/wp-content/uploads/2022/09/image-1.webp" alt="" data-href="" style="height: auto;"></p><p style="text-align: left; line-height: 1.5;">Expected output with displayed URL params</p><h2 style="text-align: left;">With React Router V6</h2><p style="text-align: left; line-height: 1.5;">If you have a more complex application in React with many pages, you’re probably using <a href="https://reactrouter.com/en/main" target="_blank">React Router</a> to manage your routes. This library is the most popular solution and has many features to manage your website URLs.</p><p style="text-align: left; line-height: 1.5;">In this section, we’ll focus on version 6 of React Router. If you’re still using version 5, you can scroll down to the next section because the solution differs.</p><p style="text-align: left; line-height: 1.5;">Below, you can find an example:</p><p style="text-align: left; line-height: 1.5;"><br></p><pre style="text-align: left; line-height: 1;"><code class="language-jsx" style="text-align: left; line-height: 1.5;">import React from "react"import {  Routes,  Route,  useSearchParams,  BrowserRouter} from "react-router-dom"export default function App() { return (&lt;BrowserRouter&gt;&lt;Routes&gt;&lt;Route path="/" element={&lt;Home /&gt;} /&gt;&lt;/Routes&gt;&lt;/BrowserRouter&gt;)}function Home(){const [queryParameters] = useSearchParams() return (&lt;div&gt;&lt;p&gt;Type: {queryParameters.get("type")}&lt;/p&gt;&lt;p&gt;Name: {queryParameters.get("name")}&lt;/p&gt;&lt;/div&gt;)}</code></pre><p><br></p> */}