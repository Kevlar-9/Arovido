import { useLayoutEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router"
import { ChevronsRight } from 'lucide-react';

function Navigation(){
  const location = useLocation()
  const navigationRef = useRef(null)
  const indicatorRef = useRef(null)
  const linkRefs = useRef([])
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/collection", label: "Collection" },
    { to: "/about", label: "About Us" },
    { to: "/brands", label: "Brands" },
    { to: "/contact", label: "Contact Us" },
  ]
  const activeIndex = links.findIndex(({ to }) => to === location.pathname)

  useLayoutEffect(() => {
    const navigation = navigationRef.current
    const indicator = indicatorRef.current

    if (!navigation || !indicator) return

    const positionIndicator = () => {
      const activeLink = linkRefs.current[activeIndex]

      if (!activeLink) {
        indicator.style.opacity = "0"
        return
      }

      indicator.style.opacity = "1"
      indicator.style.width = `${activeLink.offsetWidth}px`
      indicator.style.transform = `translateX(${activeLink.offsetLeft}px)`
    }

    positionIndicator()
    const observer = new ResizeObserver(positionIndicator)
    observer.observe(navigation)

    return () => observer.disconnect()
  }, [activeIndex])

  return (
    <div
      ref={navigationRef}
      className="relative bg-white w-190 h-14 rounded-4xl p-1 flex items-center justify-center gap-1 text-[14.5px]"
    >
      <span
        ref={indicatorRef}
        aria-hidden="true"
        className="absolute left-0 top-1 z-0 h-12 rounded-4xl bg-[#730A0A] opacity-0 transition-[transform,width] duration-500 ease-in-out motion-reduce:transition-none"
      />
      {links.map(({ to, label, end }, index) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          aria-label={label}
          ref={(element) => { linkRefs.current[index] = element }}
          className={({ isActive }) =>
            `relative z-10 cursor-pointer w-full h-12 flex justify-center items-center rounded-4xl transition-colors duration-300 ease-in-out ${
              isActive ? "text-white" : "text-black"
            } ${to === "/contact" ? "gap-2" : ""}`
          }
        >
          {label}
          {to === "/contact" && <ChevronsRight />}
        </NavLink>
      ))}
    </div>
  )
}

export default Navigation