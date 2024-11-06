import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export default function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="rounded-full bg-primary/10 font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} /> Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="rounded-full bg-danger/10 font-bold text-danger hover:bg-muted">
        <CircleIcon className="mr-2 fill-danger" size={10} /> Gasto
      </Badge>
    );
  }

  return (
    <Badge className="rounded-full bg-white/10 font-bold text-white hover:bg-muted">
      <CircleIcon className="mr-2 fill-white" size={10} /> InvestInvestimento
    </Badge>
  );
}
