import { LoginContext } from '../contexts/login'
import { useLogOut } from '../hooks'
import {
  IonButton,
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
import { useContext } from 'react'
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
  const {loggedIn: { loggedIn, username }, setLoggedIn } = useContext(LoginContext)

  // if(username !== '') setLoggedIn({loggedIn: true, username})

  const handleLogOut = () => {
    setLoggedIn({loggedIn: false, username: ''})
    useLogOut()
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {loggedIn && username ?
            <>
              <IonListHeader>Ranger {username}</IonListHeader>
              <IonButton onClick={handleLogOut} size="small">Log Out</IonButton>
            </>
          :
            <IonNote>Logged Out</IonNote>
          }
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
