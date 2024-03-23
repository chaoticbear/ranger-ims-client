import { useGetIncidents } from "../../hooks"
import type { Incident } from "../../types"
import IncidentListItem from "../IncidentListItem"
import { IonContent, IonList } from "@ionic/react"
import { useEffect, useState } from "react"

const IncidentList = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])

  useEffect(() => {
    const getIncidents = async () => {
      setIncidents( await useGetIncidents({ eventYear: "2030" }) || [] )
    }

    if (incidents.length === 0) {
      getIncidents()
    }
  }, [])

  return (
    <IonContent>
      {incidents.length > 0 &&
        <IonList>
          {incidents.map(incident => <IncidentListItem incident={incident} key={incident.number} />)}
        </IonList>
      }
    </IonContent>
  )
}

export default IncidentList
