import {DefaultCrudRepository} from '@loopback/repository';
import {Request, RequestRelations} from '../models';
import {MemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RequestRepository extends DefaultCrudRepository<
  Request,
  typeof Request.prototype.id,
  RequestRelations
> {
  constructor(
    @inject('datasources.memorydb') dataSource: MemorydbDataSource,
  ) {
    super(Request, dataSource);
  }
}
