import type { INodeProperties } from 'n8n-workflow';

export const loginDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Login"
					]
				}
			},
			"options": [
				{
					"name": "Push Login Request",
					"value": "Push Login Request",
					"action": "Push Login Request",
					"description": "push sign-in request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/login"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Login"
					],
					"operation": [
						"Push Login Request"
					]
				}
			}
		},
		{
			"displayName": "Callback",
			"name": "callback",
			"required": true,
			"description": "URI App will connect to",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "callback",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Login"
					],
					"operation": [
						"Push Login Request"
					]
				}
			}
		},
		{
			"displayName": "POST /login<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Login"
					],
					"operation": [
						"Push Login Request"
					]
				}
			}
		},
];
