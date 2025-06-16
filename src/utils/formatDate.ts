import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function FormatDate(date: string) {
  if (!date) return null;

  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });
}
