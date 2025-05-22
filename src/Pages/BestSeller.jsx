import best1 from '../assets/best1.png'
import best2 from '../assets/best2.png'
import best3 from '../assets/best3.png'
import best4 from '../assets/best4.png'

export const BestSeller = () => {
  return (
    <div className='bg-white w-full h-full'>
        <div className='max-w-full max-h-full mx-auto px-10'>
            <div className='flex items-center justify-between py-6' >
                <h3 className='text-2xl text-amber-800 font-semibold my-15'>This Season's Best Sellers:</h3>
                <h3 className='text-2xl text-amber-800 font-semibold my-15'>View all:</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='items-center justify-center flex border-amber-800 border-2 bg-background-left/20 rounded-3xl h-[400px] w-[300px]'>
                  <img src={best1} className='object-cover w-full h-full' alt="" />
                </div>
                <div className='flex flex-col items-center justify-center mb-25'>
                  <h3 className='text-xl text-amber-800 font-medium'>Side tie up shirt</h3>
                  <h3 className='text-xl text-amber-800 font-medium'>Rs - 650</h3>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='items-center justify-center flex border-amber-800 border-2 bg-background-left/20 rounded-3xl h-[400px] w-[300px]'>
                  <img src={best2}  className='object-cover w-auto h-full' alt="" />
                </div>
                <div className='flex flex-col items-center justify-center mb-25'>
                  <h3 className='text-xl text-amber-800 font-medium'>Crop with coat</h3>
                  <h3 className='text-xl text-amber-800 font-medium'>Rs - 1,000</h3>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='items-center justify-center flex border-amber-800 border-2 bg-background-left/20 rounded-3xl h-[400px] w-[300px]'>
                  <img src={best4}  className='object-cover w-auto h-[350px]' alt="" />
                </div>
                <div className='flex flex-col items-center justify-center mb-25'>
                  <h3 className='text-xl text-amber-800 font-medium'>A-line trousers</h3>
                  <h3 className='text-xl text-amber-800 font-medium'>Rs - 1,200</h3>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center gap-6'>
                <div className='items-center justify-center flex border-amber-800 border-2 bg-background-left/20 rounded-3xl h-[400px] w-[300px]'>
                  <img src={best3}  className='object-cover w-full h-full' alt="" />
                </div>
                <div className='flex flex-col items-center justify-center mb-25'>
                  <h3 className='text-xl text-amber-800 font-medium'>Couple fits</h3>
                  <h3 className='text-xl text-amber-800 font-medium'>Rs - 2,500</h3>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
