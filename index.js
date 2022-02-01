import exprss from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
const app = exprss();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Graph ql server is fine");
});
const root = { hello: () => "Hi i am graphql" };
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port, () => console.log("everything is fine"));
