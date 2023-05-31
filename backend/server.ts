import express from "express";
import { Express, Request, Response } from "express";
import cors from "cors";


const port = 8000;

const app: Express = express();

app.use(cors({origin: "http://localhost:5173"}));

app.get('/api/data', (req: Request, res: Response) => {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    res.json(data);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });