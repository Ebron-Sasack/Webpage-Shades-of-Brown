


export const NewCollection = () => {
  return (
    <div className='max-w-full px-10 my-24 bg-white'>
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center text-2xl md:text-4xl lg:text-6xl font-bold gap-4 text-amber-800">
                <h1>This Season's</h1>
                <h1>New</h1>
                <h1>Collection :</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
                 <div className="flex flex-col items-center justify-center gap-6">
                    <div className="border-2 border-amber-800 rounded-3xl w-[279px] h-[383px] relative bg-background-left/20">
                        <img src="/src/assets/new_1.png" className="bottom-0 absolute" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-xl text-amber-800 font-medium">
                        <h3>Coat with shirt</h3>
                        <h3>Rs - 850</h3>
                    </div>
                 </div>
                 <div className="flex flex-col items-center justify-center gap-6">
                    <div className="border-2 border-amber-800 rounded-3xl w-[279px] h-[383px] relative bg-background-left/20">
                        <img src="/src/assets/new_2.png" alt="" className="bottom-0 absolute" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-xl text-amber-800 font-medium">
                        <h3>Crop top</h3>
                        <h3>Rs - 500</h3>
                    </div>
                 </div>
                 <div className="flex flex-col items-center justify-center gap-6">
                    <div className="border-2 border-amber-800 rounded-3xl w-[279px] h-[383px] relative bg-background-left/20">
                        <img src="/src/assets/new_3.png" alt="" className="bottom-0 absolute" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-xl text-amber-800 font-medium">
                        <h3>Brown Denim Jacket</h3>
                        <h3>Rs - 1,500</h3>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
