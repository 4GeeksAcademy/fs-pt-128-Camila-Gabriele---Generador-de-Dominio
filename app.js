let pronoun = ['the', 'our', 'your', 'his'];
let adj = ['great', 'big', 'little', 'crazy'];
let noun = ['jogger', 'racoon', 'turtle', 'ninja'];
let dom = ['.com', '.net', '.org', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {     
            for (let l = 0; l < dom.length; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + dom[l]);
            }
        }
    }
}


