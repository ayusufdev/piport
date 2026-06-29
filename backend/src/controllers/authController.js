// backend/src/controllers/authController.js

const users = []; // replace later with PostgreSQL

exports.piLogin = (req, res) => {
  const { pi_user_id, username } = req.body;

  let user = users.find((u) => u.pi_user_id === pi_user_id);

  if (!user) {
    user = {
      id: uuidv4(),
      pi_user_id,
      username,
      ppc_balance: 0,
      ppt_balance: 0,
    };
    users.push(user);
  }

  res.json({
    success: true,
    user,
  });
};
