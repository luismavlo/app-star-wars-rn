export interface CharacterResponse {
  message:       string;
  total_records: number;
  total_pages:   number;
  previous:      null;
  next:          string;
  results:       CharacterResult[];
}

export interface CharacterResult {
  uid:  string;
  name: string;
  url:  string;
}
