import type { APILogin, Incident } from '../types'
import storage from 'react-secure-storage'

type ApiFetchProps = {
  method?: string
  path: string
  query?: APILogin
}

type ErrorResult = {
  error: string
}

type LoginResult = {
  token: string
}

const apiFetch = async ({
  method = 'GET',
  path,
  query,
}: ApiFetchProps): Promise<
  ErrorResult | Incident | Incident[] | LoginResult | false
> => {
  const token = storage.getItem('ims_token')
  const hasToken = token && token !== ''

  if (path !== '/api/auth' && !hasToken) return false

  try {
    const response = await fetch(path, {
      body: JSON.stringify(query),
      headers: {
        ...(hasToken ? { Authorization: `Bearer ${token}` } : {}),
        'Content-Type': 'application/json',
      },
      method,
    })

    const result = await response.json()

    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)

    return {
      error,
    } as ErrorResult
  }
}

export type { ErrorResult, LoginResult }
export { apiFetch }
