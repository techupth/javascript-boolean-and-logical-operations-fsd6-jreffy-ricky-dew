// Exercise #2: Promotion Conditions
// สมมุติว่าเราเขียนโปรแกรมในการตรวจสอบสิทธิโปรโมชั่นส่วนลดของผู้ซื้อสินค้า

// ผู้ซื้อจะได้รับโปรโมชั่นถ้ากรณีข้อใดข้อหนึ่งต่อไปนี้เป็นจริง (ไม่จำเป็นต้องเป็นจริงทั้งสองข้อ)

// กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ 
// และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
// กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum"
// โดยที่โปรแกรมจะ Declare ตัว Variable ไว้ให้แล้วดังนี้

// Variable lastMonthPaidMoreThan4000 เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ซื้อสินค้ามียอดซื้อทั้งหมดในเดือนที่แล้วมากกว่า 4000 บาท
// Variable isWeekday เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าวันที่ซื้อสินค้าเป็นวันจันทร์ ถึง วันศุกร์
// Variable hasBoughtProductFromITCategory เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ซื้อสินค้าเคยซื้อสินค้าในหมวดหมู่ IT
// Variable hasAttendedDiscountEvent เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ซื้อสินค้าเคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อนหน้านี้
// Variable isPlatinum เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ซื้อสินค้าเป็นสมาชิกในระดับ Platinum
// Variable hasPromotion เก็บข้อมูลประเภท Boolean โดยจะมีค่าเป็น true ถ้าผู้ซื้อสินค้ามีสิทธิได้รับโปรโมชั่นส่วนลด
// โดยผู้ซื้อสินค้าคนหนึ่งชื่อว่า John มีคุณสมบัติดังนี้

// มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
// ไปซื้อของวันศุกร์
// ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
// เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
// เป็น Member ระดับ Gold
// ให้ Assign ตัว Value ให้กับ lastMonthPaidMoreThan4000, isWeekday, hasBoughtProductFromITCategory, 
// hasAttendedDiscountEvent และ isPlatinum ตามของคุณสมบัติของ John

// ให้ Reassign ค่าของ hasPromotion เป็น Expression ของ Variable อื่นๆ ตามเงื่อนไขข้างต้น 
// หลังจากนั้นลอง console.log ค่าของ hasPromotion เพื่อดูว่า John มีสิทธิได้รับโปรโมชั่นส่วนลดหรือไม่

// Start coding here

let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion;

hasPromotion = (lastMonthPaidMoreThan4000&&isWeekday&&!hasBoughtProductFromITCategory&&!hasAttendedDiscountEvent)||isPlatinum;
console.log(hasPromotion);
