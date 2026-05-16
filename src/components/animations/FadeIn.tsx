import React, { useEffect, useState, useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // نوقف المراقبة بمجرد ظهوره لكي لا يختفي ويعود مرة أخرى
          if (domRef.current) observer.unobserve(domRef.current)
        }
      },
      { threshold: 0.1 }, // يبدأ الأنيميشن عندما يظهر 10% من العنصر
    )

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    switch (direction) {
      case 'up':
        return 'translate-y-12'
      case 'down':
        return '-translate-y-12'
      case 'left':
        return 'translate-x-12' // سيتم عكسه تلقائياً في RTL بواسطة Tailwind إذا استخدمت الخصائص المنطقية، لكن هنا نستخدم اتجاهات ثابتة
      case 'right':
        return '-translate-x-12'
      default:
        return ''
    }
  }

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
