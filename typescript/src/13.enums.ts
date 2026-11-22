export {};

// Number enum
enum Direction {
  Up = 2,
  Down,
  Left,
  Right,
}
let dir: Direction = Direction.Right;

// String enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}
let status: Status = Status.Approved;

// Const enum (more performant)
const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
function handleResponse(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  }
}
handleResponse(HttpStatus.OK);
