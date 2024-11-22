import { EntitySchema } from "typeorm"

export const Vehicle = new EntitySchema({
    name: "Vehicle",
    tableName: "vehicles",
    columns: {
        id: {   
            primary: true,
            type: "int",
            generated: true,
        },
        brand: {
            type: "varchar",
        },
        model: {
            type: "varchar"
        },
        year: {
            type: "decimal"
        }
    },
})