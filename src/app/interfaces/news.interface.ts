export interface News {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  short_url: string;
  multimedia: Multimedia[];
}

export interface Multimedia {
  url: string;
  format: string;
  height: string;
  width: string;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  rank?: string;
  credit?: string;
  crop_name?: string;
  legacy?: Legacy;
}

export interface FilterNews {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  type_of_material: string;
  _id: string;
  word_count: string;
  uri: string;
  keywords: Keywords[];
  byline: Byline;
  headline: Headline;
}

export interface Keywords {
  name: string;
  value: string;
  major: string;
  rank: number;
}

export interface Byline {
  original: string;
  person: string[];
  organization: string;
}

export interface Legacy {
  thumbnail: string;
  thumbnailwidth: string;
  thumbnailheight: string;
}

export interface Headline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface NewsSearchData {
  docs: FilterNews[];
  meta: Meta;
}
