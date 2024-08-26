export interface IError {
  statusCode?: number;
  code?: string;
  message?: string;
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
}

export interface IRequestBody<T> {
  data: T;
}

export interface IParams<T> {
  params: T;
}

export interface IIdParams {
  Id: string;
}

export interface IIdBody {
  Id: string;
}
