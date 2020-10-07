import { makeExecutableSchema } from "graphql-tools";
import resolvers from "../controller/resolver";

const typeDefs = `
    type Query{
        hello: String
        greet(name: String!): String
        tasks: [Task]
    }

    type Mutation{
        createTask(input: TaskInput): Task
        deleteTask(_id: ID): Task
        updateTask(_id: ID, input: TaskInput): Task
    }

    type Task{
        _id: ID
        title: String!
        description: String!
        done: Boolean
    }

    input TaskInput{
        title: String!
        description: String!
        done: Boolean
    }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
