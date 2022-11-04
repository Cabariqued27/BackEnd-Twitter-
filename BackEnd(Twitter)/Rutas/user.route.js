const router = require("express").Router;

const validateUserPayload = (data) =>
  ["username", "password", "email", "bd", "bio"].every((key) =>
    data.hasOwnProperty(key)
  );

const route = router();

//registro
route.post("/", async (req, res) => {
  try {
    const validInfo = validateUserPayload(req.body);
    if (!validInfo) {
      return res
        .status(401)
        .json({ message: "One or more fields are missing" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});
module.exports = route;
