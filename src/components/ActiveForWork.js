'use client'

import { useState } from 'react'

export default function ActiveForWork() {
  const [openForWork, setOpenForWork] = useState(true)

  return <span>{openForWork ? 'Open for Work' : 'Closed for Work'}</span>
}
