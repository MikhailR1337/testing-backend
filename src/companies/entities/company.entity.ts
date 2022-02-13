import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { Candidate } from '../../candidates/entities/candidate.entity';

@Entity({ name: 'companies' })
export class Company extends BaseEntity {
    @PrimaryColumn()
        login: string;

    @Column()
        name: string;

    @Column()
        password: string;

    @ManyToOne(() => Candidate, candidate => candidate.company)
        candidates: Candidate[]
    
    constructor(login: string, name: string, password: string) {
        super()
        this.login = login;
        this.name = name;
        this.password = password;
    }
}
