import exprss from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
const app = exprss();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Graph ql server is fine");
});
const root = {
  electronics: () => {
    return {
      id: 1990,
      firstName: "Vacuam",
      lastName: "tube",
      components: [
        {
          component: "Resistors,capacitors",
        },
        {
          component: "mika,ceramic,polar",
        },
      ],
    };
  },
};
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port, () => console.log("everything is fine"));
