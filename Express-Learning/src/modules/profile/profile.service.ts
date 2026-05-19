import { pool } from "../../db";

const createProfileIntoDB = async (payload: any) => {
  //   console.log(payload);
  const { user_id, bio, address, phone, gender } = payload;
  //   first check if the user is exist
  const user = await pool.query(
    `
       SELECT * FROM user WHERE id =$1
    `,
    [user_id],
  );
  //   console.log(user);
  if (user.rows.length === 0) {
    throw new Error("User not found");
  }
};

export const profileService = {
  createProfileIntoDB,
};
