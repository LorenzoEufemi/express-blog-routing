// DATI
const express = require("express");
const router = express.Router();
const myPosts = require("../data");

//index
router.get("/", (req, res) => {
    res.json(myPosts)
});

//show
router.get("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json(myPosts.find((curItem, i) => {
        return curItem.id === gameId
    }));
});

//create
router.post("/", (req, res) => {
    res.send("Qui aggiungo un nuovo post")
});

//update
router.put("/:id", (req, res) => {
    const gameId = req.params.id;
    res.send("Qui aggiorno dati di un videogames " + gameId);
});

//modify
router.patch("/:id", (req, res) => {
    const gameId = req.params.id;
    res.send("Qui aggiorno solo alcuni dati di un videogames " + gameId);
});

//destroy
router.delete("/:id", (req, res) => {
    const gameId = req.params.id;
    res.send("Qui cancello videogames " + gameId);
});

module.exports = router;