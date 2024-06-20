import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";

export const dateFormat = (dateStr: string) =>
  format(parse(dateStr, "yyyy/MM/dd", new Date()), "yyyy年MM月dd日");
