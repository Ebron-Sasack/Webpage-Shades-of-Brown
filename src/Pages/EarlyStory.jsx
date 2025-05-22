import early from '../assets/early.jpg'

export const EarlyStory = () => {
  return (
    <div className='relative max-w-full max-h-full '>
        <img src={early} className='object-cover w-full h-[600px] border-y-4 border-blue-600' alt="" />
        <h1 className='absolute top-1/2 text-2xl md:text-4xl lg:text-[3.60rem] uppercase font-volkhov text-white left-10'>Where every <span className='font-rouge'>Outfit</span> tells an <span className='font-rouge'>earthy story</span></h1>
    </div>
  )
}
