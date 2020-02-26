const axios = require('axios');
require('dotenv').config()

const key = process.env.KEY;

module.exports = tasks = {
    ping() {
        return new Promise((resolve,reject)=>{
            resolve('pong');
        })
    },
    profile(server, nick) {
        return new Promise((resolve, reject) => {
            axios.get(buildApiUrl('profile', server, nick), { headers: { 'X-Riot-Token': key } })
                .then(response => {
                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch(err => {
                    console.log('Error profile');
                    // console.log(err.config);
                    reject(false);
                })
        })
    },
    rank(server,idProfile) {
        return new Promise((resolve, reject) => {
            axios.get(buildApiUrl('rank', server, idProfile), { headers: { 'X-Riot-Token': key } })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.log('Error rank');
                    // console.log(err.config);
                    reject(false);
                })
        })
    }
}

function buildApiUrl(task, server, variableInfo) {
    switch (task) {
        case 'profile':
            return `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${variableInfo}`;
            break;
        case 'rank':
            return `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${variableInfo}`;
            break;
    }
}