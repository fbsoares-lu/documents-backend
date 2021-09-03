import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    JoinColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { Project } from "./Project";

@Entity("documents")
class Document {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    id_project: string;

    @JoinColumn({ name: "id_project"})
    @ManyToOne(() => Project)
    project: Project;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Document };