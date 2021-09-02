import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProjects1630598761669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "projects",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "user_access",
                        type: "uuid"
                    },
                    {
                        name: "id_access",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserProjects",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_access"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKAccessProjects",
                        referencedTableName: "access",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_access"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("projects");
    };

}
