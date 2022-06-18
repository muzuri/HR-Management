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

    @Column({default: null})
    age: string;

    @Column({default: null})
    country: string;

    @Column({default: null})
    city: string;

    @Column()
    cv: string;

    @Column()
    education_level: string;

    @Column()
    years_experience: string;
}
