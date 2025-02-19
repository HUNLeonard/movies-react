import { cn } from '../../utils/cn';

const SpanSpin = ({ children, pos }: { children: string, pos: number }) => {
  const space = children === ' ';
  return (
    <span
      className={cn(`spinChar inline-block`, space ? "w-2" : "")} style={{
        transform: 'rotateX(180deg)',
        animation: "flipChar 0.3s forwards",
        animationDelay: 0.75 + 0.15 * pos + `s`,
      }}>{space ? '\u00A0' : children}</span >
  )
}

export default SpanSpin