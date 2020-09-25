import * as React from "react"

import { Styled } from "./Cursor.style"

export interface IProps {
  className?: string
}

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor: React.FC<IProps> = () => {
  if (typeof navigator !== "undefined" && isMobile()) return null

  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [clicked, setClicked] = React.useState(false)
  const [linkHovered, setLinkHovered] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  React.useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  return (
    <Styled.Cursor
      className={`cursor ${clicked === true && `cursor--clicked`} ${
        hidden === true && `cursor--hidden`
      } ${linkHovered === true && `cursor--link-hovered`}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}

export default Cursor
