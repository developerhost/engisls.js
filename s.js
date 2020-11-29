process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const N = lines[0];
    
    for(let i = 1; i<= N; i++){
        let l = lines[i];
        const es = "es";
        const ves = "ves";
        const s = "s";
        const ies = "ies";
        
        if(l.slice(-1) == 's'|| l.slice(-2) == 'sh'|| l.slice(-2) == 'ch'|| l.slice(-1) == 'o'|| l.slice(-1) == 'x'){
            l = l.concat(es);
        }else if(l.slice(-1) == 'f'){
            l = l.slice(0,-1);
            l = l.concat(ves);
        }else if(l.slice(-2) == 'fe'){
            l = l.slice(0,-2);
            l = l.concat(ves);            
        }else if(l.slice(-2) == 'ay' ||l.slice(-2) == 'iy' ||l.slice(-2) == 'uy' ||l.slice(-2) == 'ey' ||l.slice(-2) == 'oy'){
            l = l.concat(s);
        }else if(l.slice(-1) == 'y'){
            l = l.slice(0,-1);
            l = l.concat(ies);
        }else{
            l = l.concat(s);
        }
        console.log(l);
    }
});
