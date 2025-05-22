
export const Home = () => {
  return (
    <div className="max-w-full sm:object-cover relative max-h-fit mx-auto bg-background-left ">
        <img src="/src/assets/backimg.png"  className="w-full" alt="" />
        <div className="absolute top-[300px] left-[20px] flex gap-10">
          <h1 className="text-[100px] text-stroke font-bold uppercase font-poppins text-background-left">Shades</h1>
          <h1 className="text-[100px] text-stroke font-bold uppercase text-background-left">of</h1>
        </div>
        <div className="absolute bottom-5 left-1/2">
          <h2 className="text-xl md:text-2xl uppercase text-amber-800">Only online</h2>
        </div>
    </div>
  )
}
