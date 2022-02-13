import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'companies' })
export class Company extends BaseEntity {
    @Column()
        name: string;

    @PrimaryColumn()
        login: string;

    @Column()
        password: string;
    
    constructor(name: string, login: string, password: string) {
        super()
        this.name = name;
        this.login = login;
        this.password = password;
    }

}