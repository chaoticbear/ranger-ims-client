import { useAuth } from '../../hooks'
import type { Login as LoginProps } from '../../types'
import { IonButton, IonContent, IonInput, IonItem, IonList } from '@ionic/react'
import React, { useEffect, useState } from 'react'

type LoginDialogProps = {
  setShowModal: (value: boolean) => void
}

const LoginDialog: React.FC<LoginDialogProps> = ({ setShowModal }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ disabled, setDisabled ] = useState(true)

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
    if (disabled) return

    const {success} = await useAuth({password, username})

    success && setShowModal(false)
  }

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonInput label="Handle" labelPlacement="floating" onIonInput={(e) => setUsername(e.detail.value || username)} value={username}></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Password" labelPlacement="floating"  onIonInput={(e) => setPassword(e.detail.value || password)} type="text" value={password}></IonInput>
        </IonItem>
      </IonList>
      <IonButton disabled={disabled} onClick={() => handleSubmit({ password, username })}>Login</IonButton>
    </IonContent>
  )
}

export default LoginDialog
