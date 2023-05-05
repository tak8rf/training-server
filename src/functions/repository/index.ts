import { RepositoryContainer } from 'training-abr';
import { postMastRepository } from './modules/postMastRepository';
import { s3Repository } from './modules/s3Repository';
import { userMastRepository } from './modules/userMastRepository';

export const repositoryContainer = new RepositoryContainer(
    // infra
    s3Repository,
    // resources
    postMastRepository,
    userMastRepository,
);
