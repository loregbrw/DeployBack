import { EntitySchema } from "typeorm"

export const Person =  new EntitySchema({
    name: "Person",
    tableName: "people",
    columns: {
        id: {   
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        lastname: {
            type: "varchar"
        },
        salary: {
            type: "decimal"
        }
    },
})