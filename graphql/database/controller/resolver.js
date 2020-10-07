//Models
import Task from "../models/taskModel";

//Controller -> GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with GraphQL";
    },
    greet(root, { name }, ctx) {
      console.log(name);
      console.log(ctx);
      return `Hello ${name}!`;
    },
    async tasks() {
      return await Task.find();
    },
  },
  Mutation: {
    async createTask(_, { input }) {
      if (!input.done) {
        input.done = false;
      }
      console.log(input);
      const newTask = new Task(input);
      await newTask.save();
      return newTask;
    },
    async deleteTask(_, { _id }) {
      return await Task.findByIdAndDelete(_id);
    },
    async updateTask(_, { _id, input }) {
      if (!input.done) {
        input.done = false;
      }
      return await Task.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};

export default resolvers;
