import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>
  ) { }

  create(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsRepository.save(createContactDto);
  }

  findAll(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }

  async findOne(id: number) {
    const contact = await this.contactsRepository.findOneBy({ id });
    if (!contact) throw new NotFoundException;
    return contact;
  }

  async update(id: number, dto: UpdateContactDto) {
    const contact = await this.contactsRepository.findOneBy({ id });
    if (!contact) throw new NotFoundException;
    contact.name = dto.name ?? contact.name;
    if (dto.email !== undefined) contact.email = dto.email;
    return this.contactsRepository.save(contact);
  }

  async remove(id: number) {
    const result = await this.contactsRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException;
  }
}
