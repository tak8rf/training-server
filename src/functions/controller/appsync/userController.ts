import { Handler } from 'aws-lambda';
import { Scalars } from 'chillnn-training-abr/dist/entities/type';

type UserAction =
    // post
    | 'AddPost'
    | 'DeletePost'
    // user
    | 'UpdateUserMast';

export const handler: Handler = async (
    //
    event: {
        input: any;
        action: UserAction;
        userID: Scalars['ID'];
    },
) => {};
