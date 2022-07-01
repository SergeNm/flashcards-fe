import { rest } from "msw";

const baseURl = "https://api.github.com";
const data = [
  { login: "example", avatar_url: "avatar", type: "User" },
  { login: "example2", avatar_url: "avatar2", type: "User" },
];

const userHandlers = [
  rest.get(`${baseURl}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data), ctx.delay(100));
  }),
];

export default userHandlers;
