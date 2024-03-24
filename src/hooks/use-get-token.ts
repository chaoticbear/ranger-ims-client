import storage from 'react-secure-storage'

const useGetToken = () => {
  const token = storage.getItem('ims_token') as string

  if (token === '') return false

  return token
}

export { useGetToken }
