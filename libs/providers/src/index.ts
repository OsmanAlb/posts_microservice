import { Module } from '@nestjs/common';
import { appDataSource } from './typeorm/typeorm.config';
import * as typeorm from '@nestjs/typeorm';

@Module({
  imports: [typeorm.TypeOrmModule.forRoot(appDataSource.options)],
})
export class TypeOrmModule {}
