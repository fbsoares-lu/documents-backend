import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserAccess1630726421415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usersAccess",
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
                        name: "id_access",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserAccessProject",
                        referencedTableName: "projects",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_project"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserA",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKAccess",
                        referencedTableName: "access",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_access"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usersAccess");
    }

}
