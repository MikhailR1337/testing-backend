import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import { Company } from '../../companies/entities/company.entity';

@Entity({ name: 'candidates' })
export class Candidate extends BaseEntity {
    @PrimaryColumn()
        personalKey: string;
    
    @Column()
        name: string;

    @Column()
        testLink: string;
    
    @OneToMany(() => Company, company => company.candidates)
        company: Company;
    
    constructor(personalKey: string, name: string, testLink: string) {
        super()
        this.personalKey = personalKey;
        this.name = name;
        this.testLink = testLink;
    }
}
