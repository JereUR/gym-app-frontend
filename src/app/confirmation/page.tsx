'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ConfirmationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const confirmation_token = searchParams.get('confirmation_token')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://d494-190-191-171-9.ngrok-free.app/confirmation?confirmation_token=${confirmation_token}`
      )

      console.log(response)

      if (!response.ok) {
        toast({
        variant: 'destructive',
        title: 'Oh no! Algo salió mal.',
        description: response.status
      })
        console.error('Error en la petición:', response.status)
        return
      }
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [confirmation_token])

  return (
    <div>
      <h1>ConfirmationPage</h1>
      <Button onClick={() => router.replace('/iniciar-sesion')}>
        Iniciar Sesión
      </Button>
    </div>
  )
}