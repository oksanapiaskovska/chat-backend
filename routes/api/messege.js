const router = require("express").Router();
const messegeService = require("../../services/messege");

router.get("/", (req, res, next) => {
  const id = req.query.id;
  if(id) {
    messegeService.findOne(id, (err, data) => {
      if (!err) {
        res.data = data;
        res.json(res.data);
      } else {
        res.status(400);
        res.end();
      }
    });
  } else {
    messegeService.findAll((err, data) => {
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
  messegeService.create(req.body, (err, data) => {
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
  messegeService.remove(id, (err, data) => {
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
  console.log(req.body);
  messegeService.findByIdAndUpdate(id, req.body, {new: true}, (err, data) => {
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
