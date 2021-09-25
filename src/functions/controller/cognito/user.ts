import { CustomMessageTriggerEvent, CustomMessageTriggerHandler } from 'aws-lambda';

export const handler: CustomMessageTriggerHandler = async (event: CustomMessageTriggerEvent) => {
    switch (event.triggerSource) {
        case 'CustomMessage_SignUp':
        // // サインアップ
        // return await cognitoRegisterService.register(event);
        case 'CustomMessage_ForgotPassword':
        // return new CognitoForgotPasswordService().passwordReset(event);
        default:
            return event;
    }
};
