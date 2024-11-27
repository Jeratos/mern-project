import React from 'react'
import { Link } from 'react-router-dom'
export default function error() {
  return (
    <>
      <h1>An Error </h1>
      <h3>go back to home page</h3>
      <Link to="/" >Home</Link>
    </>
  )
}
