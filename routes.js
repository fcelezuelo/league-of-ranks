const express = require('express');
const router = express.Router();
const lol = require('./tasks')

router.get('/', (req, res) => {
    lol.ping()
        .then(resp => {
            // console.log(resp);
            res.status(200).send({ "message": resp });
        })
})

router.get('/:server/profile/:nick', (req, res) => {
    const { nick, server } = req.params;
    console.log(server);
    lol.profile(server, nick)
        .then(infoProfile => {
            // console.log(infoProfile);
            res.status(200).json(infoProfile);
        })
})

router.get('/:server/rank/:nick', (req, res) => {
    const { nick,server } = req.params;    
    lol.profile(server, nick)
        .then(infoProfile => {
            // console.log(response);
            lol.rank(server, infoProfile.id)
                .then(infoRank => {
                    // console.log(infoRank);
                    res.status(200).json(infoRank);
                })
                .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })
})

module.exports = router;