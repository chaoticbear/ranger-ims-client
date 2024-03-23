import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react'
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons'
import { useLocation } from 'react-router-dom'

import './Menu.css'

interface AppPage {
  iosIcon: string;
  mdIcon: string;
  title: string;
  url: string;
}

const appPages: AppPage[] = [
  {
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    title: 'Incidents',
    url: '/screens/incidents',
  },
  {
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    title: 'Incident Reports',
    url: '/screens/incident_reports',
  },
]

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage) => {
            return (
              <IonMenuToggle autoHide={false} key={appPage.title}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} detail={false} lines="none" routerDirection="none" routerLink={appPage.url}>
                  <IonIcon aria-hidden="true" ios={appPage.iosIcon} md={appPage.mdIcon} slot="start" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  )
}

export default Menu
