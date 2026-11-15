import express, { Request, Response } from 'express';
import { pool } from './database/db.js';

const app = express();
app.use(express.json());

app.get('/health', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    return res.json({
      status: 'online',
      databaseTime: result.rows[0].now,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});