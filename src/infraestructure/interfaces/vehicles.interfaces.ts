


export interface VehiclesResponse {
  message:       string;
  total_records: number;
  total_pages:   number;
  previous:      null;
  next:          string;
  results:       VehiclesResult[];
}

export interface VehiclesResult {
  uid:  string;
  name: string;
  url:  string;
}
