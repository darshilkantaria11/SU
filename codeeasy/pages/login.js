import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-6xl font-bold mb-3 xl:font-semibold">Log In</h1>
      <p className="text-gray-500 mb-4">
        Don't have an account?{' '}
        <Link className="text-blue-500 hover:underline" href={'/signup'}>Sign Up</Link>
      </p>
      <form className="w-96 p-6 rounded-lg shadow-lg bg-white mb-6">
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          className="w-full border xl:font-normal border-blue-500 xl:text-blue-600 hover:bg-blue-500 hover:border-blue-700 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          type="submit"
        >
          Log In
        </button>

      </form>
      <div className="flex w-96 justify-between">
        <hr className="w-1/3" />
        <p className="text-gray-500 mx-2">OR</p>
        <hr className="w-1/3" />
      </div>
      <button
        className="w-96 bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-bold py-2 px-4 rounded-full my-4 shadow-lg flex items-center justify-center"
      >
        <img
          className="h-6 w-6 mr-2"
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google logo"
        />
        Log in with Google
      </button>

    </div>
  )
}

export default Login