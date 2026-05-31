import type { StoicContent } from "@/data/stoic/types";

export const langSwitch: StoicContent["langSwitch"] = {
  label: "English",
  href: "/stoic",
};

export const meta: StoicContent["meta"] = {
  title: "ลัทธิสโตอิก — สโตอา",
  description:
    "บทนำสู่ปรัชญาสโตอิก: สโตอิกคืออะไร การแยกแยะสิ่งที่ควบคุมได้กับควบคุมไม่ได้ สามเหลี่ยมสโตอิก และแนวคิดสำคัญจาก The Little Book of Stoicism",
};

export const header: StoicContent["header"] = {
  eyebrow: "ปรัชญา",
  title: "ลัทธิสโตอิก",
  description:
    "คู่มือสู่ปรัชญาโบราณว่าด้วยการใช้ชีวิตที่ดี — ทั้งรากฐาน หัวใจของการปฏิบัติ และวิธีนำมาใช้กับชีวิตทุกวันนี้",
};

export const toc: StoicContent["toc"] = [
  { label: "สโตอิกคืออะไร?", href: "#what-is-stoicism" },
  { label: "มุ่งไปที่สิ่งที่คุณควบคุมได้", href: "#dichotomy-of-control" },
  { label: "สามเหลี่ยมสโตอิก", href: "#stoic-triangle" },
  { label: "เมื่อรู้สึกหงุดหงิด", href: "#when-frustrated" },
  { label: "เมื่อความโกรธก่อตัว", href: "#when-angry" },
  { label: "เมื่องานไม่ใช่สิ่งที่คุณเป็นผู้กำหนด", href: "#when-task-undefined" },
];
