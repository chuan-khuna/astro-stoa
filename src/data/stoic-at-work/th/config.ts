import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const langSwitch: StoicAtWorkContent["langSwitch"] = {
  label: "English",
  href: "/stoic-at-work",
};

export const meta: StoicAtWorkContent["meta"] = {
  title: "สโตอิกในที่ทำงาน — Stoa",
  description:
    "สี่ปัญหาที่โปรแกรมเมอร์เจอซ้ำ ๆ — บรีฟที่เป็นไปไม่ได้ งานที่ใหญ่เกินทีม ผู้บริหารที่รับปากเกินจริง และผลตอบแทนที่หดลง — มองผ่านปรัชญาสโตอิก ไม่ใช่เรื่องการทำใจให้สงบ แต่เป็นการมองให้ชัด แล้วจึงตัดสินใจ",
};

export const header: StoicAtWorkContent["header"] = {
  eyebrow: "ปรัชญาในที่ทำงาน",
  title: "สโตอิกในที่ทำงาน",
  description:
    "สำหรับโปรแกรมเมอร์ที่ทำงานหนัก ส่งงานทุกวัน และเจอปัญหาเดิม ๆ สี่อย่างซ้ำไปซ้ำมา หน้านี้ไม่ได้เกี่ยวกับการทำใจให้สงบ แต่เกี่ยวกับการมีจิตใจที่แจ่มชัดเมื่อสิ่งต่าง ๆ ไม่เป็นธรรม — เพื่อให้คุณลงมือได้ดี ปกป้องตัวเองได้ และรู้ว่าเมื่อไหร่คือพอแล้ว",
};

export const toc: StoicAtWorkContent["toc"] = [
  { label: "คุณไม่ได้คิดไปเอง", href: "#intro" },
  { label: "บรีฟ 6 ชั่วโมง", href: "#fast-brief" },
  { label: "งานที่ใหญ่เกินทีม", href: "#impossible" },
  { label: "เมื่อเขารับปาก คุณเป็นคนจ่าย", href: "#boast" },
  { label: "เมื่อสิ่งที่เสียมากกว่าสิ่งที่ได้", href: "#cost" },
  { label: "หลังเส้นตาย", href: "#recovery" },
];
