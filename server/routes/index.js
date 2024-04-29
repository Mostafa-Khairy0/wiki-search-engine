const express = require("express");
const router = express.Router();
const indexTypes = [
  "Term-document index",
  "Inverted index",
  "Positional index",
  "Bi-word index",
];
const availablePreprocess = [
  "Tokenization",
  "Stop words",
  "Lemmatization",
  "Stemming",
  "Normalization",
];

router.post("/createIndex/:type", function (req, res) {
  try {
    let { type } = req.params;
    type = decodeURI(type);
    if (!indexTypes.includes(type)) throw new Error(`${type} is not supported`);
    const { preprocess } = req.body;
    preprocess.map((preproces) => {
      if (!availablePreprocess.includes(preproces))
        throw new Error(`preprocess ${preproces} is not supported`);
    });
    setTimeout(() => {
      res.json({ message: `The ${type} was created successfully` });
    }, 10000);
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
});
router.get("/search/:text", function (req, res) {
  try {
    let { text } = req.params;
    text = decodeURI(text);
    if (text.length == 0) return res.json({ suggestions: [] });

    setTimeout(() => {
      res.json({
        suggestions: [
          {
            name: "April",
            link: `${process.env.SERVER_URL}/dataset/wiki_00.txt`,
          },
          {
            name: "People's Republic of China",
            link: `${process.env.SERVER_URL}/dataset/wiki_01.txt`,
          },
        ],
      });
    }, 100);
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
});
module.exports = router;
