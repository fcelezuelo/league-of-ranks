const lol = require('./tasks')

let nick = '';
const server = 'br1';

const opt = process.argv[2];
if (process.argv[3]) {
    nick = process.argv[3];
} else {
    nick = 'hummelz';
}
switch (opt) {
    case '1':
        ping();
        break;
    case '2':
        getProfile(nick, server);
        break;
    case '3':
        getRank(nick, server);
        break;
    default:
        console.log('Opção inválida.');
        break;
}

function ping() {
    lol.ping()
        .then(resp => { console.log(resp) })
}

function getProfile(nick) {
    lol.profile(server, nick)
        .then(infoProfile => {
            console.log(infoProfile);
        })
}

function getRank(nick) {
    lol.profile(server, nick)
        .then(infoProfile => {
            // console.log(response);
            lol.rank(server, infoProfile.id)
                .then(infoRank => {
                    console.log(infoRank);
                })
                .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })
}