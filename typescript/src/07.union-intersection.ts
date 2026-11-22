// Union types (OR)
type Status = "Pending" | "Approved" | "Rejected";
function setStatus(status: Status): void {
  console.log(`Status set to ${status}`);
}
setStatus("Approved");
// Intersection types (AND)
interface MyColor {
  color: string;
}
interface MyCircle {
  radius: number;
}
type ColorFullCircle = MyColor & MyCircle;
let colorFullCirle: ColorFullCircle = {
  color: "Blue",
  radius: 20,
};
