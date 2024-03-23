import IncidentList from '../components/IncidentList'
import IncidentView from '../components/IncidentView'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'

import './Page.css'

const Page: React.FC = () => {
  const { item, name } = useParams<{ item?: string, name: string; }>()

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
      </IonContent>
    </IonPage>
  )
}

export default Page
