import type { INodeProperties } from 'n8n-workflow';

export const headDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Head"
					]
				}
			},
			"options": [
				{
					"name": "HEAD Key",
					"value": "HEAD Key",
					"action": "HEAD Key",
					"description": "HEAD info on Authentiq ID\n",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/key/{{$parameter[\"PK\"]}}"
						}
					}
				},
				{
					"name": "Sign Retrieve Head",
					"value": "Sign Retrieve Head",
					"action": "Sign Retrieve Head",
					"description": "HEAD to get the status of a verification job",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/scope/{{$parameter[\"job\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "HEAD /key/{PK}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Head"
					],
					"operation": [
						"HEAD Key"
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
						"Head"
					],
					"operation": [
						"HEAD Key"
					]
				}
			}
		},
		{
			"displayName": "HEAD /scope/{job}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Head"
					],
					"operation": [
						"Sign Retrieve Head"
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
						"Head"
					],
					"operation": [
						"Sign Retrieve Head"
					]
				}
			}
		},
];
