import Article from "../../models/articleModel";

const Query = {
  ping: () => {
    return "Pong!";
  },
  articles: async () => {
    return await Article.find();
  },
};

export default Query;
