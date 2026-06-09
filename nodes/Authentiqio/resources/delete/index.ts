import type { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					]
				}
			},
			"options": [
				{
					"name": "Key Revoke Nosecret",
					"value": "Key Revoke Nosecret",
					"action": "Key Revoke Nosecret",
					"description": "Revoke an Authentiq ID using email & phone.\n\nIf called with `email` and `phone` only, a verification code \nwill be sent by email. Do a second call adding `code` to \ncomplete the revocation.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/key"
						}
					}
				},
				{
					"name": "Key Revoke",
					"value": "Key Revoke",
					"action": "Key Revoke",
					"description": "Revoke an Identity (Key) with a revocation secret",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/key/{{$parameter[\"PK\"]}}"
						}
					}
				},
				{
					"name": "Sign Delete",
					"value": "Sign Delete",
					"action": "Sign Delete",
					"description": "delete a verification job",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/scope/{{$parameter[\"job\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke Nosecret"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "primary email associated to Key (ID)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke Nosecret"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"required": true,
			"description": "primary phone number, international representation",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke Nosecret"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"description": "verification code sent by email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke Nosecret"
					]
				}
			}
		},
		{
			"displayName": "DELETE /key/{PK}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke"
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
						"Delete"
					],
					"operation": [
						"Key Revoke"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"required": true,
			"description": "revokation secret",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Key Revoke"
					]
				}
			}
		},
		{
			"displayName": "DELETE /scope/{job}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delete"
					],
					"operation": [
						"Sign Delete"
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
						"Delete"
					],
					"operation": [
						"Sign Delete"
					]
				}
			}
		},
];
