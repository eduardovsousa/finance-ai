"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

export default function AddTransactionButton({
  userCanAddTransaction,
}: AddTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full font-bold"
            onClick={() => setDialogIsOpen(true)}
            disabled={!userCanAddTransaction}
          >
            Adicionar transação
            <ArrowDownUpIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {!userCanAddTransaction &&
            "Você atigiu o limite de transações. Atualize seu plano para criar transações ilimitadas"}
        </TooltipContent>
      </Tooltip>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </TooltipProvider>
  );
}
