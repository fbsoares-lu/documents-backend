import { Entity, Column, PrimaryColumn, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {

    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User };