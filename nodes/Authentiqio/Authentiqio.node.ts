import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { keyDescription } from './resources/key';
import { deleteDescription } from './resources/delete';
import { postDescription } from './resources/post';
import { getDescription } from './resources/get';
import { headDescription } from './resources/head';
import { putDescription } from './resources/put';
import { loginDescription } from './resources/login';
import { scopeDescription } from './resources/scope';

export class Authentiqio implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Authentiqio',
		name: 'N8nDevAuthentiqio',
		icon: { light: 'file:./authentiqio.svg', dark: 'file:./authentiqio.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Passwordless strong authentication.',
		defaults: { name: 'Authentiqio' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAuthentiqioApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Key",
					"value": "Key",
					"description": ""
				},
				{
					"name": "Delete",
					"value": "Delete",
					"description": ""
				},
				{
					"name": "Post",
					"value": "Post",
					"description": ""
				},
				{
					"name": "Get",
					"value": "Get",
					"description": ""
				},
				{
					"name": "Head",
					"value": "Head",
					"description": ""
				},
				{
					"name": "Put",
					"value": "Put",
					"description": ""
				},
				{
					"name": "Login",
					"value": "Login",
					"description": ""
				},
				{
					"name": "Scope",
					"value": "Scope",
					"description": ""
				}
			],
			"default": ""
		},
		...keyDescription,
		...deleteDescription,
		...postDescription,
		...getDescription,
		...headDescription,
		...putDescription,
		...loginDescription,
		...scopeDescription
		],
	};
}
