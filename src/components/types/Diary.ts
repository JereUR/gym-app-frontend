export type Diary = {
  id: number
  company_id: number
  activity: { id: number; name: string }
  type_schedule: string
  date_from: string
  date_until: string
  time_from: string
  time_until: string
  days_available: boolean[]
  repeat_for?: number
  offer_days?: boolean[]
  term_duration: number
  amount_of_people: number
  is_active: boolean
  genre_exclusive: string
  works_holidays: boolean
  observations?: string
}

export const scheduleTypes = ['Por turnos', 'Libre']

export const genreTypes = ['No', 'Masculino', 'Femenino']

export interface PropsAddDiary {
  id?: number | null
  activity: { id: number; name: string }
  type_schedule: string
  date_from: Date
  date_until: Date
  time_from: string
  time_until: string
  days_available: boolean[]
  repeat_for: number
  offer_days: boolean[]
  term_duration: number
  amount_of_people: number
  is_active: string
  genre_exclusive: string
  works_holidays: string
  observations: string
  [key: string]:
    | string
    | undefined
    | boolean
    | Date
    | number
    | null
    | boolean[]
    | { id: number; name: string }
}

export const initialData: PropsAddDiary = {
  activity: { id: 0, name: '' },
  type_schedule: '',
  date_from: new Date(),
  date_until: new Date(),
  time_from: '',
  time_until: '',
  days_available: Array(7).fill(false),
  repeat_for: 0,
  offer_days: Array(7).fill(false),
  term_duration: 0,
  amount_of_people: 0,
  is_active: 'false',
  genre_exclusive: 'No',
  works_holidays: 'false',
  observations: ''
}

export interface Columns {
  id: boolean
  activity: boolean
  type_schedule: boolean
  date_from: boolean
  date_until: boolean
  time_from: boolean
  time_until: boolean
  days_available: boolean
  repeat_for?: boolean
  offer_days?: boolean
  term_duration: boolean
  amount_of_people: boolean
  is_active: boolean
  genre_exclusive: boolean
  works_holidays: boolean
  observations?: boolean
}

export const initialColumns: Columns = {
  id: true,
  activity: true,
  type_schedule: true,
  date_from: true,
  date_until: true,
  time_from: true,
  time_until: true,
  days_available: true,
  repeat_for: true,
  offer_days: true,
  term_duration: true,
  amount_of_people: true,
  is_active: true,
  genre_exclusive: true,
  works_holidays: true,
  observations: true
}

export interface ExcelData {
  ID?: number
  Tipo?: string
  Actividad?: string
  Fecha_inicio?: string
  Fecha_fin?: string
  Horario_desde?: string
  Horario_hasta?: string
  Dias_habilitados?: string
  Repetir_por?: number
  Días_de_ofertas?: string
  Duración?: number
  Cantidad_de_personas?: number
  Activa?: string
  Exclusividad_de_géneros?: string
  Trabaja_feriados?: string
  Observaciones?: string
}

export interface FormErrors {
  activity?: string
  type_schedule?: string
  date_from?: string
  date_until?: string
  time_from?: string
  time_until?: string
  days_available?: string
  repeat_for?: string
  offer_days?: string
  term_duration?: string
  amount_of_people?: string
  is_active?: string
  genre_exclusive?: string
  works_holidays?: string
  observations?: string
  [key: string]: string | undefined
}

export const initialErrors: FormErrors = {
  activity: '',
  type_schedule: '',
  date_from: '',
  date_until: '',
  time_from: '',
  time_until: '',
  days_available: '',
  repeat_for: '',
  offer_days: '',
  term_duration: '',
  amount_of_people: '',
  is_active: '',
  genre_exclusive: '',
  works_holidays: '',
  observations: ''
}

export const daysOfWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
]

export const daysOfWeekCut = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
