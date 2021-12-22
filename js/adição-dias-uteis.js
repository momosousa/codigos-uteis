const WEEKEND = [moment().day("Saturday").weekday(), moment().day("Sunday").weekday()]

const addBusinessDays1 = (date, daysToAdd) => {
  var daysAdded = 0,
    momentDate = moment(new Date(date));
  while (daysAdded < daysToAdd) {
    momentDate = momentDate.add(1, 'days');
    if (!WEEKEND.includes(momentDate.weekday())) {
      daysAdded++
    }
  }

  return momentDate;
}
console.log(addBusinessDays1(new Date(), 7).format('MM/DD/YYYY'))
console.log(addBusinessDays1('09-20-2018', 3).format('MM/DD/YYYY'))

// This is the somewhat faster version
const addBusinessDays2 = (date, days) => {
  var d = moment(new Date(date)).add(Math.floor(days / 5) * 7, 'd');
  var remaining = days % 5;
  while (remaining) {
    d.add(1, 'd');
    if (d.day() !== 0 && d.day() !== 6)
      remaining--;
  }
  return d;
};

console.log(addBusinessDays2(new Date(), 7).format('MM/DD/YYYY'))
console.log(addBusinessDays2('09-20-2018', 3).format('MM/DD/YYYY'))
