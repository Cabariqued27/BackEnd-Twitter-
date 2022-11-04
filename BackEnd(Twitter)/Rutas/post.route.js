const router = require("express").Router;
const User = require("../Modelos/usuario");
const PostLike = require("../Modelos/postLikes");
const Post = require("../Modelos/post");
const route = router();

//endpoint de informacion de publicacion
route.get("/", async (req, res) => {
  try {
    const { post_id } = req.query;
    if (!post_id) {
      return res.status(401).json({ message: "Missing post_id field" });
    }

    const post = await Post.findById(post_id).lean();
    const likes = await PostLike.count({ post_id });
    const author = await User.findById(
      post.author_id
    ).lean();
    return res.status(200).json({
      ...post,
      author,
      likes,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

//endpoint de las publicaciones likeadas por un usuario
route.get("/liked-by", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(401).json({ message: "Missing user_id field" });
    }
    const postLikes = await PostLike.find({ author_id: user_id }).lean();
    const postsId = postLikes.map((p) => p.post_id);
    const posts = await Post.find({ _id: { $in: postsId } });
    res.status(200).json({ posts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

route.get("/saved-by", async (req, res) => {
  try {
    const postsId = savedPosts.map((p) => p.post_id);
    const posts = await Post.find({ _id: { $in: postsId } });
    res.status(200).json({ posts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

//Obtener el timeline de un usuario
route.get("/timeline", async (req, res) => {
  try {
    let recordPerPage = 5;
    let pageNumber = !req.body.page ? 1 : req.body.page;
    let startFrom = (pageNumber - 1) * recordPerPage;
    res.status(200).json({ posts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

//endpoint de crear publicacion y Endpoint de comentar en una publicación
route.post("/", async (req, res) => {
  try {
    if (req.body.post_id && req.body.comment) {
      await Comment.create({
        post_id: req.body.post_id,
        text: req.body.comment
      });
      return res.status(200).json({});
    }
    if (req.body.img_url && req.body.bio && req.body.author) {
      await Post.create({
        author_id: req.body.author,
        img_url: req.body.img_url,
        bio: req.body.bio,
      });
      return res.status(200).json({});
    }
    return res.status(401).json({ message: "Not valid" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

module.exports = route;
