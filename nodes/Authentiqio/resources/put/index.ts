import type { INodeProperties } from 'n8n-workflow';

export const putDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					]
				}
			},
			"options": [
				{
					"name": "Key Bind",
					"value": "Key Bind",
					"action": "Key Bind",
					"description": "Update Authentiq ID by replacing the object.\n\nv4: `JWT(sub,email,phone)` to bind email/phone hash; \n\nv5: POST issuer-signed email & phone scopes\nand PUT to update registration `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/key/{{$parameter[\"PK\"]}}"
						}
					}
				},
				{
					"name": "Sign Update",
					"value": "Sign Update",
					"action": "Sign Update",
					"description": "authority updates a JWT with its signature\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/scope/{{$parameter[\"job\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /key/{PK}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					],
					"operation": [
						"Key Bind"
					]
				}
			}
		},
		{
			"displayName": "PK",
			"name": "PK",
			"required": true,
			"description": "Public Signing Key - Authentiq ID (43 chars)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					],
					"operation": [
						"Key Bind"
					]
				}
			}
		},
		{
			"displayName": "PUT /key/{PK}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					],
					"operation": [
						"Key Bind"
					]
				}
			}
		},
		{
			"displayName": "PUT /scope/{job}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					],
					"operation": [
						"Sign Update"
					]
				}
			}
		},
		{
			"displayName": "Job",
			"name": "job",
			"required": true,
			"description": "Job ID (20 chars)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Put"
					],
					"operation": [
						"Sign Update"
					]
				}
			}
		},
];
