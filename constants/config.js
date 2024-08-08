const corsOptions = {
  origin: [
    "https://chat-app-frontend-red.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATAPP_TOKEN = "chatapp-token";

export { corsOptions, CHATAPP_TOKEN };
