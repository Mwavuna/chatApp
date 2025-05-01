import express from 'express';
import userRoutes from './routes/users.js';
import postRoutes from "./routes/posts.js";
import likeRoutes from './routes/likes.js';
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

//middleware:linking the frontend and backend
app.use(express.json());
app.use(cors())
app.use(cookieParser)


app.use("/api/Users", userRoutes);
app.use("/api/Posts", postRoutes)
app.use("/api/Likes", likeRoutes);
app.use("/api/Comments", commentRoutes)
app.use("/api/auth", authRoutes)


app.listen(8000, () => {
    console.log('Server is running on port 8000');
}
);