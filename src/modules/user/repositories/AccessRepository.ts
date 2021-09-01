import { Repository, EntityRepository } from 'typeorm';
import { Access } from '../entities/Access';

@EntityRepository(Access)
class AccessRepository extends Repository<Access> {}

export { AccessRepository };