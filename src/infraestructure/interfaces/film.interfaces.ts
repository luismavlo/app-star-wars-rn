export interface FilmsResponse {
  message: string;
  result:  FilmResult[];
}

export interface FilmResult {
  properties:  FilmProperties;
  description: string;
  _id:         string;
  uid:         string;
  __v:         number;
}

export interface FilmProperties {
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       Date;
  edited:        Date;
  producer:      string;
  title:         string;
  episode_id:    number;
  director:      string;
  release_date:  Date;
  opening_crawl: string;
  url:           string;
}


export interface FilmDetailResponse {
  message: string;
  result:  FilmResult;
}

