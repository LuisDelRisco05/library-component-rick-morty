import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 320

export const useIsMobileOrTablet = (): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const handleResize = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches)

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return isMobile
}
