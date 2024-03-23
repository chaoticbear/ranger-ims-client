import type { APILogin, Login } from '../types'
import storage from 'react-secure-storage'

type LoginResult = {
  error?: string
  token?: string
}

const imsLogin = async (credentials: APILogin): Promise<LoginResult> => {
  try {
    const response = await fetch('/api/auth', {
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await response.json()
    // console.log("Success:", result);

    return {
      token: result.token,
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)

    return {
      error,
    } as LoginResult
  }
}

const useAuth = async ({ password, username }: Login) => {
  const { error, token } = await imsLogin({
    identification: username,
    password,
  })

  if (error) return { error }

  token && storage.setItem('ims_token', token)

  return { success: true }
}

export { useAuth }
