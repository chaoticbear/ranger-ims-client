import { useAuth } from '../../hooks'
import type { Login as LoginProps } from '../../types'
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import React, { useState } from 'react'

type LoginDialogProps = {
  setShowModal: (value: boolean) => void
}

const LoginDialog: React.FC<LoginDialogProps> = ({ setShowModal }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async ({ password, username }: LoginProps) => {
    const {success} = await useAuth({password, username})

    success && setShowModal(false)
  }

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Handle</IonLabel>
          <IonInput onIonChange={(e) => setUsername(e.detail.value || username)} value={username}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput onIonChange={(e) => setPassword(e.detail.value || password)} type="password" value={password}></IonInput>
        </IonItem>
      </IonList>
      <IonButton onClick={() => handleSubmit({ password, username })}>Login</IonButton>
    </IonContent>
  )
}

export default LoginDialog
