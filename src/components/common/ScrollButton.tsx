import { LucideIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

const ScrollButton = ({ icon: Icon, position = "left-0", execute }: { icon: LucideIcon, position: string, execute?: (args: any) => void }) => {
  return (
    <div className={cn("absolute top-1/2", position, "-translate-y-1/2 shadow-md",
      "w-8 h-10", "xs:w-10 xs:h-12", "md:w-12 md:h-16",
      "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-xs hover:scale-95",
      "active:bg-[rgba(255,255,255,0.2)] active:scale-95 transition-[background-color,scale] duration-200",
      "cursor-pointer rounded-md flex justify-center items-center border-2 border-black")}

      onClick={execute}>
      <span className="max-md:hidden"><Icon size={52} /></span>
      <span className="md:hidden max-xs:hidden"><Icon size={42} /></span>
      <span className="xs:hidden"><Icon size={32} /></span>
    </div>
  )
}

export default ScrollButton