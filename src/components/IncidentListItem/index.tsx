import type { Incident } from "../../types"
import { convertDateTime } from "../../utils"
import { IonItem, IonLabel, IonNote } from "@ionic/react"
import type { FC } from "react"

type IncidentListItemProps = {
  incident: Incident
}

const IncidentListItem: FC<IncidentListItemProps> = ({ incident }) => {
  const formatedCreatedDate = convertDateTime(incident.created)

  return (
    <IonItem detail={false} routerLink={`/screens/incidents/${incident.number}`}>
      <div className="dot dot-unread" slot="start"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {/* {incident.rangers} */}
          <span className="date">
            <IonNote>{formatedCreatedDate}</IonNote>
          </span>
        </h2>
        {/* <h3>{incident.summary}</h3> */}
        {incident.summary &&
          <p>
            {incident.summary}
          </p>
        }
      </IonLabel>
    </IonItem>
)}

export default IncidentListItem
