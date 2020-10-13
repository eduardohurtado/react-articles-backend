import Article from "../../models/articleModel";

const Mutation = {
  createArticle: async (_, { input }) => {
    console.log(input);
    const newArticle = new Article(input);
    return await newArticle.save();
  },

  deleteArticle: async (_, { _id }) => {
    return await Article.findByIdAndDelete(_id);
  },

  async updateArticle(_, { _id, input }) {
    return await Article.findByIdAndUpdate(_id, input, { new: true });
  },
};

export default Mutation;
