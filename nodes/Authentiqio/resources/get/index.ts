import type { INodeProperties } from 'n8n-workflow';

export const getDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					]
				}
			},
			"options": [
				{
					"name": "Key Retrieve",
					"value": "Key Retrieve",
					"action": "Key Retrieve",
					"description": "Get public details of an Authentiq ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/key/{{$parameter[\"PK\"]}}"
						}
					}
				},
				{
					"name": "Sign Retrieve",
					"value": "Sign Retrieve",
					"action": "Sign Retrieve",
					"description": "get the status / current content of a verification job",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/scope/{{$parameter[\"job\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /key/{PK}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"Key Retrieve"
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
						"Get"
					],
					"operation": [
						"Key Retrieve"
					]
				}
			}
		},
		{
			"displayName": "GET /scope/{job}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"Sign Retrieve"
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
						"Get"
					],
					"operation": [
						"Sign Retrieve"
					]
				}
			}
		},
];
