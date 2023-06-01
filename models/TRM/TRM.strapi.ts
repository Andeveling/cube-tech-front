export interface TRMResponse {
  data: TRMData;
}

export interface TRMI {
  USDCOP: number;
}

interface TRMData {
  attributes: TRMAttributes;
  id: number;
}

interface TRMAttributes extends TRMI {
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
}
