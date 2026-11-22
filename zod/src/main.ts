import { z } from "zod";
const mySchema = z.boolean();
const someVar = true;

const UserSchema = z
  .object({
    name: z.string(),
    age: z.number().int(),
    isCool: z.boolean().optional(),
    secretCode: z.string().min(8, "At least 8 character"),
    jobDetails: z.object({
      role: z.string(),
      salary: z.number(),
    }),
  })
  .required();
const myUser = {
  name: "Nahid Hasan",
  age: 18,
  isCool: true,
  //   secretCode: "Nahid24$",
  jobDetails: {
    role: "Sr Web Engineer",
    salary: 18000,
  },
};
console.log(mySchema.parse(someVar));
console.log(UserSchema.parse(myUser));
