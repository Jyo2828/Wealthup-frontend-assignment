"use client";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${inView ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
