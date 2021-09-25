import { repositoryContainer } from '@/repository';
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
) => {
    let response: any = null;
    try {
        switch (event.action) {
            // ==================================================
            // Post
            // ==================================================
            case 'AddPost':
                response = await repositoryContainer.postMastRepository.addPost(event.input);
                break;
            case 'DeletePost':
                response = await repositoryContainer.postMastRepository.deletePost(event.input);
                break;
            // ==================================================
            // User
            // ==================================================
            case 'UpdateUserMast':
                response = await repositoryContainer.userMastRepository.addUserMast(event.input);
                break;
        }
    } catch (err) {
        console.error(err);
        throw new Error();
    }
    return response;
};
