import cookieParser from "cookie-parser"
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import {dbConnection} from "./utils/index.js";
import routes from "./routes/index.js";
import { RoutesNotFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();


dbConnection();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true

}));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));


 app.use("/api", routes);
app.use(RoutesNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

