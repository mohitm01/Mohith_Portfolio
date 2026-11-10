import { useEffect, useState } from 'react'
import { useReveal, prefersReducedMotion } from './hooks.js'

export default function CountUp({ to, pad = 0, duration = 1200 }) {
  const [ref, visible] = useReveal(0.4)
  const [value, setValue] = useState(prefersReducedMotion() ? to : 0)

  useEffect(() => {
    if (!visible || prefersReducedMotion()) {
      if (visible) setValue(to)
      return
    }
    let raf
    const start = performance.now()
    const tick = now => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * to))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, to, duration])

  return <span ref={ref}>{String(value).padStart(pad, '0')}</span>
}
