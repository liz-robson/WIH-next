import React from 'react'

export default function Login() {
    return (
      <>
      <div className="my-8 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-4 sm:space-x-6 flex-col">
      <h1 className="mx-auto">SIGN IN</h1>

      <form className="flex flex-col space-x-4 space-y-4 mx-auto" action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input className="mx-auto bg-gray h-8" name="email" />
        <label htmlFor="password">Password</label>
        <input className="mx-auto bg-gray h-8" type="password" name="password" />
        <button className="bg-blue text-white py-2 px-4 rounded max-w-40">SIGN IN</button>
        <button className="bg-blue text-white py-2 px-4 rounded max-w-40" formAction="/auth/sign-up">SIGN UP</button>
        <button className="max-w-40" formAction="/auth/logout">SIGN OUT</button>
      </form>
      </div>
      </>
    )
  }
