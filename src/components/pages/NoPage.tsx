import { Link } from "react-router-dom"
import { cn } from "../../utils/cn"

const NoPage = () => {
  //lg:text-[clamp(780px,50vw,1024px)] 2xl:text-[1024px] 
  return (
    <main className={cn("relative mt-16 bg-neutral-800 w-full h-full overflow-hidden flex flex-col-reverse",
      "bg-[url('../moviebg1.webp')] bg-no-repeat [background-size:cover]")}>
      <section className="max-sm:h-224 h-150 lg:h-230 max-md:mt-8">
        <div className={cn("select-none absolute w-fit",
          "text-[clamp(300px,50vw,400px)] left-1/2 -translate-x-1/2",
          "xl:text-[clamp(450px,40vw,550px)] ",
          "font-extrabold "
        )}>
          <div className={cn("max-sm:flex flex-col items-center leading-72 md:leading-92 lg:leading-120",
            "w-full sm:w-fit text-primary",
            "lg:[filter:drop-shadow(0px_-15px_rgb(0,0,0))_drop-shadow(0px_15px_rgb(0,0,0))_drop-shadow(-15px_0px_rgb(0,0,0))_drop-shadow(15px_0px_rgb(0,0,0))]",
            "[filter:drop-shadow(0px_-10px_rgb(0,0,0))_drop-shadow(0px_10px_rgb(0,0,0))_drop-shadow(-10px_0px_rgb(0,0,0))_drop-shadow(10px_0px_rgb(0,0,0))]"
          )}
            style={{
              filter: cn()
            }}
          >
            <span className="sm:w-1/3 shrink-0">4</span>
            <span className="sm:w-1/3 shrink-0">0</span>
            <span className="sm:w-1/3 shrink-0">4</span>
          </div>
          <div className="z-10">
            <Link to="/" replace>
              <div
                className={cn("relative text-[clamp(20px,12vw,72px)] -mt-112 sm:mt-2 xs:text-7xl lg:text-9xl whitespace-nowrap uppercase font-bold border-6 px-8 py-4 text-black",
                  "w-fit mx-auto text-black border-2 border-black overflow-hidden bg-white/10 backdrop-blur-md",
                  "hover:bg-white/50 transition-[background-color] duration-500",
                  "after:h-full after:w-full after:absolute after:content-['go_home'] after:uppercase",
                  "after:bottom-0.5 after:left-0 after:text-primary after:px-8 after:py-4.5 after:[clip-path:rect(100%_100%_100%_0%)]",
                  "hover:after:[clip-path:rect(0%_100%_100%_0%)] after:transition-[clip-path] after:duration-500 after:z-20",
                  ""
                )}
              >go home</div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NoPage;