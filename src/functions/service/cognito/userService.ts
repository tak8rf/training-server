import { CustomMessageSignUpTriggerEvent } from 'aws-lambda';
import AWS from 'aws-sdk';
import { RepositoryContainer } from 'chillnn-training-abr';

const cognito = new AWS.CognitoIdentityServiceProvider({});

export class UserCognitoService {
    constructor(
        private repositoryContainer: RepositoryContainer, //
    ) {}

    public async registerService(input: CustomMessageSignUpTriggerEvent) {
        const userID = input.userName;
        const email = input.request.userAttributes.email;
        const now = new Date().getTime();

        try {
            await this.repositoryContainer.userMastRepository.addUserMast({
                userID,
                email,
                name: '名無しさん',
                userIcon: null,
                createdAt: now,
                updatedAt: now,
            });
        } catch (err) {
            await cognito
                .adminDeleteUser({
                    UserPoolId: input.userPoolId,
                    Username: userID,
                })
                .promise();
            throw new Error('ユーザーがすでに存在しています');
        }

        const codeParameter: string = input.request.codeParameter || '{####}';
        input.response.emailSubject = `【新規登録】ようこそCHILLNNへ`;
        input.response.emailMessage = `verify code ${codeParameter}`;
        return input;
    }
}
