import type { StoicContent } from "@/data/stoic/types";
import { langSwitch, meta, header, toc } from "./config";
import { whatIsStoic } from "./what-is-stoic";
import { dichotomy } from "./dichotomy";
import { stoicTriangle } from "./stoic-triangle";
import { whenFrustrated } from "./when-frustrated";
import { whenAngry } from "./when-angry";
import { whenTaskUndefined } from "./when-task-undefined";

export const th: StoicContent = {
  langSwitch,
  meta,
  header,
  toc,
  whatIsStoic,
  dichotomy,
  stoicTriangle,
  whenFrustrated,
  whenAngry,
  whenTaskUndefined,
};
