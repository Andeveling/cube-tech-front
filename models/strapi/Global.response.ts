export interface SingleStrapiResponse<T> {
  data: DataStrapi<T>;
  meta: Meta;
}

export interface CollectionStrapiResponse<T> {
  data: DataStrapi<T>[];
  meta: Meta;
}

export interface DataStrapi<T> {
  attributes: T;
  id: number;
}

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
