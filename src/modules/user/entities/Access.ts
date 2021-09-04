import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { Project } from "./Project";
import { User } from "./User";

@Entity("access")
class Access {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    id_project: string;

    @JoinColumn({ name: "id_project"})
    @ManyToOne(() => Project)
    project: Project;

    @Column()
    id_user: string;

    @JoinColumn({ name: "id_user"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    permission: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Access };