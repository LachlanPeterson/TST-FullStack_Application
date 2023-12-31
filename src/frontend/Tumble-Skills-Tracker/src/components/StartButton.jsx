import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const StartButton = ({student, assessSkills}) => {
  const nav = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      // Store the selected student and assessment skills in local storage
      localStorage.setItem('student', JSON.stringify(student))
      localStorage.setItem('assessment', JSON.stringify(assessSkills))
      setIsLoading(false)
      // Navigate to the assessment start page
      nav('/new/start')
    }
  }, [isLoading])

  // Function to handle the click of the assessment start button
  async function submit(event) {
    event.preventDefault()
    setIsLoading(true)
  }

  return (
    <>
      <Button variant="primary" onClick={submit}>
      {isLoading? '...' : 'Start Assessment'}</Button>
    </>
  )
}

export default StartButton