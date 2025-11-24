let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.net', '.org', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {     
            for (let d = 0; d < dom.length; d++) {
                console.log(pronoun[i] + adj[j] + noun[k] + dom[d]);
            }
        }
    }
}