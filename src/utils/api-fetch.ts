import type { Incident } from '../types'
import storage from 'react-secure-storage'

type ApiFetchProps = {
  method?: string
  path: string
  query?: string
}

const apiFetch = async ({
  method = 'GET',
  path,
  query,
}: ApiFetchProps): Promise<Incident | Incident[] | false> => {
  const token = storage.getItem('ims_token')

  try {
    const response = await fetch(path, {
      body: JSON.stringify(query),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method,
    })

    const result = await response.json()

    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)

    return false
  }
}

export { apiFetch }
