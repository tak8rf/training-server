import { DynamoDBRepositoryBase } from '@/driver/dynamodb/dynamoDBRepositoryBase';
import { DynamoDBPostMastRepository } from '@/driver/dynamodb/modules/postMastRepository';

export const postMastRepository = new DynamoDBPostMastRepository(DynamoDBRepositoryBase.MASTER_TABLE_NAME);
