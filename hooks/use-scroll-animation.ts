"use client"

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isVisible }
}

export function useMultipleScrollAnimation(count: number, threshold = 0.1) {
  const refs = useRef<(HTMLElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(element)
          }
        },
        { threshold }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [count, threshold])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }

  return { setRef, visibleItems }
}
