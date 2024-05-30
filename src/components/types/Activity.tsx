import { Business } from './Business'

export type Activity = {
  id: number
  company_id: number
  name: string
  price: number
  is_public: boolean
  public_name?: string
  generate_invoice: boolean
  max_sessions: number
  mp_available: boolean
  start_date: Date
  end_date: Date
  payment_type: string
}

export interface PropsAddActivity {
  business: Business | null
  name: string
  price: string
  is_public: string
  generate_invoice: string
  mp_available: string
  public_name: string | undefined
  max_sessions: string
  start_date: Date
  end_date: Date
  payment_type: string
}

export interface FormErrors {
  business?: string
  name?: string
  price?: string
  is_public?: string
  generate_invoice?: string
  max_sessions?: string
  mp_available?: string
  start_date?: string
  end_date?: string
  payment_type?: string
  public_name?: string
  [key: string]: string | undefined
}

export const initialData = {
  business: null,
  name: '',
  price: '',
  is_public: 'false',
  generate_invoice: 'false',
  mp_available: 'false',
  public_name: '',
  max_sessions: '',
  start_date: new Date(),
  end_date: new Date(),
  payment_type: 'Por sesión'
}

export interface Columns {
  company: boolean
  name: boolean
  price: boolean
  is_public: boolean
  generate_invoice: boolean
  mp_available: boolean
  public_name: boolean
  max_sessions: boolean
  start_date: boolean
  end_date: boolean
  payment_type: boolean
}

export const initialColumns = {
  company: true,
  name: true,
  price: true,
  is_public: true,
  generate_invoice: true,
  mp_available: true,
  public_name: true,
  max_sessions: true,
  start_date: true,
  end_date: true,
  payment_type: true
}
