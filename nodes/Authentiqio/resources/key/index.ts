import type { INodeProperties } from 'n8n-workflow';

export const keyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Key"
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
						"Key"
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
						"Key"
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Revoke Nosecret"
					]
				}
			}
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Register"
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
						"Key"
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Revoke"
					]
				}
			}
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Retrieve"
					]
				}
			}
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
						"Key"
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
						"Key"
					],
					"operation": [
						"HEAD Key"
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
						"Key"
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Update"
					]
				}
			}
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
						"Key"
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
						"Key"
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
						"Key"
					],
					"operation": [
						"Key Bind"
					]
				}
			}
		},
];
