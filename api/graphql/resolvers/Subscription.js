const CHAT_CHANNEL = "CHAT_CHANNEL";

const Subscription = {
  articleSent: {
    subscribe: (root, args, { pubsub }) => {
      return pubsub.asyncIterator(CHAT_CHANNEL);
    },
  },
};

export default Subscription;
