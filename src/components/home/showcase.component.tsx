import React from 'react'

type Blogprops = {
  title: string,
  text: string,
  image?: string
}

const Showcase = () => {
  // const [title, setTitle] = useState('')

  return (
    <div className='w-full'>
        <h1 className='newsreader uppercase tracking-widest text-[120px] text-[#4D4D4D] text-center font-light'>The Art of <span className='line-through decoration-[#FF86A5]'>Living</span></h1>
        <TopArticle title='UNLEASHING YOUR INNER SELF' text='Comprehensive branding solutions that help fashion, lifestyle, and luxury brands connect with their target audience. Comprehensive branding solutions that help fashion, lifestyle, and luxury brands connect with their target audience.' image='' />
    </div>
  )
}

export default Showcase


const TopArticle = ({title, text, image}: Blogprops) => {
  const titleWords = title.split(' ')
  return (
    <div className='newsreader flex flex-col md:flex-row'>
      <div className='basis-1/2'>
        <h1 className='text-6xl text-[#4d4d4d] font-medium'>{titleWords.map((t, i) => (
          <span className={i === 0 ? 'block text-[#FCE0E2]' : ''} key={i}>{t} </span>
        ))}</h1>
        <p>{text}</p>
      </div>
      <div className='basis-1/2 border-[1px] rounded-lg'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}