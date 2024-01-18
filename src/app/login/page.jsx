import React from 'react'

export default function Login() {
    return (
      <form className="container mx-auto basis-1/2" action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" formAction="/auth/sign-up">Sign Up</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" formAction="/auth/logout">Sign Out</button>
      </form>
    )
  }