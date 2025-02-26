import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 10000
    })
    content: string;

    @Column({
        default: Date.now()
    })
    createdAt: Date;

    @Column({
        nullable: true
    })
    modifiedAt?: Date;
}