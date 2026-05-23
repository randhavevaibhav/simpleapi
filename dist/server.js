import express, {} from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (_, res) => {
    res.send("Server Started !!");
});
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);
    });
}
export default app;
//# sourceMappingURL=server.js.map