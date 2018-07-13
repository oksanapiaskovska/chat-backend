const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  const id = req.query.id;
  if(id) {
    userService.findOne(id, (err, data) => {
      if (!err) {
        res.data = data;
        res.json(res.data);
      } else {
        res.status(400);
        res.end();
      }
    });
  } else {
    userService.findAll((err, data) => {
      if (!err) {
        res.data = data;
        res.json(res.data);
      } else {
        res.status(400);
        res.end();
      }
    });
  }
});

router.post("/", (req, res) => {
  userService.create(req.body, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.err = err;
      res.json(res.err);
      res.end();
    }
  });
});

router.delete("/", (req, res, next) => {
  const id = req.query.id;
  userService.remove(id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.put("/", (req, res, next) => {
  const id = req.query.id;
  userService.findByIdAndUpdate(id, req.body, {new: true}, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  })
});

router.get("/chats/", (req, res, next) => {
  const id = req.query.id;
  userService.getAllChats(id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  })
});

module.exports = router;
