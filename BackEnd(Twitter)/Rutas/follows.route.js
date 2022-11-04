const router = require("express").Router;
const route = router();
const Follower = require("../Modelos/seguidor");
const Request = require("../Modelos/request");

route.get("/following", async (req, res) => {
  try {
    const { user_id } = req.query;
    const following = await Follower.find({ followingId: user_id });
    res.status(200).json({ users: following });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

route.get("/followers", async (req, res) => {
  try {
    const { user_id } = req.query;
    const followers = await Follower.find({ user_id });
    res.status(200).json({ users: followers });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

route.post("/response", async (req, res) => {
  try {
    const { request_id, action } = req.body;
    const { from_id, to_id } = await Request.findByIdAndDelete(request_id);

    if (action === "accept") {
      await Follower.create({ userId: from_id, followingId: to_id });
    }

    return res.status(200).json({});
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

module.exports = route;
