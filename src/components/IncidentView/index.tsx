import { useGetIncident } from "../../hooks"
import type { Incident } from "../../types"
import { convertDateTime } from "../../utils"
import { IonContent, IonItem, IonLabel } from "@ionic/react"
import {  useEffect, useState } from "react"

type IncidentViewProps = {
  item: string
}

const IncidentView = ({ item }: IncidentViewProps) => {
  const [incident, setIncident] = useState<Incident | false>(false)
  const formatedCreatedDate = incident && convertDateTime(incident.created) || ""

  useEffect(() => {
    const getIncident = async () => {
      setIncident( await useGetIncident({ eventYear: "2030", incidentNumber: item }) || false )
    }

    if (!incident) {
      getIncident()
    }
  }, [])

  return (
    <IonContent>
      {incident ? (
        <>
          <IonItem>
            <IonLabel>
                <h2>IMS Number {incident.number}</h2>
                <h3>Date: {formatedCreatedDate}</h3>
                <p>Rangers: {incident.ranger_handles.join(", ")}</p>
                <p>State: {incident.state}</p>
                <p>Location: {incident.location.name}
                  {incident.location.radial_hour}:{incident.location.radial_minute} & {incident.location.concentric}
                  {incident.location.description}
                </p>
            </IonLabel>
          </IonItem>
            <h3>Summary</h3>
            {incident.summary &&
              <div>
                {incident.summary}
              </div>
            }
            <h3>Report Entries</h3>
            {incident.report_entries &&
              <div>
                {incident.report_entries.map((report) => (
                  <div key={`report-entry-${report.created}`}>
                    <p>{report.text}</p>
                    <p>{report.author} {report.created}</p>
                  </div>
                ))}
              </div>
            }
        </>
      ) : (
        <div>Message not found</div>
      )}
    </IonContent>
  )
}

export default IncidentView
