// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion = (lastMonthPaidMoreThan4000==true && isWeekday==true && !hasBoughtProductFromITCategory==true && !hasAttendedDiscountEvent==true) || isPlatinum==true;

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

console.log(hasPromotion);

//Mr. John ไม่ได้รับ Promotion 