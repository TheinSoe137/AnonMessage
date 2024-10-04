import { z } from "zod"

export const messageSchema = z.object({
    content: z.string().min(10,"content must be atleast 10 characters").max(300,"content must be atmost 300 characters"),

})