// สมมติว่าเราเขียนโปรแกรมในการตรวจสอบผู้คนที่เข้ามาร่วมงาน Event แห่งหนึ่ง

// เงื่อนไขในการเข้าร่วมก็คือ

// ผู้เข้าร่วมงานต้องมีอายุมากกว่า 18 ปีขึ้นไป
// และต้องไม่เคยมีประวัติอาชญากรรมมาก่อน
// โดยที่โปรแกรมจะ Declare ตัว Variable ไว้ให้แล้วดังนี้

// Variable isOver18 เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้เข้าร่วมงานมีอายุมากกว่า 18 ปีขึ้นไป
// Variable hasCriminalBlacklist เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ร่วมงานเคยมีประวัติอาชญากรรม
// Variable isAllow เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้เข้าร่วมงานมีสิทธิ์เข้าร่วมงาน
// โดยผู้ร่วมงานคนหนึ่งชื่อว่า James มีคุณสมบัติดังนี้

// James มีอายุ 18 ปี
// James ไม่เคยมีประวัติอาชญากรรม
// ให้ Assign ค่าให้กับ isOver18 และ hasCriminalBlacklist ตามของคุณสมบัติของ James

// ให้ Reassign ค่าของ isAllow เป็น Expression ของ isOver18 และ hasCriminalBlacklist ตามเงื่อนไขข้างต้น

// หลังจากนั้นลอง console.log ค่าของ isAllow เพื่อดูว่า James มีสิทธิ์เข้างานหรือไม่

let isOver18 = false;
let hasCriminalBlacklist = false;

let isAllow;

isAllow = isOver18&&!hasCriminalBlacklist

console.log(isAllow);
