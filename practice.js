// year
const today1 = '2007-11-25T00:53:55.446Z';
const today2 = '2008-11-25T00:53:55.446Z';

// month
const today3 = '2009-01-25T00:15:58.659Z';
const today4 = '2009-04-25T00:15:58.659Z';

// day
const today5 = '2010-11-21T00:57:58.659Z';
const today6 = '2010-11-25T00:57:58.659Z';

// time
const today7 = '2011-11-25T00:57:58.659Z';
const today8 = '2011-11-25T03:57:58.659Z';

// miniute
const today9 = '2012-11-25T00:42:58.659Z';
const today10 = '2012-11-25T00:57:58.659Z';

// second
const today11 = '2013-11-25T00:57:31.659Z';
const today12 = '2013-11-25T00:57:58.659Z';

const today13 = new Date();

const test = [
  {
    d: today4,
    c: today3,
    h: today8,
    k: today11,
    b: today2,
    f: today6,
    e: today5,
    i: today9,
    a: today1,
    j: today10,
    g: today7,
    l: today12
  }
]

let arr = [];

for (let i in test[0]) {
  arr.push(test[0][i]);
}

console.log(today13)
