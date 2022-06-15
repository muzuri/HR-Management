import { type } from "os";
import { Application } from "src/application/models/application.entity";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('applicant')
export class Applicant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    resume: string;

    @Column()
    education_level: string;

    @Column()
    years_experience: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @OneToMany(type => Application, application => application.applicant)
    application: Application[];
}
