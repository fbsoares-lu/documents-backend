import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDocuments1630613831540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "documents",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "content",
                        type: "varchar"
                    },
                    {
                        name: "id_project",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKProjectsDocument",
                        referencedTableName: "projects",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_project"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("documents");
    }

}
