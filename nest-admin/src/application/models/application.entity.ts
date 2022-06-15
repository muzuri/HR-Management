import { Applicant } from "src/applicant/models/applicant.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('application')
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({default: 'Pending'})
    status: string;
    
    @OneToMany(() => Applicant, applicant => applicant.application)
    applicant: Applicant;
}