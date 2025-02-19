import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn'

const PageButton = ({ down = false }: { down?: boolean }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const checkY = () => {
      setHidden(window.scrollY < 50)
    }

    window.addEventListener("scroll", checkY)
    checkY();
    return () => window.removeEventListener("scroll", checkY)
  }, [])

  const scrollToTop = () => {
    const footer = document.querySelector("footer");

    window.scrollTo({
      top: down ? document.documentElement.scrollHeight - (footer?.clientHeight ?? 0) * 1.5 : 0,
      behavior: "smooth",
    });
  };


  return (
    <div className={cn("w-12 h-12 bg-secondary-200 border-2 text-black rounded-full",
      "grid place-content-center font-bold text-xl transition-[opacity] duration-500",
      "fixed bottom-10 right-10 z-50 cursor-pointer",
      down ? "right-23" : "right-10",
      "hover:bg-secondary squish select-none",
      hidden ? "opacity-0" : "opacity-100"
    )}
      onClick={scrollToTop}
    >
      <span className="">{down ? "↓" : "↑"}</span>
    </div>
  )
}

export default PageButton