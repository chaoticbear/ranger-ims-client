import { LoginContext } from '../../contexts/login'
import { useAuth } from '../../hooks'
import type { Login as LoginProps } from '../../types'
import { IonButton, IonContent, IonInput, IonItem, IonList } from '@ionic/react'
import type { FC} from 'react'
import  { useContext, useEffect, useState } from 'react'

const LoginDialog: FC = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ disabled, setDisabled ] = useState(true)
  const { setLoggedIn } = useContext(LoginContext)

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault()

        handleSubmit({ password, username })
      }
    }
    document.addEventListener('keyup', keyHandler)

    return () => {
      document.removeEventListener('keyup', keyHandler)
    }
  }, [])

  useEffect(() => {
    if(password !== '' && username !== '') setDisabled(false)
  }, [password, username])

  const handleSubmit = async ({ password, username }: LoginProps) => {
    if (disabled) {
      return
    }

    const {success} = await useAuth({password, username})

    if(success) {
      setLoggedIn({loggedIn: true, username})
    }
  }

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonInput label="Handle" labelPlacement="floating" onIonInput={(e) => setUsername(e.detail.value || '')} value={username}></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Password" labelPlacement="floating"  onIonInput={(e) => setPassword(e.detail.value || '')} type="password" value={password}></IonInput>
        </IonItem>
      </IonList>
      <IonButton disabled={disabled} onClick={() => handleSubmit({ password, username })}>Login</IonButton>
    </IonContent>
  )
}

export default LoginDialog
