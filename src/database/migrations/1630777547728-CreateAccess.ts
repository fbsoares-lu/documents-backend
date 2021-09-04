import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccess1630777547728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "access",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "id_project",
                        type: "uuid"
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    },
                    {
                        name: "permission",
                        type: "boolean"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKProjectAccess",
                        referencedTableName: "projects",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_project"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserAccess",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("access");
    }

}
