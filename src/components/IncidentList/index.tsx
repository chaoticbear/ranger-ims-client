import { LoginContext } from "../../contexts/login"
import { useGetIncidents } from "../../hooks"
import type { Incident } from "../../types"
import IncidentListItem from "../IncidentListItem"
import { IonContent, IonList } from "@ionic/react"
import { useContext, useEffect, useState } from "react"

const IncidentList = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const {loggedIn: { loggedIn }} = useContext(LoginContext)

  useEffect(() => {
    const getIncidents = async () => {
      if(!loggedIn) {
        setIncidents([])

        return
      }
      setIncidents( await useGetIncidents({ eventYear: "2030" }) || [] )
    }

    getIncidents()
  }, [loggedIn])

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
