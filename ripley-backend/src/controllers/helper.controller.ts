import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Request} from '../models/request.model';
import {Words} from '../models/words.model';
import {RequestRepository} from '../repositories';
import { Responsebase } from '../models/responsebase.model';


const ItemResponseSchema = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean'
    },
    payload: {
      type: 'object'
    },
  },
};

export const ItemResponseBody =
{
  responses: {
    '200': {
      description: 'item model instance',
      content: { 'application/json': { schema: { 'x-ts-type': ItemResponseSchema } } },
    },
  },
}


const ComputeResponseSchema = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean'
    },
    payload: {
      type: 'object'
    },
  },
};

export const ComputeResponseBody =
{
  responses: {
    '200': {
      description: 'compare two words',
      content: { 'application/json': { schema: { 'x-ts-type': ComputeResponseSchema } } },
    },
  },
}

const ItemRequestSchema = {
  type: 'object',
  required: ['item'],
  properties: {
        item: { type: 'string' }
  },
};

export const ItemRequestBody = {
  description: 'Register new conversation',
  required: true,
  content: {
    'application/json': { schema: ItemRequestSchema },
  },
};


const ComputeRequestSchema = {
  type: 'object',
  required: ['word1','word2'],
  properties: {
        word1: { type: 'string' },
        word2: { type: 'string' }
  },
};

export const ComputeRequestBody = {
  description: 'compare two words',
  required: true,
  content: {
    'application/json': { schema: ComputeRequestSchema },
  },
};


export class HelperController {
  constructor(
    @repository(RequestRepository)
    public requestRepository : RequestRepository,
  ) {}

  @post('/api/item', ItemResponseBody)
  async create(
    @requestBody(ItemRequestBody)
    request: Request,
  ): Promise<Responsebase> {
    let response = new Responsebase();

    try {
      console.log("begin add item in memory");
      let itemSaved = await this.requestRepository.create(request);
      response.success = true;
      response.payload = {message : "item add success",
                           item : itemSaved.item};

    } catch (error) {
      console.error(error);
      response.success = false;
      response.payload = "error.";

    } finally {
      console.log("end add item in memory");
    }

    return  response;
  }

  @get('/api/item')
  async find(
  ): Promise<Responsebase> {
     

    let response = new Responsebase();

    try {
      console.log("begin get item from memory");
      let items = await this.requestRepository.find();
      let listItems = items.map(c => c.item);

      response.success = true;
      response.payload = listItems;

    } catch (error) {
      console.error(error);
      response.success = false;
      response.payload = "error.";

    } finally {
      console.log("end get item from memory");
    }

    return  response;
  }

  @post('/api/compute', {
    responses: ComputeResponseBody,
  })
  async compute(
    @requestBody(ComputeRequestBody)
    request: Words,
  ): Promise<Responsebase> {   


    let response = new Responsebase();

    try {
      console.log("begin compute request");
      let word1 = request.word1 === undefined ? "" : request.word1;
      let word2 = request.word2 === undefined ? "" : request.word2; 
      let word = word1.length > word2.length ? word1 : word2;

      response.success = true;
      response.payload = word;

    } catch (error) {
      console.error(error);
      response.success = false;
      response.payload = "error.";

    } finally {
      console.log("end compute request");
    }

    return  response;
  }


 
}
