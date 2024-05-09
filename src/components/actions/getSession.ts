import axios from 'axios'
import { NextRequest } from 'next/server'
import { User } from '../types/User'
import { cookies } from 'next/headers'

/* export default async function getSession() {
  let session = null
  await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((json) => {
      session = json
    })
  return { session }
} */

export default async function getSession(req: NextRequest) {
  const sessionToken = cookies().get('session')?.value
  let session: any = null

  if (!sessionToken) {
    return null
  } /* 

  return {
    id: 2,
    first_name: 'Jeremias',
    last_name: 'DV',
    email: 'jeremias.jdv@gmail.com',
    photo_url: null,
    token: sessionToken.toString()
  } */

  const headers = {
    Origin: 'http://localhost:3001/',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${sessionToken}`
  }

  try {
    await fetch(
      'https://c8ad-190-191-171-9.ngrok-free.app/api/v1/currentuser',
      {
        credentials: 'include',
        headers: headers
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if (data.status === 200 || data.status === 204) {
          session = data
        }
      })
      .catch((error) => {
        return new Error(error)
      })
      .finally(() => {
        return session
      })
  } catch (error) {
    console.error('Error validating session:', error)
    return null
  }

  return session
}
