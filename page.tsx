import Image from "next/image";

export default function Home() {
  return (
    <main >
      
      <div className=" bg-teal-700  w-full min-h-24  ">
        <div className="text-gray-100 flex justify-evenly ">
        <button> About</button>
        <button>Projects</button>
        <button>Hire me</button>
        </div>
      
      </div>
      <div className="bg-zinc-300 h-[824px]" >
        <div>
          
        <h1 className="animate-pulse text-4xl ">Hello i am Tehreem a web developer</h1>
        <p>Hope we can create an exceptional and innovative projects.</p>
        </div>
        <button type="button bg-slate-50 border boder-black rounded" disabled>
          Portfolio
        </button>
      
        <div>
          <h4 className="hover:underline-offset-1 font-semibold flex flex-row justify-center ">Services</h4>
        </div>
      <div className="flex flex-row gap-4 justify-center items-center">
      
        <div className="w-48 bg-slate-300 border border-black aspect-square">App development</div>
        <div className="w-48  bg-slate-300 border border-black aspect-square">Web development</div>
        <div className="w-48 bg-slate-300 border border-black aspect-square">Educational apps</div>
        <div className="w-48 bg-slate-300 border border-black aspect-square">UI developer</div>
        <div className="w-48 bg-slate-300 border border-black aspect-square">Blockchain</div>
      </div>
      </div>
      <div className="flex absolute top-[924px] left-2  bg-teal-600 w-max w-full h-80">
     
       <div><b>Get in Touch</b></div> 
        <div className="flex flex-col gap-2 items-center">
        <form>
          <label id="1">Name</label>
          <input id="1" type="text" placeholder="Name"/>
          <label id="2">Contact Number</label>
          <input id="2" type="text" />
          <label id="3" >Email</label>
          <input id="3" type="mail" />
          <label id="4">Message</label>
          <input id="4" type="message" />
        </form>
        </div>
        
      </div>
  
    </main>
  )
}
