import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("access")
class Access {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    description: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
};

export { Access };