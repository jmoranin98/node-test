import {Model, model, property} from '@loopback/repository';

@model()
export class Responsebase extends Model {

  @property({
    type: 'boolean',
  })
  success?: boolean;

  @property({
    type: 'object',
  })
  payload?: any;

  @property({
    type: 'object',
  })
  error?: Error;
  constructor(data?: Partial<Responsebase>) {
    super(data);
  }
}

export interface ResponsebaseRelations {
  // describe navigational properties here
}

export type ResponsebaseWithRelations = Responsebase & ResponsebaseRelations;
