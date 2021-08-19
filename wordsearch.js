const wordSearch = (letters, word) => { 
    if (letters.length === 0 || typeof word === 'undefined') {
        return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
   
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;  
        
    }
    
    
    let verticaArr = [];
    for (let c = 0; c < letters[0].length; c++) {
        verticaArr.push([]);
        for (let r = 0; r < letters.length; r++) {
            verticaArr[c].push(letters[r][c]);
        }
    }
   
    vericalJoin = verticaArr.map(hs => hs.join(''))
      for (h of vericalJoin) {
        if (h.includes(word)) {
            return true
        }
    }
    return false
  }


module.exports = wordSearch