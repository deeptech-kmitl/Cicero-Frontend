export interface ProductQueryParams {
  id: string;
  search: string;
  page: number;
  limit: number;
  order_by: string;
  sort: "ASC" | "DESC";
}

export enum SearchProductField {
  ID = "id",
  TITLE = "search",
  PAGE = "page",
  LIMIT = "limit",
  ORDER_BY = "order_by",
  SORT = "sort",
}
