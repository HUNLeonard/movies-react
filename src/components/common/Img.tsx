import { cn } from '../../utils/cn'

interface ImgProp {
  src: string,
  alt: string,
  className?: string,
  title?: string,
  loading?: "lazy" | "eager",
  hoverScale?: boolean,
}

const Img = ({ src, className = "", alt, title = alt, loading, hoverScale = true }: ImgProp) => {
  const fallbackImage = "https://placehold.co/300x400?text=Failed+to+Load";

  return (
    <img
      src={src.length ? src : fallbackImage}
      alt={alt}
      title={title}
      onError={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.src = fallbackImage}
      loading={loading}
      role="img"
      className={cn("w-full h-full object-cover object-center transition-all duration-200 bg-neutral-600",
        hoverScale ? "hover:scale-105" : '', className)}
    />
  )
}

export default Img