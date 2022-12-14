// import { IStatusCode } from '../interfaces/IStatusCode';

enum StatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  UNPROCESSABLE = 422,
}

export default StatusCode;
