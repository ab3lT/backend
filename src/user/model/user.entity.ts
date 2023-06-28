import { Exclude } from "class-transformer";
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn, BeforeInsert, CreateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @BeforeInsert()
    nameToUpperCase() {
        this.first_name = this.first_name.toLowerCase();
        this.last_name = this.last_name.toLowerCase();
        this.email = this.email.toLowerCase()
    }
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;
    

    @Column()
    @Exclude()
    password: string;
    

    @CreateDateColumn({type: "timestamptz", default: () => "CURRENT_TIMESTAMP"})
    created_at: Date;

    
    @Column('boolean', {default: true})
    is_active : boolean 

}

