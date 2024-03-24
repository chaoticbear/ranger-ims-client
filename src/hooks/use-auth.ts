import type { Login } from '../types'
import { apiFetch } from '../utils'
import type { ErrorResult, LoginResult } from '../utils/api-fetch'
import storage from 'react-secure-storage'

const useAuth = async ({ password, username }: Login) => {
  const result = await apiFetch({
    method: 'POST',
    path: '/api/auth',
    query: {
      identification: username,
      password,
    },
  })

  if (result && Object.hasOwn(result, 'error')) {
    const errorResult = result as ErrorResult

    return { error: errorResult.error, success: false }
  }

  if (result && Object.hasOwn(result, 'token')) {
    const loginResult = result as LoginResult

    storage.setItem('ims_token', loginResult.token)

    return { error: false, success: true }
  }

  return { error: 'Unknown Error', success: false }
}

export { useAuth }
