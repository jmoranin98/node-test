import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Words extends Model {
  @property({
    type: 'string',
    required: true,
  })
  word1: string;

  @property({
    type: 'string',
    required: true,
  })
  word2: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Words>) {
    super(data);
  }
}

export interface WordsRelations {
  // describe navigational properties here
}

export type WordsWithRelations = Words & WordsRelations;
