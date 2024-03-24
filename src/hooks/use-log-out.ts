import storage from 'react-secure-storage'

const useLogOut = () => {
  storage.removeItem('ims_token')
  storage.removeItem('logged_in_user')
}

export { useLogOut }
