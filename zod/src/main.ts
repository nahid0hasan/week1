import z from "zod";
const mySchema = z.boolean();
const someVar = true;

const UserSchema = z
  .object({
    id: z.uuid().optional(),
    name: z.string().startsWith("N").length(11),
    email: z.email(),
    fbURL: z.url(),
    startDate: z.date(),
    someRecord: z.record(z.string(), z.number()),
    someUndefined: z.undefined(),
    someNull: z.null(),
    someNullable: z.string().nullable(),
    someNullish: z.number().nullish(),
    someAny: z.any(),
    someUnknown: z.unknown(),

    age: z.number().min(18).max(25).int().default(7),
    liveYear: z.number().lt(3),
    isCool: z.boolean().optional(),
    secretCode: z.string().min(8, "At least 8 character"),
    jobDetails: z.object({
      role: z.string(),
      salary: z.number(),
    }),
    friends: z.array(z.string()),
    newAge: z.number().or(z.string()),
    show: z.literal([2, "open", "closed"]),
  })
  .strict();

type User = z.infer<typeof UserSchema>;
const myUser = {
  id: crypto.randomUUID(),
  name: "Nahid Hasan",
  email: "nahid@gmail.com",
  fbURL: "https://myurl.com",
  startDate: new Date(),
  someRecord: {
    bangla: 100,
    arabic: 90,
    science: 0,
  },
  someUndefined: undefined,
  someNull: null,
  someNullable: "dhaka",
  someNullish: 2,
  someAny: "nahid",
  someUnknown: 23,

  age: 18,
  liveYear: 2,
  isCool: true,
  secretCode: "Nahid24$",
  jobDetails: {
    role: "Sr Web Engineer",
    salary: 18000,
  },
  friends: ["hamad", "shamim"],
  newAge: "23",
  show: "open",
};
console.log(mySchema.parse(someVar));
console.log(UserSchema.safeParse(myUser));
const userData = (user: User): User => {
  return user;
};
// console.log("From Function", userData(myUser));
