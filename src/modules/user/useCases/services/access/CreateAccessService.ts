import { getCustomRepository } from 'typeorm';
import { Access } from '../../../entities/Access';
import { AccessRepository } from '../../../repositories/AccessRepository';

class CreateAccessService {
    async execute(description: string): Promise<Access> {
        const accessRepository = getCustomRepository(AccessRepository);

        const accessWithSameDescription = await accessRepository.findOne({ description });

        if (accessWithSameDescription) {
            throw new Error("Description alredy use!");
        }

        const access =  accessRepository.create({description});

        await accessRepository.save(access);

        return access;
    }
};

export { CreateAccessService };