'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ToolsOuterLayout({ children, page, isRssFeed = false }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  if (isRssFeed) {
    return children
  }

  return (
    <Container className="mt-16 lg:mt-32">
    <div></div>
        {children}
    </Container>
  )
}
