const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const ConnectDB = require("./config/DB");
const PORT = process.env.PORT || 5000;

ConnectDB();
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`App is Runing on port:${PORT}`);
});
