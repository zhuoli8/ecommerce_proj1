import express from "express";
import { Express, Request, Response } from "express";
import cors from "cors";
import dbCon from "./src/model/DbCon";
import { FieldPacket, RowDataPacket } from "mysql2";

const port = 8000;

const app: Express = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/data", (req: Request, res: Response) => {
    const data = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];
    res.json(data);
});

dbCon.query("SELECT * FROM products", (err: Error | null, rows: RowDataPacket[], fields: FieldPacket[] | undefined) => {
    if (err) throw err;
    console.log("result: ", rows[1]);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
