// 1. new Date()
let date= new Date();
console.log(date);

// 2. Date.parse()
let b= Date.parse('December 5, 2001');
console.log(b);

// 3. Date.UTC()  
let y= Date.UTC(2001, 11, 12);
console.log(y);


// 4. getDate()
console.log(new Date().getDate());

// 5. getMonth()
console.log(new Date().getMonth());

// 6. getFullYear()
console.log(new Date().getFullYear());

// 7. getDay()
console.log(new Date().getDay());

// 8. getHours()
console.log(new Date().getHours());

// 9. getMinutes()
console.log(new Date().getMinutes());

// 10. getSeconds()
console.log(new Date().getSeconds());

// 11. getMilliseconds()
console.log(new Date().getMilliseconds());

// 12. setDate()
let h= new Date().setDate(15)
console.log(new Date(h));

// 13. setMonth()
let e= new Date().setMonth(5)
console.log(new Date(e));

// 14. setFullYear()
let c= new Date().setFullYear(2023)
console.log(new Date(c));

// 15. setHours()
let v= new Date().setHours(8)
console.log(new Date(v));

// 16. setMinutes()
let d= new Date().setMinutes(45)
console.log(new Date(d));

// 17. setSeconds()
let t= new Date().setSeconds(10)
console.log(new Date(t));

// 18. setMilliseconds()
let n= new Date().setMilliseconds(50)
console.log(new Date(n));

// 19. toDateString()
let s= new Date().toDateString()
console.log(s);

// 20. toLocaleDateString()
let z= new Date().toLocaleDateString()
console.log(z);

// 21. toTimeString()
let f= new Date().toTimeString()
console.log(f);

// 22. toLocaleTimeString()
let o= new Date().toLocaleTimeString()
console.log(o);

// 23. getUTCDate()
console.log(new Date().getUTCDate());

// 24. getUTCDay()
console.log(new Date().getUTCDay());

// 25. getUTCFullYear()
console.log(new Date().getUTCFullYear());

// 26. getUTCHours()
console.log(new Date().getUTCHours());

// 27. getUTCMinutes()
console.log(new Date().getUTCMinutes());

// 28. getUTCSeconds()
console.log(new Date().getUTCSeconds());

// 29. getUTCMilliseconds()
console.log(new Date().getUTCMilliseconds());

// 30. setUTCDate()
let k= new Date().setUTCDate(10)
console.log(new Date(k));

// 31. setUTCFullYear()
let i= new Date().setUTCFullYear(1971)
console.log(new Date(i));

// 32. setUTCHours()
let u= new Date().setUTCHours(9)
console.log(new Date(u));

// 33. setUTCMinutes()
let g= new Date().setUTCMinutes(35)
console.log(new Date(g));

// 34. setUTCSeconds()
let r= new Date().setUTCSeconds(60)
console.log(new Date(r));

// 35. setUTCMilliseconds()
let j= new Date().setUTCMilliseconds(30)
console.log(new Date(j));