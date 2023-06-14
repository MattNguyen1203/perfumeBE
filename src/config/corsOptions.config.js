const whiteList = [
  "https://perfume-pi.vercel.app",
  "http://localhost:3000",
  "https://perfume-web.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin === "null" || whiteList.indexOf(origin) !== -1)
      return callback(null, true);
    else return callback(new Error("Not allowed by CORS"), false);
  },
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
};

export { whiteList, corsOptions };
