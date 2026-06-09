import type { INodeProperties } from 'n8n-workflow';

export const postDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					]
				}
			},
			"options": [
				{
					"name": "Key Register",
					"value": "Key Register",
					"action": "Key Register",
					"description": "Register a new ID `JWT(sub, devtoken)`\n\nv5: `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/key"
						}
					}
				},
				{
					"name": "Key Update",
					"value": "Key Update",
					"action": "Key Update",
					"description": "update properties of an Authentiq ID.\n(not operational in v4; use PUT for now)\n\nv5: POST issuer-signed email & phone scopes in\na self-signed JWT\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/key/{{$parameter[\"PK\"]}}"
						}
					}
				},
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
				},
				{
					"name": "Sign Request",
					"value": "Sign Request",
					"action": "Sign Request",
					"description": "scope verification request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scope"
						}
					}
				},
				{
					"name": "Sign Confirm",
					"value": "Sign Confirm",
					"action": "Sign Confirm",
					"description": "this is a scope confirmation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scope/{{$parameter[\"job\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Key Register"
					]
				}
			}
		},
		{
			"displayName": "POST /key<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Key Register"
					]
				}
			}
		},
		{
			"displayName": "POST /key/{PK}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Key Update"
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
						"Post"
					],
					"operation": [
						"Key Update"
					]
				}
			}
		},
		{
			"displayName": "POST /key/{PK}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Key Update"
					]
				}
			}
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
						"Post"
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
						"Post"
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
						"Post"
					],
					"operation": [
						"Push Login Request"
					]
				}
			}
		},
		{
			"displayName": "POST /scope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Sign Request"
					]
				}
			}
		},
		{
			"displayName": "Test",
			"name": "test",
			"description": "test only mode, using test issuer",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "test",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Sign Request"
					]
				}
			}
		},
		{
			"displayName": "POST /scope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Sign Request"
					]
				}
			}
		},
		{
			"displayName": "POST /scope/{job}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Post"
					],
					"operation": [
						"Sign Confirm"
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
						"Post"
					],
					"operation": [
						"Sign Confirm"
					]
				}
			}
		},
];
