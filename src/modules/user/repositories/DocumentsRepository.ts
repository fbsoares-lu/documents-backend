import { EntityRepository, Repository } from "typeorm";
import { Document } from "../entities/Document";

@EntityRepository(Document)
class DocumentsRepository extends Repository<Document> {}

export { DocumentsRepository };