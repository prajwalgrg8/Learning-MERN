import * as z from "zod";

const productSchema = z.object({
    name: z.string({ error: "Product name is required."}).trim().check(
        z.minLength(3, { error: "Name too small" })
    ),  //by default required

    brand: z.string().optional(),

    category: z.string({ error: "Category is required."}).trim(),

    prize: z.number({ error: (data) => !data.input? "Price is required." : "Price must be a number"} )
        .min(1, { error: "Price must be greater than 0."}).max(9999999),

    stock: z.number().optional().min(1, { error: "Stock must be greater than 0."}),

    description: z.string().optional(),

    imageUrls: z.array(z.string()).optional().trim(),
});

export { productSchema };
