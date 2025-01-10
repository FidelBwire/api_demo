export interface SiSearchParameters {
  PageNumber: number;
  PageSize: number;
  Code: string;
  Description: string;
}

export interface Si {
  code: string;
  description: string;
  itemGrouping: string;
}
