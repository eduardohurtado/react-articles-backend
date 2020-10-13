import server from "./server/server";
import express from "express";
import morgan from "morgan";
import path from "path";
import "./database/database";

server.use(morgan("dev"));
server.express.use("/", express.static(path.join(__dirname, "../../build")));

const options = {
  port: process.env.PORT || 8080,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

server.start(options, ({ port }) => {
  console.log(">>> Server on port: ", port);
});
