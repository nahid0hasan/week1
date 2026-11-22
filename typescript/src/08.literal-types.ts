// String literal types
let direction: "North" | "South" | "East" | "West";
// direction = "UP";
direction = "East";
// Numeric literal types
let diceRoll: 1 | 6 | 9 | 6;
// diceRoll = 4;
diceRoll = 6;
// Combining with other types
type SuccessResponse = {
  status: "success";
  date: any;
};
type ErrorResponse = {
  status: "error";
  message: string;
};
type ApiResponse = SuccessResponse | ErrorResponse;
