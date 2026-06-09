# @n8n-dev/n8n-nodes-authentiqio

![authentiqio Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-authentiqio.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-authentiqio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing authentiqio API integrations by hand.**

Every time you connect n8n to authentiqio, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to authentiqio took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Key**, **Delete**, **Post**, **Get**, **Head**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-authentiqio
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-authentiqio`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **authentiqio API** → paste your API key
3. Drag the **authentiqio** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Key</b> (7 operations)</summary>

- Delete Key Revoke Nosecret
- Post Key Register
- Delete Key Revoke
- Get Key Retrieve
- Head Key
- Post Key Update
- Put Key Bind

</details>

<details>
<summary><b>Delete</b> (3 operations)</summary>

- Delete Key Revoke Nosecret
- Delete Key Revoke
- Delete Sign Delete

</details>

<details>
<summary><b>Post</b> (5 operations)</summary>

- Post Key Register
- Post Key Update
- Post Push Login Request
- Post Sign Request
- Post Sign Confirm

</details>

<details>
<summary><b>Get</b> (2 operations)</summary>

- Get Key Retrieve
- Get Sign Retrieve

</details>

<details>
<summary><b>Head</b> (2 operations)</summary>

- Head Key
- Head Sign Retrieve Head

</details>

<details>
<summary><b>Put</b> (2 operations)</summary>

- Put Key Bind
- Put Sign Update

</details>

<details>
<summary><b>Login</b> (1 operations)</summary>

- Post Push Login Request

</details>

<details>
<summary><b>Scope</b> (6 operations)</summary>

- Post Sign Request
- Delete Sign Delete
- Get Sign Retrieve
- Head Sign Retrieve Head
- Post Sign Confirm
- Put Sign Update

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from authentiqio docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official authentiqio OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **authentiqio** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the authentiqio API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
