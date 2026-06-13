import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AuthentiqioApi implements ICredentialType {
        name = 'N8nDevAuthentiqioApi';

        displayName = 'Authentiqio API';

        icon: Icon = { light: 'file:../nodes/Authentiqio/authentiqio.svg', dark: 'file:../nodes/Authentiqio/authentiqio.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://6-dot-authentiqio.appspot.com',
                        required: true,
                        placeholder: 'https://6-dot-authentiqio.appspot.com',
                        description: 'The base URL of your Authentiqio API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
