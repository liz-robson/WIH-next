import Image from 'next/image'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Login from './login/page'

export default function Home() {

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  return (
    <div>
    <p className="text-3xl font-bold">Pairing Tool</p>
    <Login/>
    </div>
  )
}
