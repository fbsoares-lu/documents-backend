import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Access } from "./Access";
import { User } from "./User";

@Entity("projects")
class Project {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string

    @Column()
    user_access: string;

    @JoinColumn({ name: "user_access" })
    @ManyToOne(() => User)
    user: User;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Project };