import LoginDialog from '../../components/LoginDialog'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import { useParams } from 'react-router'

const LoginPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>()
  const [showModal, setShowModal] = useState(true)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonModal isOpen={showModal}>
          <LoginDialog setShowModal={setShowModal} />
        </IonModal>

      </IonContent>
    </IonPage>
  )
}

export default LoginPage
