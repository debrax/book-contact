import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts/entities/contact.entity';

@Module({
  imports: [
    ContactsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Contact],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
