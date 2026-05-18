import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config";
import { initDB, pool } from "./db";
import { userRoute } from "./modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  //   res.send("Express Server");
  res.status(200).json({
    message: "Express Server",
    author: "Next Level",
  });
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
    SELECT * FROM users
     `);
    res.status(200).json({
      success: true,
      message: "Users retrieve successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT * FROM users WHERE id = $1
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("Requested user id:", id);
    return res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, password, is_active } = req.body;
  // console.log("ID: ", id);
  // console.log(name, age, password, is_active);

  try {
    const result = await pool.query(
      `
      UPDATE users
      SET name = COALESCE($1, name),
          age = COALESCE($2, age),
          password = COALESCE($3, password),
          is_active = COALESCE($4, is_active),
          updated_at = NOW()
      WHERE id = $5
      RETURNING *
      `,
      [name, age, password, is_active, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      DELETE FROM users WHERE id = $1 RETURNING *
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

export default app;
