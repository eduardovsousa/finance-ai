import { isMatch } from "date-fns";
import { z } from "zod";

export const generateAiReportSchema = z.object({
  month: z.string().refine((value) => isMatch(value, "MM")),
  example: z.boolean().optional(),
});

export type GenerateAiReportSchema = z.infer<typeof generateAiReportSchema>;
