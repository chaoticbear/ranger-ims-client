import type { Incident } from '../types'
import { apiFetch } from '../utils'

type UseGetIncidentProps = {
  eventYear: string
  incidentNumber: string
}

const useGetIncident = async ({
  eventYear,
  incidentNumber,
}: UseGetIncidentProps): Promise<Incident | false> => {
  const incident = await apiFetch({
    path: `/api/events/${eventYear}/incidents/${incidentNumber}`,
  })

  if (!incident) return false

  return incident as Incident
}

export { useGetIncident }
