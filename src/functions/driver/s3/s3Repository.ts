import { IS3Repository } from 'chillnn-training-abr';
import { S3Object } from 'chillnn-training-abr/dist/entities/type';

export class S3Repository implements IS3Repository {
    fetchObject<T>(s3Object: S3Object): Promise<T> {
        throw new Error('Method not implemented.');
    }
    addFile(uniquePath: string, file: File): Promise<S3Object> {
        throw new Error('Method not implemented.');
    }
    getSampleImage(): S3Object {
        throw new Error('Method not implemented.');
    }
}
