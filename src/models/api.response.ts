import { IUsers } from "./user";

export interface IApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUsers;
}

export interface IApiError {
  response: {
    data: {
      message: string;
    };
  };
}

export type IPageParams = Pick<IApiResponse, "page" | "per_page">;
