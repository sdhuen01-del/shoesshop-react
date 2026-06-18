import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('start')
  }, [])

  useEffect(() => {
    console.log('hello')
    console.log(count)
  }, [count])

  return (
    <div>
      About 페이지
      <Outlet />

      <button
        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700"
        onClick={() => setCount(prev => prev + 1)}
      >
        버튼
      </button>
    </div>
  )
}

export default About