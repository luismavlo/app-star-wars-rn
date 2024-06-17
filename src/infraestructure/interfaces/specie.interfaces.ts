export interface SpecieResponse {
  message:       string;
  total_records: number;
  total_pages:   number;
  previous:      null;
  next:          string;
  results:       SpecieResult[];
}

export interface SpecieResult {
  uid:  string;
  name: string;
  url:  string;
}
