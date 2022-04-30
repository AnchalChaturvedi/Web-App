import React from "react"
import { FaMusic } from "react-icons/fa"

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary m-1"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        <FaMusic /> Library
      </button>
    </div>
  )
}

export default Nav
