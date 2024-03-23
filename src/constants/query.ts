export interface ProductQueryParams {
  id: string;
  search: string;
  page: number;
  limit: number;
  order_by: string;
  sort: "ASC" | "DESC";
}
