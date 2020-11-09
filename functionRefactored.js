function funcR( s , a , b ) {
    if (!s.length) return - 1 ;
    let i = s.length ;
    let aIndex = bIndex = -1;
    while ((aIndex == - 1) && (bIndex == - 1) && (--i > 0)) {
        if (s[i] == a) aIndex = i;
        if (s[i] == b) bIndex = i;
    }
    return  aIndex != - 1 || bIndex != - 1? Math. max (aIndex, bIndex):-1
}

