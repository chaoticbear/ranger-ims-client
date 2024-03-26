import IncidentList from '../components/IncidentList'
import IncidentView from '../components/IncidentView'
import LoginDialog from '../components/LoginDialog'
import { LoginContext } from '../contexts/login'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useContext} from 'react'
import { useParams } from 'react-router'

import './Page.css'

const Page: React.FC = () => {
  const { item, name } = useParams<{ item?: string, name: string; }>()
  const { loggedIn: { loggedIn } } = useContext(LoginContext)

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
        {name === "incidents" && !item &&
          <IncidentList />
        }
        {name === "incidents" && item &&
          <IncidentView item={ item } />
        }
        <IonModal isOpen={!loggedIn}>
          <LoginDialog />
        </IonModal>
      </IonContent>
    </IonPage>
  )
}

export default Page
