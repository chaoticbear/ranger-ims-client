type Incident = {
  created: string
  event: string
  incident_reports: any[]
  incident_types: any[]
  location: IncidentLocation
  number: number
  priority: number
  ranger_handles: any[]
  report_entries: ReportEntry[]
  state: string
  summary: string
}

type IncidentLocation = {
  concentric: string
  description: string
  name: string
  radial_hour: string
  radial_minute: string
  type: string
}

type ReportEntry = {
  author: string
  created: string
  system_entry: boolean
  text: string
}

export type { Incident }
