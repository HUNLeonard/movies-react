import { cn } from '../../utils/cn'

interface FancyBorderProp {
  bg?: string,
  className?: string
}
// Clip path is needed for some reason, beacuse the SVG, keeps getting a 1px border bottom line :/
const FancyBorder = ({ bg = "", className = "-translate-y-1/4 top-0 left-0" }: FancyBorderProp) => {
  const bgImgUrl = bg ? `bg-[url('${bg}')]` : "bg-[url('../pink.svg')]"
  return (
    <div className={cn("border-b-2 border-transparent absolute w-full h-full",
      "bg-repeat-x", bgImgUrl,
      "[clip-path:rect(0%_100%_95%_0%);]", className)}></div >
  )
}

export default FancyBorder