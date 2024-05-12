// 1. new Date()
let date= new Date();
console.log(date);

// 2. Date.parse()
let dparse = Date.parse('December 5,2001');
console.log('parse',dparse);

// 3. Date.UTC()  
let utcdate = Date.UTC(2001, 11, 12);
console.log('utc',utcdate);

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
const sDate = new Date()
sDate.setDate(25);
console.log('setDate',sDate);

// 13.setMonth()
const smDate = new Date()
smDate.setMonth(10);
console.log('setMonth',smDate);

// 14. setFullYear()
const syDate = new Date()
syDate.setFullYear(2018);
console.log('setMonth',syDate);

// 15. setHours()
const shDate = new Date()
shDate.setHours(8);
console.log('setHours',shDate);

// 16. setMinutes()
const sMTime = new Date()
sMTime.setMinutes(30);
console.log('setHours',sMTime);

// 17.setSeconds()
const sSTime = new Date()
sSTime.setSeconds(30);
console.log('setSeconds',sSTime);

// 18. setMilliseconds()
const sMSTime = new Date()
sMSTime.setMilliseconds(45);
console.log('setSeconds',sMSTime);

// 19. toDateString()
const dateToStrig = new Date()
let dText = dateToStrig.toDateString();
console.log('toDateString',dText);

// 20. toLocaleDateString()
const dateToLocal = new Date()
let dLocalText = dateToLocal.toLocaleDateString();
console.log('toLocaleDateString',dLocalText);

//21. toTimeString()
const timeToTimeString = new Date()
let TimeString = timeToTimeString.toLocaleDateString();
console.log('TimeString',TimeString);

// 22. toLocaleTimeString()
const timeToTimeStringLocal = new Date()
let TimeStringLocal = timeToTimeStringLocal.toLocaleTimeString();
console.log('toLocaleTimeString',TimeStringLocal);

// 23. getUTCDate()
const dateForUtc = new Date()
let getUTCDate = dateForUtc.getUTCDate()
console.log('getUTCDate',getUTCDate);

// 24. getUTCDay()
let getUTCDay = dateForUtc.getUTCDay()
console.log('getUTCDay',getUTCDay);

// 25. getUTCFullYear()
let getUTCFullYear = dateForUtc.getUTCFullYear()
console.log('getUTCFullYear',getUTCFullYear);

// 26. getUTCHours()
let getUTCHours = dateForUtc.getUTCHours()
console.log('getUTCHours',getUTCHours);

//27. getUTCMinutes()
let getUTCMinutes = dateForUtc.getUTCMinutes()
console.log('getUTCMinutes',getUTCMinutes);

// 28. getUTCSeconds()
let getUTCSeconds = dateForUtc.getUTCSeconds()
console.log('getUTCSeconds',getUTCSeconds);

// 29. getUTCMilliseconds()
let getUTCMilliseconds = dateForUtc.getUTCMilliseconds()
console.log('getUTCMilliseconds',getUTCMilliseconds);

// 30. setUTCDate()
const utcDateSetDate = new Date()
utcDateSetDate.setUTCDate(10)
console.log('setUTCDate',utcDateSetDate);

// 31. setUTCFullYear()
const utcDateSetsetYear = new Date()
utcDateSetsetYear.setUTCFullYear(2018)
console.log('setUTCDate',utcDateSetsetYear);

// 32. setUTCHours()
const utcDateSetsetHours = new Date()
utcDateSetsetHours.setUTCHours(15)
console.log('setUTCHours',utcDateSetsetHours);

// 33. setUTCMinutes()
const utcDateSetsetMinutes = new Date()
utcDateSetsetMinutes.setUTCMinutes(30)
console.log('setUTCMinutes',utcDateSetsetMinutes);

// 34. setUTCSeconds()
const utcDateSetsetSeconds = new Date()
utcDateSetsetSeconds.setUTCSeconds(10)
console.log('setUTCSeconds',utcDateSetsetSeconds);

// 35. setUTCMilliseconds()
const utcDateSetsetMilliseconds = new Date()
utcDateSetsetMilliseconds.setUTCMilliseconds(100)
console.log('setUTCMilliseconds',utcDateSetsetMilliseconds);