import Article from "../../models/articleModel";

const Mutation = {
  createArticle: async (_, { input }, { pubsub }) => {
    console.log(input);
    const newArticle = new Article(input);
    await newArticle.save();
    pubsub.publish("CHAT_CHANNEL", { articleSent: newArticle });
    return newArticle;
  },

  deleteArticle: async (_, { _id }) => {
    return await Article.findByIdAndDelete(_id);
  },

  updateArticle: async (_, { _id, input }) => {
    return await Article.findByIdAndUpdate(_id, input, { new: true });
  },
};

export default Mutation;
