function permute(str) {
    if (!str ||typeof str !== 'string') return 0;
    if (str.length <= 1) return str;
    let res = [];
    let i = 0;

    while (i < str.length) {
        let curnt = str[i];
        let rem = str.slice(0, i) + str.slice(i + 1);
        let subPerm = permute(rem);
        let f = 0;
        while (f < subPerm.length) {
            let val = subPerm[f];
            if (curnt !== val[0]) {
                res.push(curnt + val);    
            }
            f++;
        }
        i++;
    }
    return res;
}

function permAlone(str) {
  
  const res = permute(str);

  return res.length;
}

permAlone('abcdefa');