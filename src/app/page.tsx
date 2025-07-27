import Link from "next/link";


const mockUrls=[
  "https://m5jbwpawex.ufs.sh/f/7XbqS9vfu4FpiZlJYux0rJ6mXDMBhYbdjckTuL2Ie10Vlovp",
  "https://m5jbwpawex.ufs.sh/f/7XbqS9vfu4FpHHTgkEnJqBpzeKdwhQkI6DviGmRfo7gNuOEL",
  "https://m5jbwpawex.ufs.sh/f/7XbqS9vfu4FpcxWSMFRXKxaFkdugCDM3zpJoE7hT5NXrIeRQ",
  "https://m5jbwpawex.ufs.sh/f/7XbqS9vfu4FpuW887IP1aESkzVw0dJLt6p4XNUMIQKZ7c5qv" 
]

const mockImages = mockUrls.map((url,index)=>({
  id:index+1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">{
        mockImages.map((image)=>(
          <div key={image.id} className="w-1/2 p-4 gap-4">
            <img src={image.url} alt={`Image ${image.id}`}  />
          </div>
        )) 
      }</div>
      Hello ( gallery in progress)
    </main>
  );
}
