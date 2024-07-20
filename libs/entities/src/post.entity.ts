import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'author_id' })
  title: string;

  @Column({ name: 'author_id' })
  message: string;

  @Column({ name: 'author_id' })
  authorId: string;

  @Column({ name: 'is_published' })
  isPublished: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
