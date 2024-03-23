import type { Incident } from '../types'
import { apiFetch } from '../utils'

type UseGetIncidentsProps = {
  eventYear: string
}

const useGetIncidents = async ({
  eventYear,
}: UseGetIncidentsProps): Promise<Incident[]> => {
  const incidents = await apiFetch({
    path: `/api/events/${eventYear}/incidents/`,
  })

  if (!incidents) return []

  return incidents as Incident[]
}

export { useGetIncidents }
