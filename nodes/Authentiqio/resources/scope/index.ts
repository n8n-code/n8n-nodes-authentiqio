import type { INodeProperties } from 'n8n-workflow';

export const scopeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scope"
					]
				}
			},
			"options": [
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
						"Scope"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Request"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Delete"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Retrieve"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Retrieve Head"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Confirm"
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
						"Scope"
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
						"Scope"
					],
					"operation": [
						"Sign Update"
					]
				}
			}
		},
];
