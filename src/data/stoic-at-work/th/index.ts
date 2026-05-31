import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";
import { langSwitch, meta, header, toc } from "./config";
import { intro } from "./intro";
import { fastBrief } from "./fast-brief";
import { impossible } from "./impossible";
import { boast } from "./boast";
import { cost } from "./cost";
import { recovery } from "./recovery";

export const th: StoicAtWorkContent = {
  langSwitch,
  meta,
  header,
  toc,
  intro,
  fastBrief,
  impossible,
  boast,
  cost,
  recovery,
};
