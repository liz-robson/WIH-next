import React from 'react'

export default function Login() {
    return (
      < div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <form className="flex flex-col space-x-4" action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button className="max-w-40">Sign In</button>
        <button className="max-w-40" formAction="/auth/sign-up">Sign Up</button>
        <button className="max-w-40" formAction="/auth/logout">Sign Out</button>
      </form>
      </div>
    )
  }
