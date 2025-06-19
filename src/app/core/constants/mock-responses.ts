export const mockResponses = {
  loginFailure: {
    success: false,
    message: 'Failed to process authentication request',
    help: null,
    detail: null,
    data: null
  },

  loginSuccess: {
    "success": true,
    "message": "login successful",
    "help": null,
    "detail": null,
    "data": {
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2hpbmh1cnVAYWZjaG9sZGluZ3MuY28uenciLCJpYXQiOjE3MjIyNDQ5MDQsImV4cCI6MTcyMjMzMTMwNH0.Tsknv95sjovz9C3Pifo22dmeBk2qnNGZChW8jfR1aNk",
      "tokenType": "Bearer",
      "expiresIn": 86400000,
      "user": {
        "id": 1,
        "createdAt": "2024-07-29T11:21:44.237176",
        "authorities": [
          {
            "id": 1,
            "authority": "USER"
          }
        ],
        "email": "dchinhuru@afcholdings.co.zw",
        "name": "Donald Chinhuru",
        "branch": "Nelson Mandela",
        "manager": "lngwena@afcholdings.co.zw",
        "username": "dchinhuru@afcholdings.co.zw",
        "enabled": true,
        "accountNonExpired": true,
        "credentialsNonExpired": true,
        "accountNonLocked": true
      }
    }
  },

  dashboardStats: {
    "success": true,
    "message": "stats successful",
    "help": null,
    "detail": null,
    "data": {
      "documents": 248,
      "shares": 112,
      "sharedWithMe": 98,
      "pending": 16,
      "actioned": 12
    }
  },

  recentDocuments: {
    "success": true,
    "message": "The document has been fetched!",
    "help": null,
    "detail": null,
    "data": [
      {
        "id": 152,
        "createdAt": "2024-07-30T10:44:17.192895",
        "updatedAt": "2024-07-30T10:44:17.435904",
        "deleteAt": null,
        "additionalData": {},
        "template": {
          "id": 1,
          "createdAt": "2024-07-29T16:34:35.143016",
          "updatedAt": "2024-07-29T16:34:35.143016",
          "deleteAt": null,
          "additionalData": {},
          "title": "New Windows Test Server",
          "description": "Requesting for a new Windows OS Test Server",
          "slaAgreementId": "mockSlaid",
          "mediaFileId": "aXfRsU",
          "creator": "dchinhuru@afcholdings.co.zw",
          "admin": false,
          "generic": false,
          "form": null,
          "subCategory": {
            "id": 1,
            "name": "Server Request",
            "description": "Request for new servers, server access control and server related requests",
            "templates": []
          }
        },
        "owner": "dchinhuru@afcholdings.co.zw",
        "mediaFileId": "u0Jdp7",
        "nextActionersIndex": 0,
        "nextActioners": null,
        "status": "IN_PROGRESS",
        "overdueOn": null,
        "cacheToken": null,
        "attachments": null,
        "comments": [],
        "shared": [],
        "audit": [
          {
            "id": 52,
            "createdAt": "2024-07-30T10:44:17.457319",
            "updatedAt": "2024-07-30T10:44:17.457319",
            "deleteAt": null,
            "additionalData": {},
            "message": "document created",
            "author": "dchinhuru@afcholdings.co.zw",
            "action": "NEW",
            "shared": null
          }
        ],
        "actioners": [
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": -1,
            "role": "INPUTTER",
            "status": "NONE",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "APPROVER",
            "status": "APPROVE",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "IMPLEMENTER",
            "status": "PENDING",
            "signature": "base-64"
          }
        ],
        "form": {
          "time": "1722260397523",
          "blocks": [
            {
              "id": "mhTl6ghSkV",
              "type": "paragraph",
              "data": {
                "text": "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓"
              }
            },
            {
              "id": "l98dyx3yjb",
              "type": "header",
              "data": {
                "text": "Key features",
                "level": "3"
              }
            },
            {
              "id": "os_YI4eub4",
              "type": "list",
              "data": {
                "type": "unordered",
                "items": [
                  "It is a block-style editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a>"
                ]
              }
            }
          ]
        }
      },
      {
        "id": 152,
        "createdAt": "2024-07-30T10:44:17.192895",
        "updatedAt": "2024-07-30T10:44:17.435904",
        "deleteAt": null,
        "additionalData": {},
        "template": {
          "id": 1,
          "createdAt": "2024-07-29T16:34:35.143016",
          "updatedAt": "2024-07-29T16:34:35.143016",
          "deleteAt": null,
          "additionalData": {},
          "title": "New Windows Test Server",
          "description": "Requesting for a new Windows OS Test Server",
          "slaAgreementId": "mockSlaid",
          "mediaFileId": "aXfRsU",
          "creator": "dchinhuru@afcholdings.co.zw",
          "admin": false,
          "generic": false,
          "form": null,
          "subCategory": {
            "id": 1,
            "name": "Server Request",
            "description": "Request for new servers, server access control and server related requests",
            "templates": []
          }
        },
        "owner": "dchinhuru@afcholdings.co.zw",
        "mediaFileId": "u0Jdp7",
        "nextActionersIndex": 0,
        "nextActioners": null,
        "status": "ON_HOLD",
        "overdueOn": null,
        "cacheToken": null,
        "attachments": null,
        "comments": [],
        "shared": [],
        "audit": [
          {
            "id": 52,
            "createdAt": "2024-07-30T10:44:17.457319",
            "updatedAt": "2024-07-30T10:44:17.457319",
            "deleteAt": null,
            "additionalData": {},
            "message": "document created",
            "author": "dchinhuru@afcholdings.co.zw",
            "action": "NEW",
            "shared": null
          }
        ],
        "actioners": [
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": -1,
            "role": "INPUTTER",
            "status": "NONE",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "APPROVER",
            "status": "ON_HOLD",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "IMPLEMENTER",
            "status": "PENDING",
            "signature": "base-64"
          }
        ],
        "form": {
          "time": "1722260397523",
          "blocks": [
            {
              "id": "mhTl6ghSkV",
              "type": "paragraph",
              "data": {
                "text": "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓"
              }
            },
            {
              "id": "l98dyx3yjb",
              "type": "header",
              "data": {
                "text": "Key features",
                "level": "3"
              }
            },
            {
              "id": "os_YI4eub4",
              "type": "list",
              "data": {
                "type": "unordered",
                "items": [
                  "It is a block-style editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a>"
                ]
              }
            }
          ]
        }
      },
      {
        "id": 152,
        "createdAt": "2024-07-30T10:44:17.192895",
        "updatedAt": "2024-07-30T10:44:17.435904",
        "deleteAt": null,
        "additionalData": {},
        "template": {
          "id": 1,
          "createdAt": "2024-07-29T16:34:35.143016",
          "updatedAt": "2024-07-29T16:34:35.143016",
          "deleteAt": null,
          "additionalData": {},
          "title": "New Windows Test Server",
          "description": "Requesting for a new Windows OS Test Server",
          "slaAgreementId": "mockSlaid",
          "mediaFileId": "aXfRsU",
          "creator": "dchinhuru@afcholdings.co.zw",
          "admin": false,
          "generic": false,
          "form": null,
          "subCategory": {
            "id": 1,
            "name": "Server Request",
            "description": "Request for new servers, server access control and server related requests",
            "templates": []
          }
        },
        "owner": "dchinhuru@afcholdings.co.zw",
        "mediaFileId": "u0Jdp7",
        "nextActionersIndex": 0,
        "nextActioners": null,
        "status": "COMPLETED",
        "overdueOn": null,
        "cacheToken": null,
        "attachments": null,
        "comments": [],
        "shared": [],
        "audit": [
          {
            "id": 52,
            "createdAt": "2024-07-30T10:44:17.457319",
            "updatedAt": "2024-07-30T10:44:17.457319",
            "deleteAt": null,
            "additionalData": {},
            "message": "document created",
            "author": "dchinhuru@afcholdings.co.zw",
            "action": "NEW",
            "shared": null
          }
        ],
        "actioners": [
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": -1,
            "role": "INPUTTER",
            "status": "NONE",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "INPUTTER",
            "status": "PENDING",
            "signature": "base-64"
          }
        ],
        "form": {
          "time": "1722260397523",
          "blocks": [
            {
              "id": "mhTl6ghSkV",
              "type": "paragraph",
              "data": {
                "text": "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓"
              }
            },
            {
              "id": "l98dyx3yjb",
              "type": "header",
              "data": {
                "text": "Key features",
                "level": "3"
              }
            },
            {
              "id": "os_YI4eub4",
              "type": "list",
              "data": {
                "type": "unordered",
                "items": [
                  "It is a block-style editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a>"
                ]
              }
            }
          ]
        }
      },
      {
        "id": 152,
        "createdAt": "2024-07-30T10:44:17.192895",
        "updatedAt": "2024-07-30T10:44:17.435904",
        "deleteAt": null,
        "additionalData": {},
        "template": {
          "id": 1,
          "createdAt": "2024-07-29T16:34:35.143016",
          "updatedAt": "2024-07-29T16:34:35.143016",
          "deleteAt": null,
          "additionalData": {},
          "title": "New Windows Test Server",
          "description": "Requesting for a new Windows OS Test Server",
          "slaAgreementId": "mockSlaid",
          "mediaFileId": "aXfRsU",
          "creator": "dchinhuru@afcholdings.co.zw",
          "admin": false,
          "generic": false,
          "form": null,
          "subCategory": {
            "id": 1,
            "name": "Server Request",
            "description": "Request for new servers, server access control and server related requests",
            "templates": []
          }
        },
        "owner": "dchinhuru@afcholdings.co.zw",
        "mediaFileId": "u0Jdp7",
        "nextActionersIndex": 0,
        "nextActioners": null,
        "status": "OVERDUE",
        "overdueOn": null,
        "cacheToken": null,
        "attachments": null,
        "comments": [],
        "shared": [],
        "audit": [
          {
            "id": 52,
            "createdAt": "2024-07-30T10:44:17.457319",
            "updatedAt": "2024-07-30T10:44:17.457319",
            "deleteAt": null,
            "additionalData": {},
            "message": "document created",
            "author": "dchinhuru@afcholdings.co.zw",
            "action": "NEW",
            "shared": null
          }
        ],
        "actioners": [
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": -1,
            "role": "INPUTTER",
            "status": "NONE",
            "signature": "base-64"
          },
          {
            "actioner": "jdoe@c.com",
            "oldActioner": "",
            "index": 0,
            "role": "INPUTTER",
            "status": "PENDING",
            "signature": "base-64"
          }
        ],
        "form": {
          "time": "1722260397523",
          "blocks": [
            {
              "id": "mhTl6ghSkV",
              "type": "paragraph",
              "data": {
                "text": "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓"
              }
            },
            {
              "id": "l98dyx3yjb",
              "type": "header",
              "data": {
                "text": "Key features",
                "level": "3"
              }
            },
            {
              "id": "os_YI4eub4",
              "type": "list",
              "data": {
                "type": "unordered",
                "items": [
                  "It is a block-style editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a>"
                ]
              }
            }
          ]
        }
      }
    ]
  },

  getCategories: {
    "success": true,
    "message": "categories fetched",
    "help": null,
    "detail": null,
    "data": [
      {
        "id": 1,
        "name": "ICT",
        "subCategories": [
          {
            "id": 168,
            "name": "Server Request",
            "description": "Request for new servers, server access control and server related requests",
            "templates": []
          }
        ]
      },
      {
        "id": 2,
        "name": "Insurance",
        "subCategories": []
      }
    ]
  },

  getUsers: {
    "success": true,
    "message": "Users fetched!",
    "help": null,
    "detail": null,
    "data": [
      {
        "cn": null,
        "name": "Administrator",
        "email": "administrator@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{1f05a927-9c7b-44e2-b5d7-43a35bbf0487}",
        "email": "systemmailbox{1f05a927-9c7b-44e2-b5d7-43a35bbf0487}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}",
        "email": "systemmailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{e0dc1c29-89c3-4034-b678-e6c29d823ed9}",
        "email": "systemmailbox{e0dc1c29-89c3-4034-b678-e6c29d823ed9}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "DiscoverySearchMailbox {D919BA05-46A6-415f-80AD-7E09334BB852}",
        "email": "discoverysearchmailbox{d919ba05-46a6-415f-80ad-7e09334bb852}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Migration.8f3e7716-2011-43e4-96b1-aba62d229136",
        "email": "migration.8f3e7716-2011-43e4-96b1-aba62d229136@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "FederatedEmail.4c1f4d8b-8179-4148-93bf-00a95fa1e042",
        "email": "federatedemail.4c1f4d8b-8179-4148-93bf-00a95fa1e042@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{D0E409A0-AF9B-4720-92FE-AAC869B0D201}",
        "email": "systemmailbox{d0e409a0-af9b-4720-92fe-aac869b0d201}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{2CE34405-31BE-455D-89D7-A7C7DA7A0DAA}",
        "email": "systemmailbox{2ce34405-31be-455d-89d7-a7c7da7a0daa}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SystemMailbox{8cc370d3-822a-4ab8-a926-bb94bd0641a9}",
        "email": "systemmailbox{8cc370d3-822a-4ab8-a926-bb94bd0641a9}@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxe564eb1897634426908ae175de875320",
        "email": "healthmailboxe564eb1897634426908ae175de875320@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox9721b615c08e4360b8ed99a8c10b8b99",
        "email": "healthmailbox9721b615c08e4360b8ed99a8c10b8b99@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox511866cec5974a15a50b0be71601202e",
        "email": "healthmailbox511866cec5974a15a50b0be71601202e@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox446288c2d808432ab502e6f53ba4371c",
        "email": "healthmailbox446288c2d808432ab502e6f53ba4371c@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox015192a1fb4448bbbac4fa555a76f7cb",
        "email": "healthmailbox015192a1fb4448bbbac4fa555a76f7cb@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxbbd8b47ea008476897dd1dc5d5ed6b49",
        "email": "healthmailboxbbd8b47ea008476897dd1dc5d5ed6b49@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxf7feae89973f471a8a044f8190a1ae67",
        "email": "healthmailboxf7feae89973f471a8a044f8190a1ae67@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxf7b7d949037346d6999ae328e74c4da6",
        "email": "healthmailboxf7b7d949037346d6999ae328e74c4da6@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox93e543453ccc44069fa4a62c94241fc4",
        "email": "healthmailbox93e543453ccc44069fa4a62c94241fc4@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox7c19d1d5d41b42cd9bb20529c329e946",
        "email": "healthmailbox7c19d1d5d41b42cd9bb20529c329e946@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox9228d51b0653453fbf3dbd8a9e6c3419",
        "email": "healthmailbox9228d51b0653453fbf3dbd8a9e6c3419@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxf96cd7ced59c4570af57e23e963b8bef",
        "email": "healthmailboxf96cd7ced59c4570af57e23e963b8bef@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox2b3b29978dbf492b88733cc8984843c4",
        "email": "healthmailbox2b3b29978dbf492b88733cc8984843c4@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox416c446a487d41838d73fb6e55db877f",
        "email": "healthmailbox416c446a487d41838d73fb6e55db877f@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox23cff826f39e43aba1ac3b22accdbbe2",
        "email": "healthmailbox23cff826f39e43aba1ac3b22accdbbe2@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox7c2b0538501a4be0a27641b22fb107fe",
        "email": "healthmailbox7c2b0538501a4be0a27641b22fb107fe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox71a50c5bbd604eb784aa72f01616e9c5",
        "email": "healthmailbox71a50c5bbd604eb784aa72f01616e9c5@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox09cd69d6e6d440eb998ec4940ed87f34",
        "email": "healthmailbox09cd69d6e6d440eb998ec4940ed87f34@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox51506641621542c585f28c03f3627334",
        "email": "healthmailbox51506641621542c585f28c03f3627334@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox5725775244d24151a6632e412289585e",
        "email": "healthmailbox5725775244d24151a6632e412289585e@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxf8d888c4136040bba22f5729dbf8599b",
        "email": "healthmailboxf8d888c4136040bba22f5729dbf8599b@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxd493028ec46541b9bf57a988ec921c90",
        "email": "healthmailboxd493028ec46541b9bf57a988ec921c90@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "CustomerService",
        "email": "customerservice@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dafe Muzira",
        "email": "dmuzira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxba376513433f4809a3ca3eec04405f93",
        "email": "healthmailboxba376513433f4809a3ca3eec04405f93@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxd7f31ea9f00547bfbd8e30a0c938f906",
        "email": "healthmailboxd7f31ea9f00547bfbd8e30a0c938f906@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxa0ad6fe930ee4ca9ae3e27d9354253e1",
        "email": "healthmailboxa0ad6fe930ee4ca9ae3e27d9354253e1@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox1bd2979c9cc1483c85d8ac5f55c7a7bd",
        "email": "healthmailbox1bd2979c9cc1483c85d8ac5f55c7a7bd@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Walter Madzimure",
        "email": "wmadzimure@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Knowledge Gundiro",
        "email": "kgundiro@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cloudy Manyande",
        "email": "cmanyande@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Mugwanda",
        "email": "rmugwanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Derek  Marawo",
        "email": "dmarawo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Melissah Majuru",
        "email": "mmajuru@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Natasha Mandawa",
        "email": "nmandawa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Brenda Mbewe",
        "email": "bmbewe@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Elizabeth Bungu",
        "email": "ebungu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Elizabeth Chitereka",
        "email": "echitereka@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Erasmas Ngandu",
        "email": "engandu@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farai sanyamahwe",
        "email": "fsanyamahwe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Humphry Matienga",
        "email": "hmatienga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Rwambiwa",
        "email": "krwambiwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Solina Cheharawe",
        "email": "scheharawe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tanaka Machana",
        "email": "tmachana@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Hwara",
        "email": "thwara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinayeshe Mushiri",
        "email": "tmushiri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Charles Muza",
        "email": "cmuza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chipo Moyo",
        "email": "chipomoyo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "James Chikanga",
        "email": "jchikanga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lynn Chingwaru",
        "email": "lchingwaru@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Winnet Bangajena",
        "email": "wbangajena@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinotenda  Makuwa",
        "email": "tmakuwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lewis Sekanewana",
        "email": "lsekanewana@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farai Musariri",
        "email": "fmusariri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Prisca Tembo",
        "email": "ptembo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinashe Mushayamunda",
        "email": "tmushayamunda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinetariro Munjanja",
        "email": "tmunjanja@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takura Tanyanyiwa",
        "email": "ttanyanyiwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Beatrix Munyurwa",
        "email": "bmunyurwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alouis Muzhira",
        "email": "amuzhira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kenneth Chitando",
        "email": "kchitando@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wendleen Mafuta",
        "email": "wmafuta@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Keresencia Murenje",
        "email": "kmurenje@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kumbirai Manyepwa",
        "email": "kmanyepwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Talent Borerwe",
        "email": "tborerwe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tichakunda Moyo",
        "email": "tmoyo@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Kandengwa",
        "email": "skandengwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudzai Machimbira",
        "email": "kmachimbira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Talent Hove",
        "email": "thove@afcholdings.co.zw",
        "branch": "Chivi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Abnel Rukara",
        "email": "arukara@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Edinah Lunga",
        "email": "elunga@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ignatius Musabayana",
        "email": "imusabayana@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Norest Kagande",
        "email": "nkagande@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ngonidzashe Matsvaire",
        "email": "nmatsvaire@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alois Koffi",
        "email": "akoffi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Richard Rapozo",
        "email": "rrapozo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lucia Mutinha",
        "email": "lmutinha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cosmas Chiwara",
        "email": "cchiwara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ratidzo Masakadza",
        "email": "rmasakadza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Mushoriwa",
        "email": "tmushoriwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Amanda Dube",
        "email": "adube@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Godwin Tinarwo",
        "email": "gtinarwo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fadzai Madamombe",
        "email": "fmadamombe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mufudzi Watungwa",
        "email": "mwatungwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joanna Matanda",
        "email": "jmatanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sailos Musiyiwa",
        "email": "smusiyiwa@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Keith Dzumbunu",
        "email": "kdzumbunu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Felix Mujaka",
        "email": "fmujaka@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Emilliott Ndlovu",
        "email": "endlovu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Temba Ruvingo",
        "email": "truvingo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ronald Ruswa",
        "email": "rruswa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ngonidzashe Kanda",
        "email": "nkanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Daniel Dube",
        "email": "ddube@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Naume Kusina",
        "email": "nkusina@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice Mapfiza",
        "email": "amapfiza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takudzwa Kutoka",
        "email": "tkutoka@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Terrence Mufarinya",
        "email": "tmufarinya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mangani Macheme",
        "email": "mmacheme@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dunmore Masaiti",
        "email": "dmasaiti@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Paidemoyo Mahundi",
        "email": "pmahundi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rudairo Kaparipari",
        "email": "rkaparipari@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Blasio Nyakutumba",
        "email": "bnyakutumba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Memory Magamba",
        "email": "mmagamba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nicholas Matsengarwodzi",
        "email": "nmatsengarwodzi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ian Davu",
        "email": "idavu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbai Maidza",
        "email": "vmaidza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wiseman Madzivire",
        "email": "wmadzivire@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Winnie William",
        "email": "wwilliam@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vusimusi Chuma",
        "email": "vchuma@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbiso Koti",
        "email": "vkoti@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbai Doma",
        "email": "vdoma@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Victoria Chizivano",
        "email": "vchizivano@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tsitsi Semwayo",
        "email": "tsemwayo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tsitsi Mbaiwa",
        "email": "tmbaiwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Teurayi Nyamowa",
        "email": "tnyamowa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Terence Mazivanhanga",
        "email": "tmazivanhanga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Terence Mashaira",
        "email": "tmashaira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Terence Choruwa",
        "email": "tchoruwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Mwagura",
        "email": "tmwagura@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tariro Mukanyi",
        "email": "tmukanyi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Muzondo",
        "email": "tmuzondo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapfumaneyi Nhamburo",
        "email": "tnhamburo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tambudzai Ndidzano",
        "email": "tndidzano@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Talent Munemo Hlahla",
        "email": "thlahla@afcholdings.co.zw",
        "branch": "Rusape",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takawira Tyavambiza",
        "email": "ttyavambiza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tafadzwa Pangeti",
        "email": "tpangeti@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tafadzwa Mundete",
        "email": "tmundete@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sinanzeni Mbangani",
        "email": "smbangani@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sikhulekile Mahlangu",
        "email": "smahlangu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sibert Chitokwindo",
        "email": "schitokwindo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sharon Gurupira",
        "email": "sgurupira@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Samuel Magodo",
        "email": "smagodo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Samson Sibanda",
        "email": "ssibanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rutendo Mushavi",
        "email": "rmushavi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Mupfudze",
        "email": "rmupfudze@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rudo Chiduwa",
        "email": "rchiduwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Richard Maromo",
        "email": "rmaromo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rex Sungai",
        "email": "rsungai@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Priscilla Munyeza",
        "email": "pmunyeza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Prince Mutangadura",
        "email": "pmutangadura@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pride Neshamba",
        "email": "pneshamba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Precious Mukwehwa",
        "email": "pmukwehwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Piniel Machakwa",
        "email": "pmachakwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Phillimon Mutambaneshiri",
        "email": "pmutambaneshiri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Phillemon Mugumbate",
        "email": "pmugumbate@afcholdings.co.zw",
        "branch": "InternationalBanking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Perpertual Chirandu",
        "email": "pchirandu@afcholdings.co.zw",
        "branch": "Norton",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pellagia Marimo",
        "email": "pmarimo@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pavari Chiutsi",
        "email": "pchiutsi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patrick Gwara",
        "email": "pgwara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patricia Simango",
        "email": "psimango@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patience Dirwai",
        "email": "pdirwai@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patience Masawi",
        "email": "pmasawi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patience Chifamba",
        "email": "pchifamba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Olivia Muchineripi",
        "email": "omuchineripi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Olam Marufu",
        "email": "omarufu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyengeterai Zvenyika",
        "email": "nzvenyika@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyararai Mavenga",
        "email": "nmavenga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nomsa Mungadzi",
        "email": "nmungadzi@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Naomi Mazango",
        "email": "nmazango@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nancy Vera",
        "email": "nvera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Moses Mabura",
        "email": "mmabura@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Monica Chitima",
        "email": "mchitima@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Misheck Chigatse",
        "email": "mchigatse@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Maggie Mawokomatanda",
        "email": "mmawokomatanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Luckson Ndoorwi",
        "email": "lndoorwi@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lovemore Rwazemba",
        "email": "lrwazemba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lightwell Chapungu",
        "email": "lchapungu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Liberty Matiza",
        "email": "lmatiza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudzai Pasipanodya",
        "email": "kpasipanodya@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Julia Charamanda",
        "email": "jcharamanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joseph Saguru",
        "email": "jsaguru@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joseph Maburuse",
        "email": "jmaburuse@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joseph Kabira",
        "email": "jkabira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "John Dzingirai",
        "email": "jdzingirai@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jameson Mupindiko",
        "email": "jmupindiko@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ishmael Dzakandwa",
        "email": "idzakandwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ignatius Dombodzvuku",
        "email": "idombodzvuku@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Hlangabeza Dube",
        "email": "hdube@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Hilton Sadomba",
        "email": "hsadomba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Griffin Jaji",
        "email": "gjaji@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gladys Chigunde",
        "email": "gchigunde@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gilbert Murota",
        "email": "gmurota@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Getrude Mupandawana",
        "email": "gmupandawana@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gaudencia Rukuni",
        "email": "grukuni@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fungai Mhlanga",
        "email": "fmhlanga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Francis Macheka",
        "email": "fmacheka@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Francis Kusema",
        "email": "fkusema@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Florence Masendeke",
        "email": "fmasendeke@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Evans Mudima",
        "email": "emudima@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Elizabeth Mukarakate",
        "email": "emukarakate@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Elfas Chimbera",
        "email": "echimbera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Douglas Mpofu",
        "email": "dmpofu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dorcas Makarichi",
        "email": "dmakarichi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "David Mbiba",
        "email": "dmbiba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "David Makanza",
        "email": "dmakanza@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Danmore Chitena",
        "email": "dchitena@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clever Mpofu",
        "email": "cmpofu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chipo Mazhara",
        "email": "cmazhara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chiedza Runhare",
        "email": "crunhare@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chelesile Msipha",
        "email": "cmsipha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Charmaine Makaza",
        "email": "cmakaza@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chapisa Mashanda",
        "email": "cmashanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cathrine Sabau",
        "email": "csabau@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Brighton Moyo",
        "email": "bmoyo@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bright Mugwagwa",
        "email": "bmugwagwa@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Brenda Garande",
        "email": "bgarande@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Blessing Siyakurima",
        "email": "bsiyakurima@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Blessing Murimo",
        "email": "bmurimo@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Barbara Ephraim",
        "email": "bephraim@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ashiton Masango",
        "email": "amasango@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Anna Bayayi",
        "email": "abayayi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Andrew Whinya",
        "email": "awhinya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alwyn Chirinda",
        "email": "achirinda@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alex Bara",
        "email": "abara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kundai Mombeshora",
        "email": "kmombeshora@afcholdings.co.zw",
        "branch": "InternationalBanking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Regerai Chikutuma",
        "email": "rchikutuma@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wadzanai Kanyuchi",
        "email": "wkanyuchi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dzoraivaripasi Mudavanhu",
        "email": "dmudavanhu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clayton Mudzamba",
        "email": "cmudzamba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Divine Ngwenya",
        "email": "dngwenya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mavis Basopo",
        "email": "mbasopo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Solomon  Muendesi",
        "email": "smuendesi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joseph Chigwedere",
        "email": "jchigwedere@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vongai Sanyamandwe",
        "email": "vsanyamandwe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takaindisa  Musingawani",
        "email": "tmusingawani@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Caroline Hamandishe",
        "email": "chamandishe@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pamela Machingambi",
        "email": "pmachingambi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Memory Kutadzaushe",
        "email": "mkutadzaushe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Mushinyi",
        "email": "tmushinyi@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tariro Maregere",
        "email": "tmaregere@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Costain Ndhlovu",
        "email": "cndhlovu@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Narbas Makwara",
        "email": "nmakwara@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lovemore Kazondo",
        "email": "lkazondo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Veronica Chipangura",
        "email": "vchipangura@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Esnath Mutemeri",
        "email": "emutemeri@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Violet Jakarasi",
        "email": "vjakarasi@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Emmah Jenje",
        "email": "ejenje@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Aquilina Chingwena",
        "email": "achingwena@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Judith Mafunda-Kusena",
        "email": "jmafunda@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rachael Moyo",
        "email": "rmoyo@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rhoda Nyadundu",
        "email": "rnyadundu@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Justine Chikokore",
        "email": "jchikokore@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fanwell Sibanda",
        "email": "fsibanda@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Loraine Mvura",
        "email": "lmvura@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Collen Mudenhe",
        "email": "cmudenhe@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tsitsi Chakaza",
        "email": "tchakaza@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Walter Mleya",
        "email": "wmleya@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice Jeke",
        "email": "ajeke@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ivan Musungwa",
        "email": "imusungwa@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mercy Watadza",
        "email": "mwatadza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice Gunda",
        "email": "agunda@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Obert Rugube",
        "email": "orugube@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ivy Maurede",
        "email": "imaurede@afcholdings.co.zw",
        "branch": "Rusape",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Washington Gatsi",
        "email": "wgatsi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mavelous  Musakaruka",
        "email": "mmusakaruka@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyasha Chibaya",
        "email": "nchibaya@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Virimayi Matematema",
        "email": "vmatematema@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tamanda Kambale",
        "email": "tkambale@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clive Kopera",
        "email": "ckopera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Felicity Munozogara",
        "email": "fmunozogara@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jeffrey Zgambo",
        "email": "jzgambo@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tracy  Mawire",
        "email": "tracymawire@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Memory Madhanzi",
        "email": "mmadhanzi@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mary Chikwaure",
        "email": "mchikwaure@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jefter Kunzekweguta",
        "email": "jkunzekweguta@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dereck Shawatu",
        "email": "dshawatu@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Righteous Mushakarara",
        "email": "rmushakarara@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Gumbo",
        "email": "sgumbo@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farai Dendere",
        "email": "fdendere@afcholdings.co.zw",
        "branch": "Jerera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Confidence  Jaricha",
        "email": "cjaricha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ketias Maposa",
        "email": "kmaposa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Laina Gawe",
        "email": "lgawe@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lamuel Chaza",
        "email": "lchaza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kenneth Matimbura",
        "email": "kmatimbura@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Nhutu",
        "email": "rnhutu@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gift Chinda",
        "email": "gchinda@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbiso Pondo",
        "email": "vpondo@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ntando Mhlanga",
        "email": "nmhlanga@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Perseverance Shumba",
        "email": "shumbap@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patience N. Sande",
        "email": "psande@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ntombizami Nyathi",
        "email": "nnyathi@afcholdings.co.zw",
        "branch": "jmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "William Tavarwisa",
        "email": "wtavarwisa@afcholdings.co.zw",
        "branch": "Westgate",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joyfree Mupuro",
        "email": "jmupuro@afcholdings.co.zw",
        "branch": "Chipinge",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Baggio Shirichena",
        "email": "bshirichena@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nokuthula Mukwe",
        "email": "nmukwe@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gift Mutava",
        "email": "gmutava@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patience Spero",
        "email": "pspero@afcholdings.co.zw",
        "branch": "Chivi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tamuka Mpofu",
        "email": "tmpofu@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ethel Kanhenga",
        "email": "ekanhenga@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Quotations",
        "email": "quotations@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Freddie  Samapenda",
        "email": "fsamapenda@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kiven Chikukwa",
        "email": "kchikukwa@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinashe Matombo",
        "email": "tmatombo@afcholdings.co.zw",
        "branch": "Mubaira",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Robin Murasiranwa",
        "email": "rmurasiranwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith Mutandavari",
        "email": "fmutandavari@afcholdings.co.zw",
        "branch": "Nyika",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Susan Desire  Chivinge",
        "email": "schivinge@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farai Jochore",
        "email": "fjochore@afcholdings.co.zw",
        "branch": "Chivi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Albert  Rutsvara",
        "email": "arutsvara@afcholdings.co.zw",
        "branch": "Binga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Modester Matsa",
        "email": "mmatsa@afcholdings.co.zw",
        "branch": "Westgate",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Malunga Siziba",
        "email": "msiziba@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ebenezer Chinawa",
        "email": "echinawa@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith N. Mapope",
        "email": "fmapope@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Denver Manyeruke",
        "email": "dmanyeruke@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tafara Matupire",
        "email": "tmatupire@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lingani Ncube",
        "email": "lncube@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Spiwe Kudzotsa",
        "email": "skudzotsa@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takura Chidaya",
        "email": "tchidaya@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Hlelolwami C. Ndlovu",
        "email": "hndlovu@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Placidia Masitera",
        "email": "pmasitera@afcholdings.co.zw",
        "branch": "Chipinge",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Admire Mutawarira",
        "email": "amutawarira@afcholdings.co.zw",
        "branch": "Murewa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Martin Maposa",
        "email": "mmaposa@afcholdings.co.zw",
        "branch": "Hwange",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nkosinathi Matutu",
        "email": "nmatutu@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gratchen Tshuma",
        "email": "gtshuma@afcholdings.co.zw",
        "branch": "Gwanda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Priscilla Musundire",
        "email": "pmusundire@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rudo Manyureni",
        "email": "rmanyureni@afcholdings.co.zw",
        "branch": "Gwanda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "John Chafungamoyo",
        "email": "jchafungamoyo@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sindiso Sibanda",
        "email": "sindisibanda@afcholdings.co.zw",
        "branch": "Hwange",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice Madekufamba",
        "email": "amadekufamba@afcholdings.co.zw",
        "branch": "Murewa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Hopewell  Zijena",
        "email": "hzijena@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Privelage Mudikani",
        "email": "pmudikani@afcholdings.co.zw",
        "branch": "Nyanga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Crosance Mverechena",
        "email": "cmverechena@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mabel Manwere",
        "email": "mmanwere@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chenjerai Chigwada",
        "email": "cchigwada@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Prosper Makotore",
        "email": "pmakotore@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Samson Mugebe",
        "email": "smugebe@afcholdings.co.zw",
        "branch": "Murambinda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Maxwell Kufakunesu",
        "email": "mkufakunesu@afcholdings.co.zw",
        "branch": "Hwedza",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gerald Chiromo",
        "email": "gchiromo@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Otillia Karombo",
        "email": "okarombo@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Caution Zingi",
        "email": "czingi@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Finias Vakisai",
        "email": "fvakisai@afcholdings.co.zw",
        "branch": "Nyika",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Godson Muganhu",
        "email": "gmuganhu@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Precious Chibwana",
        "email": "pchibwana@afcholdings.co.zw",
        "branch": "Hwange",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Douglas Mpariwa",
        "email": "dmpariwa@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Andrew Tawodzera",
        "email": "atawodzera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Munyaradzi Marimo",
        "email": "mmarimo@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kurai Mpofu",
        "email": "kmpofu@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Tsikira",
        "email": "ttsikira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Linda Toto",
        "email": "ltoto@afcholdings.co.zw",
        "branch": "Nyanga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wonder Mpinga",
        "email": "wmpinga@afcholdings.co.zw",
        "branch": "Kotwa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Yeukai Mapfumo",
        "email": "ymapfumo@afcholdings.co.zw",
        "branch": "Kotwa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyevero Mutasa",
        "email": "nmutasa@afcholdings.co.zw",
        "branch": "Kotwa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Auxlia Yemurai Chabata",
        "email": "achabata@afcholdings.co.zw",
        "branch": "Murewa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Promise Mateza",
        "email": "pmateza@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wimbikai Manonga",
        "email": "wmanonga@afcholdings.co.zw",
        "branch": "Checheche",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jimu Ashirayi",
        "email": "jashirayi@afcholdings.co.zw",
        "branch": "Nyanga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Victor Musendo",
        "email": "vmusendo@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Justice Maburukwa",
        "email": "jmaburukwa@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Prince Muchena",
        "email": "pmuchena@afcholdings.co.zw",
        "branch": "Nyika",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Moeketso  Abu-Basutu",
        "email": "mabu-basutu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Washington Samu",
        "email": "wsamu@afcholdings.co.zw",
        "branch": "Mubaira",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tichaona  Muswere",
        "email": "tmuswere@afcholdings.co.zw",
        "branch": "Hwedza",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Mavima",
        "email": "tmavima@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takunda Mutambudzi",
        "email": "tmutambudzi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Phidelis Bachi",
        "email": "pbachi@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Caroline Mozhendi",
        "email": "cmozhendi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Aldrine  Makaure",
        "email": "amakaure@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chantelle Maenzanise",
        "email": "cmaenzanise@afcholdings.co.zw",
        "branch": "Jerera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Washington  Masocha",
        "email": "wmasocha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Buhlebenkosi Ndlovu",
        "email": "bndlovu@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nelson  Chikasha",
        "email": "nchikasha@afcholdings.co.zw",
        "branch": "Jerera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Crytone Mudekwa",
        "email": "cmudekwa@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Everjoy Gwende",
        "email": "egwende@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Yvonne Mutema",
        "email": "ymutema@afcholdings.co.zw",
        "branch": "Magunje",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Luther Madzi",
        "email": "lmadzi@afcholdings.co.zw",
        "branch": "Binga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ishebatsirai Chikomwe",
        "email": "ichikomwe@afcholdings.co.zw",
        "branch": "Magunje",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fungai Chitsunge",
        "email": "fchitsunge@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe C. Ngubo",
        "email": "sngubo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farmer T. Murashiki",
        "email": "fmurashiki@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbani Zirumba",
        "email": "szirumba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tawanda Dzingirai",
        "email": "tdzingirai@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kefasi Murira",
        "email": "kmurira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joshua Matotote",
        "email": "jmatotote@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Leopold Bhobho",
        "email": "lbhobho@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sydney Benza",
        "email": "sbenza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Duduzile Mungwari",
        "email": "dmungwari@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Owen Gava",
        "email": "ogava@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Getrude Ugeni",
        "email": "gugeni@afcholdings.co.zw",
        "branch": "Murambinda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Christopher Madzura",
        "email": "cmadzura@afcholdings.co.zw",
        "branch": "Chipinge",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Albert  Lungu",
        "email": "alungu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tichaona Gomba",
        "email": "tgomba@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbai Timbe",
        "email": "vtimbe@afcholdings.co.zw",
        "branch": "Murambinda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyasha Mupfunya",
        "email": "nmupfunya@afcholdings.co.zw",
        "branch": "Murambinda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takunda Njodzi",
        "email": "tnjodzi@afcholdings.co.zw",
        "branch": "Checheche",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Portia Chiwetu",
        "email": "pchiwetu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mitchel Antonio",
        "email": "mantonio@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Robert Mhondiwa",
        "email": "rmhondiwa@afcholdings.co.zw",
        "branch": "Hwedza",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Mundirwa",
        "email": "tmundirwa@afcholdings.co.zw",
        "branch": "Magunje",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Makiseni",
        "email": "rmakiseni@afcholdings.co.zw",
        "branch": "Gokwe",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Letwin Nyathi",
        "email": "lnyathi@afcholdings.co.zw",
        "branch": "Gokwe",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Edmore Mbambande",
        "email": "embambande@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Allan Tsarukanai",
        "email": "atsarukanai@afcholdings.co.zw",
        "branch": "Gokwe",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith Mkandatsamba",
        "email": "fmkandatsamba@afcholdings.co.zw",
        "branch": "Gokwe",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Moses  M. Mhlanga",
        "email": "mmhlanga@afcholdings.co.zw",
        "branch": "Gwanda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Novuyo Ndlovu",
        "email": "ndlovun@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bettas Makwara",
        "email": "bmakwara@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gugulethu S. Ncube",
        "email": "gncube@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rejoice Mpunzi",
        "email": "rmpunzi@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lancelot Tsvangira",
        "email": "ltsvangira@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Tandavantu",
        "email": "ttandavantu@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "FCM | AFC Holdings",
        "email": "fcm@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Irvine Munoriarwa",
        "email": "imunoriarwa@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ezekiel Katena",
        "email": "ekatena@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sipiwe Munjanja",
        "email": "smunjanja@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jeffrey Zvinavashe",
        "email": "jzvinavashe@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Judith Mupezeni",
        "email": "jmupezeni@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chamunoda Kafesu",
        "email": "ckafesu@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wilfred  N. Mhike",
        "email": "wmhike@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ronald Sithole",
        "email": "rsithole@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudzai Ziweni",
        "email": "kziweni@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Advance Seka",
        "email": "aseka@afcholdings.co.zw",
        "branch": "jmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Noel Sibanda",
        "email": "nsibanda@afcholdings.co.zw",
        "branch": "Filabusi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lindiwe Shonhiwa",
        "email": "lshonhiwa@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinashe Owen Chizenga",
        "email": "tchizenga@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ellen  Hassan",
        "email": "ehassan@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Linah Mbizwo Majama",
        "email": "lmbizwo@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Future Ndlovu",
        "email": "fndlovu@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Musilahane Moyo",
        "email": "mmoyo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ngonidzashe Nyakudziwanza",
        "email": "nnyakudziwanza@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Perrings  Bongani Moyo",
        "email": "pmoyo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Siyeza Mpofu",
        "email": "smpofu@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbayi Madondo",
        "email": "vmadondo@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Prisca Murapa",
        "email": "pmurapa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Masline Msiza",
        "email": "mmsiza@afcholdings.co.zw",
        "branch": "Gwanda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "SelfService",
        "email": "selfservice@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice  Mawisire",
        "email": "amawisire@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Linda Chakupa",
        "email": "lchakupa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cleophas Mushuku",
        "email": "cmushuku@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Carlos Mushambi",
        "email": "cmushambi@afcholdings.co.zw",
        "branch": "MtDarwin",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Thabiso Madzi",
        "email": "tmadzi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Perpetua F. Mhishi",
        "email": "pmhishi@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Luckson Wekwete",
        "email": "lwekwete@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tanaka Machakaire",
        "email": "tmachakaire@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Definate B T Gweru",
        "email": "dgweru@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rashayi  Bope",
        "email": "rbope@afcholdings.co.zw",
        "branch": "Hwedza",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Star  Musimwa",
        "email": "smusimwa@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Appolonia Zembe",
        "email": "azembe@afcholdings.co.zw",
        "branch": "Westgate",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rodney Chindenga",
        "email": "rchindenga@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nhamo Khumbula",
        "email": "nkhumbula@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ngonidzashe Zariro",
        "email": "nzariro@afcholdings.co.zw",
        "branch": "Mubaira",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Munashe Mavesere",
        "email": "mmavesere@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clayton Murandu",
        "email": "cmurandu@afcholdings.co.zw",
        "branch": "jmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mercy Nduna",
        "email": "mnduna@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Nyamutswa",
        "email": "tnyamutswa@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Monalisa Martha Musorodzata",
        "email": "mbasvi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Michelle Murira",
        "email": "mmurira@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Govere",
        "email": "kgovere@afcholdings.co.zw",
        "branch": "Rushinga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jonah Kanda",
        "email": "jkanda@afcholdings.co.zw",
        "branch": "Rushinga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jamunosi Mutendeudzi",
        "email": "jmutendeudzi@afcholdings.co.zw",
        "branch": "Rushinga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Herbert Hunduza",
        "email": "hhunduza@afcholdings.co.zw",
        "branch": "Rushinga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Netsai Jairosi",
        "email": "njairosi@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Noah Sithole",
        "email": "nsithole@afcholdings.co.zw",
        "branch": "Gutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nakayi Nyabeze",
        "email": "nnyabeze@afcholdings.co.zw",
        "branch": "Gutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Arnold  Mazonde",
        "email": "amazonde@afcholdings.co.zw",
        "branch": "Gutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mary Mago Mashila",
        "email": "mmago@afcholdings.co.zw",
        "branch": "Gutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Busani Nkiwane",
        "email": "bnkiwane@afcholdings.co.zw",
        "branch": "Hwange",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tarisai Magaya",
        "email": "tmagaya@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Starline Mushore",
        "email": "smushore@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Liona Musiteri",
        "email": "lmusiteri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Danham Chindedza",
        "email": "dchindedza@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Priscilla Ncube",
        "email": "pncube@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wonder Mutisi",
        "email": "wmutisi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tamuka Ngugama",
        "email": "tngugama@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Hilton Marira",
        "email": "hmarira@afcholdings.co.zw",
        "branch": "Kopje Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Micaiah Mgugu",
        "email": "mmgugu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbai Tarumbira",
        "email": "vtarumbira@afcholdings.co.zw",
        "branch": "MtDarwin",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cosmas Masawo",
        "email": "cmasawo@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Charity Munyaradzi",
        "email": "rmunyaradzi@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gilbert Nhimura",
        "email": "gnhimura@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Yeukai Bosha",
        "email": "ybosha@afcholdings.co.zw",
        "branch": "Mvurwi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nguquko Ndlovu",
        "email": "nndlovu@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Loice Gumbochuma",
        "email": "lgumbochuma@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Tembo Katena",
        "email": "rtembo@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Chitsvare",
        "email": "kchitsvare@afcholdings.co.zw",
        "branch": "MtDarwin",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fortune Chikukwa",
        "email": "fchikukwa@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Paul Makushu",
        "email": "pmakushu@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Thembani Ndlovu",
        "email": "tndlovu@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sikhangele  Moyo",
        "email": "smoyo@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Romeo Dzama",
        "email": "rdzama@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Memory Demera",
        "email": "mdemera@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Best Lovely Kumirayi",
        "email": "bkumirayi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Madzima",
        "email": "smadzima@afcholdings.co.zw",
        "branch": "Mutoko",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Anastasia Buyanga",
        "email": "abuyanga@afcholdings.co.zw",
        "branch": "Mutoko",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Betserai Mutanda",
        "email": "bmutanda@afcholdings.co.zw",
        "branch": "Mutoko",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alice  Tekeshe",
        "email": "atekeshe@afcholdings.co.zw",
        "branch": "Rusape",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mirika  Chinyama",
        "email": "mchinyama@afcholdings.co.zw",
        "branch": "Rusape",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vanessa Dzvairo",
        "email": "vdzvairo@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Anderson Chizanga",
        "email": "achizanga@afcholdings.co.zw",
        "branch": "Norton",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fungai Chinhuru",
        "email": "fchinhuru@afcholdings.co.zw",
        "branch": "Checheche",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bothwell Chenguwo",
        "email": "bchenguwo@afcholdings.co.zw",
        "branch": "Norton",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Beauty Mugaviri",
        "email": "bmugaviri@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Willard Mazarire",
        "email": "wmazarire@afcholdings.co.zw",
        "branch": "Binga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Phillip Musa",
        "email": "pmusa@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fabian Togara",
        "email": "ftogara@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Evangelister Tuti",
        "email": "etuti@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lameck Nyahungwa",
        "email": "lnyahungwa@afcholdings.co.zw",
        "branch": "Murewa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nigel Katsande",
        "email": "nkatsande@afcholdings.co.zw",
        "branch": "Mutoko",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lister Kausiyo",
        "email": "lkausiyo@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ruth Muchechesi",
        "email": "rmuchechesi@afcholdings.co.zw",
        "branch": "Jerera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kelvin Chimwaza",
        "email": "kchimwanza@afcholdings.co.zw",
        "branch": "Westgate",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Arnold Ncube",
        "email": "ancube@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Linda Mwembe",
        "email": "lmwembe@afcholdings.co.zw",
        "branch": "Binga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bekezela  Donga",
        "email": "bdonga@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ratidzo Mandikiyana",
        "email": "rmandikiyana@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "ServiceDesk |  AFC Holdings",
        "email": "servicedesk@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patricia  Ncube",
        "email": "ncubep@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Godwin Chiutsi",
        "email": "gchiutsi@afcholdings.co.zw",
        "branch": "Chiredzi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Admore Zihumu",
        "email": "azihumu@afcholdings.co.zw",
        "branch": "Chinhoyi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyarai Mangwanda",
        "email": "nmangwanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Madzudzo",
        "email": "kmadzudzo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Poko Mathibela",
        "email": "pmathibela@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Debrah M. Makarange",
        "email": "dmakarange@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sheron Tumba",
        "email": "stumba@afcholdings.co.zw",
        "branch": "jmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lucy Bhosha",
        "email": "lbhosha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudzanai Manyaira",
        "email": "kmanyaira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sharon Chawatama",
        "email": "schawatama@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chenai  Angela. Kamunda",
        "email": "ckamunda@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takudzwa Zhou",
        "email": "tzhou@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ashford Mangwendeza",
        "email": "amangwendeza@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Dangaiso",
        "email": "tdangaiso@afcholdings.co.zw",
        "branch": "MtDarwin",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Getrude Shamiso Tsiga",
        "email": "gtsiga@afcholdings.co.zw",
        "branch": "Hwedza",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Darlious Nhera",
        "email": "dnhera@afcholdings.co.zw",
        "branch": "Chegutu",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Magwenzi",
        "email": "smagwenzi@afcholdings.co.zw",
        "branch": "Checheche",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takudzwa Chigidani",
        "email": "tchigidani@afcholdings.co.zw",
        "branch": "Norton",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ralph Chivasa",
        "email": "rchivasa@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyashadzashe J. Pongolani",
        "email": "npongolani@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tonderai Kanyai",
        "email": "tkanyai@afcholdings.co.zw",
        "branch": "Karoi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fidelis Chikomo",
        "email": "fchikomo@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Priviledge Birapira",
        "email": "pbirapira@afcholdings.co.zw",
        "branch": "Nyanga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Mundembe",
        "email": "smundembe@afcholdings.co.zw",
        "branch": "Murambinda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Waraidzo Mufute",
        "email": "wmufute@afcholdings.co.zw",
        "branch": "Marondera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Garikai Ndakaziva",
        "email": "gndakaziva@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Innocent  Mumpande",
        "email": "imumpande@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Matthew T. Mutsikwi",
        "email": "mmutsikwi@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ashley Mapondera",
        "email": "amapondera@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Nyamukondiwa",
        "email": "knyamukondiwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pamela Madumira",
        "email": "pmadumira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Munashe Mupindu",
        "email": "mmupindu@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kimberly Spiwe Chipunga",
        "email": "kchipunga@afcholdings.co.zw",
        "branch": "Chivi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Brian Murambwa",
        "email": "bmurambwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Russell Kamiremire",
        "email": "rkamiremire@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chishuvo Makanga",
        "email": "cmakanga@afcholdings.co.zw",
        "branch": "InternationalBanking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rumbidzai Mutetwa",
        "email": "rmutetwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wellington Galaweni",
        "email": "wgalaweni@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ronald Mugovera",
        "email": "rmugovera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Only Chimbandinga",
        "email": "ochimbandinga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Robson Mahlahla",
        "email": "rmahlahla@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jiggar T. Jumo",
        "email": "jjumo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Denford Manyunzu",
        "email": "dmanyunzu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "green365",
        "email": "green365@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Josiah Mukwacha",
        "email": "jmukwacha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cathrine Simango",
        "email": "csimango@afcholdings.co.zw",
        "branch": "Chipinge",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Luke Ngwena",
        "email": "lngwena@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bruce Maodza",
        "email": "bmaodza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ronald N. Kanyepi",
        "email": "rkanyepi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Douglas Jombe",
        "email": "djombe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Thabisile Moyo",
        "email": "thabisilemoyo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Liberty Mufudza",
        "email": "lmufudza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Polite Sibanda",
        "email": "psibanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Christabel Gurure",
        "email": "cgurure@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox0efac95a629a453295bc37469c6d56db",
        "email": "healthmailbox0efac95a629a453295bc37469c6d56db@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox1195657bb3524fd4a3fe970b96526759",
        "email": "healthmailbox1195657bb3524fd4a3fe970b96526759@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxc58798cd384041a19f521249bcc04b1b",
        "email": "healthmailboxc58798cd384041a19f521249bcc04b1b@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxef47eba37b7b42ae86485aa8b883ea01",
        "email": "healthmailboxef47eba37b7b42ae86485aa8b883ea01@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox94ca5e8dcd8e47a98d10187134a85c06",
        "email": "healthmailbox94ca5e8dcd8e47a98d10187134a85c06@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Everjoy Makaza",
        "email": "emakaza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Petros Mudavanhu",
        "email": "pmudavanhu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tonderai Admire Chiyengerere",
        "email": "tchiyengerere@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "businessevents",
        "email": "businessevents@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox90d8e41aafef491fa8d09f40ec6ad3c1",
        "email": "healthmailbox90d8e41aafef491fa8d09f40ec6ad3c1@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox7853d171b1b74547811957e55dff6185",
        "email": "healthmailbox7853d171b1b74547811957e55dff6185@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxb538cc1dffc54c3980e7813c9d776b27",
        "email": "healthmailboxb538cc1dffc54c3980e7813c9d776b27@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox13a7c621f37448ff9f7a562b59367072",
        "email": "healthmailbox13a7c621f37448ff9f7a562b59367072@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox50f052dd9b684037b16003f873611cc7",
        "email": "healthmailbox50f052dd9b684037b16003f873611cc7@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxd509a0504adc4547906fe45acbfb95a3",
        "email": "healthmailboxd509a0504adc4547906fe45acbfb95a3@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox3b4295a4302c41559fb2626c34ef3f51",
        "email": "healthmailbox3b4295a4302c41559fb2626c34ef3f51@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox5f951fe1efac4604add656f78a8a081e",
        "email": "healthmailbox5f951fe1efac4604add656f78a8a081e@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox73679a8d19134a38b4d18afac18e8f4f",
        "email": "healthmailbox73679a8d19134a38b4d18afac18e8f4f@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox7a182182541a4f88a78aab27b7efbcab",
        "email": "healthmailbox7a182182541a4f88a78aab27b7efbcab@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxc4e8d083f36f425c9810cbcfbd94dc05",
        "email": "healthmailboxc4e8d083f36f425c9810cbcfbd94dc05@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox73329a0b4bb6468e944d8e9d51f8bdb5",
        "email": "healthmailbox73329a0b4bb6468e944d8e9d51f8bdb5@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxb59124395cd349c2a3424a9b2cec4b0d",
        "email": "healthmailboxb59124395cd349c2a3424a9b2cec4b0d@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox7439b928346d4d5aa877e6bb4b47aed5",
        "email": "healthmailbox7439b928346d4d5aa877e6bb4b47aed5@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox161daf4230d047899fbb68dee28c728b",
        "email": "healthmailbox161daf4230d047899fbb68dee28c728b@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox0e0a264c9e8142acb4de50d1c1501eac",
        "email": "healthmailbox0e0a264c9e8142acb4de50d1c1501eac@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox9c5eca06766b41e0a875d0c2b56d0cc6",
        "email": "healthmailbox9c5eca06766b41e0a875d0c2b56d0cc6@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox2adbbb2a05ba44b79850e9e771adb9f9",
        "email": "healthmailbox2adbbb2a05ba44b79850e9e771adb9f9@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxfc9ecbfab5fb46ad81ed8ea5cca706e8",
        "email": "healthmailboxfc9ecbfab5fb46ad81ed8ea5cca706e8@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Morris Chitsvori",
        "email": "mchitsvori@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Trust T. Mdhlano",
        "email": "tmdhlano@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kenias Maphosa",
        "email": "kmaphosa@afcholdings.co.zw",
        "branch": "Zvishavane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith Makarutse",
        "email": "fmakarutse@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Maxwell Chakaamba",
        "email": "mchakaamba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Perseverance C. Chitarata",
        "email": "pcchitarata@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Qinisani Sibanda",
        "email": "qsibanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox851aba2d7b964206b5dee8230ad9a943",
        "email": "healthmailbox851aba2d7b964206b5dee8230ad9a943@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxa1b27d815cc9435fbd8380cd9559045d",
        "email": "healthmailboxa1b27d815cc9435fbd8380cd9559045d@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox897f63beb47e4fdea70779513e3cc037",
        "email": "healthmailbox897f63beb47e4fdea70779513e3cc037@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailboxe067c0edbe014afb8a42fd563164d7bf",
        "email": "healthmailboxe067c0edbe014afb8a42fd563164d7bf@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Masaraure",
        "email": "tmasaraure@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Simbarashe Mukaro",
        "email": "smukaro@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nathan Ncube",
        "email": "nncube@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gugulethu Ndhlela",
        "email": "gndhlela@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ryan Kuwanda",
        "email": "rkuwanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takudzwa Mandioma",
        "email": "tmandioma@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ngoni Nicholas Chirume",
        "email": "nchirume@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Stephen Manjoro",
        "email": "smanjoro@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nickson  Tichivanhu",
        "email": "ntichivanhu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Beauty Denhere",
        "email": "bdenhere@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyashadzashe Kandi",
        "email": "nkandi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Matthew Bandama",
        "email": "tbandama@afcholdings.co.zw",
        "branch": "Executive Banking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mazvita Muzuwa",
        "email": "mmuzuwa@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Yamurai Maveneka",
        "email": "ymaveneka@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nozibusiso Dube",
        "email": "duben@afcholdings.co.zw",
        "branch": "Lupane",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lloyd Glaides",
        "email": "lglaides@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sharon Marikano",
        "email": "smarikano@afcholdings.co.zw",
        "branch": "8th Avenue Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jabulani Bhebhe",
        "email": "jbhebhe@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wonder Rekerwi",
        "email": "wrekerwi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sisasenkosi P. Ncube",
        "email": "sncube@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gabriel Daniso",
        "email": "gdaniso@afcholdings.co.zw",
        "branch": "Inala Branch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lindile Khumalo",
        "email": "lkhumalo@afcholdings.co.zw",
        "branch": "jmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Njenjera",
        "email": "tnjenjera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinashe Chimhanda",
        "email": "tchimhanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pamelah Chakanyuka",
        "email": "pchakanyuka@afcholdings.co.zw",
        "branch": "Bindura",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Panashe W. Chitopo",
        "email": "pchitopo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Zoho Books | AFC Leasing",
        "email": "zohobooks@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vuyani Langa Sibanda",
        "email": "vsibanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Khumbulani Dube",
        "email": "kdube@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Danai Munjemu",
        "email": "dmunjemu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Archbold Katsande",
        "email": "akatsande@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Dylan Mandava",
        "email": "dmandava@afcholdings.co.zw",
        "branch": "Mubaira",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tarisai Nyashanu",
        "email": "tnyashanu@afcholdings.co.zw",
        "branch": "Gweru",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ignitius Musendo",
        "email": "imusendo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Wadzenenga",
        "email": "kwadzenenga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Adolph Nyakupinda",
        "email": "anyakupinda@afcholdings.co.zw",
        "branch": "Mutare",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Mangwanya",
        "email": "tmangwanya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clarence Panashe Mushonga",
        "email": "cmushonga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sammyjo S.N. Mapfumo",
        "email": "smapfumo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tawanda Muzavazi",
        "email": "tmuzavazi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudakwashe Mujungwa",
        "email": "kmujungwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Brian Nzaramuroyi",
        "email": "bnzaramuroyi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Thabiso Maposa",
        "email": "tmaposa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Courage Gomera",
        "email": "cgomera@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Boldwin Tahwa",
        "email": "btahwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mellissa Ganda",
        "email": "mganda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "HealthMailbox5f61b35e4eab475eb41265e0dc6c1b41",
        "email": "healthmailbox5f61b35e4eab475eb41265e0dc6c1b41@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Donald Chinhuru",
        "email": "dchinhuru@afcholdings.co.zw",
        "branch": "Nelson Mandela",
        "manager": "lngwena@afcholdings.co.zw",
        "user": null
      },
      {
        "cn": null,
        "name": "Tinos Murwira",
        "email": "tmurwira@afcholdings.co.zw",
        "branch": "InternationalBanking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Buhle Mhlanga",
        "email": "bmhlanga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chipo Chitongo",
        "email": "chitongoc@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Farai Chatindo",
        "email": "fchatindo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Evangelista Gava",
        "email": "egava@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Edson Chorwadza",
        "email": "echorwadza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cuthbert Masukume",
        "email": "cmasukume@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Samson Zirebwa",
        "email": "szirebwa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "OEM_Alerts",
        "email": "oem_alerts@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "David Rupfutse",
        "email": "drupfutse@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mitchell Jasi",
        "email": "mjasi@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinotenda P. Zililo",
        "email": "tzililo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lesley Kudzai Chirashanye",
        "email": "lchirashanye@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Stephen Mukoyi",
        "email": "smukoyi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tashinga Masarira",
        "email": "tmasarira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Graham Svisvah",
        "email": "gsvisvah@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "CCsms",
        "email": "ccsms@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "CustomerSupport",
        "email": "customersupport@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "AFC Contact Center Helpdesk",
        "email": "contactcenterhelpdesk@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Martin Sonzi",
        "email": "msonzi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Walter Tembo",
        "email": "wtembo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kudzai Gwandira",
        "email": "kgwandira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tenders",
        "email": "tenders@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Catherine Chikerema",
        "email": "cchikerema@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tinovimbanashe Jesina  Chapungu",
        "email": "tchapungu@afcholdings.co.zw",
        "branch": "Masvingo",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Letwin  Svinurai",
        "email": "lsvinurai@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Moreblessing Chakaipa",
        "email": "mchakaipa@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tanaka Diana Chidavarume",
        "email": "tchidavarume@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rosemary Mombeshora",
        "email": "rmombeshora@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyasha Blessing Mutumani",
        "email": "nmutumani@afcholdings.co.zw",
        "branch": "Treasury BackOffice",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Leon Chikanza",
        "email": "lchikanza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Keznet Lisimati",
        "email": "klisimati@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Cain Gwasira",
        "email": "cgwasira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nelsa Chisi",
        "email": "nchisi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Allen Maupfu",
        "email": "amaupfu@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith Chingoiro",
        "email": "fchingoiro@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tanaka Marunya",
        "email": "tmarunya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nicole Munyawiri",
        "email": "nmunyawiri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vimbiso Mutimwiyi",
        "email": "vmutimwiyi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Zeepay Alerts",
        "email": "zeepay@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Admire Tembo",
        "email": "atembo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tawanda Ngunguzala",
        "email": "tngunguzala@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Blessed Prince Maparara",
        "email": "bmaparara@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Godknows Muleya",
        "email": "gmuleya@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clotildah Mauchaza",
        "email": "cmauchaza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Starben Manyowa",
        "email": "smanyowa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Donemore Sangweni",
        "email": "dsangweni@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Gamuchirai Chiwunze",
        "email": "gchiwunze@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Solomon Lisenga",
        "email": "slisenga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Kambanga",
        "email": "tkambanga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lindsay Musonza",
        "email": "lmusonza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ruvimbo Murwira",
        "email": "rmurwira@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vigilant P. Chirebvu",
        "email": "vchirebvu@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Bernard Zhou",
        "email": "bzhou@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Endpoint Central",
        "email": "endpointcentral@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vehicles Auction",
        "email": "vehiclesauction@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Chenai Muzenda",
        "email": "cmuzenda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Kapanyota",
        "email": "tkapanyota@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alwyn Magura",
        "email": "amagura@afcholdings.co.zw",
        "branch": "Paynet Transactions",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Francis Jemedze",
        "email": "fjemedze@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jannet Taruvinga",
        "email": "jtaruvinga@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Melody Mutemera",
        "email": "mmutemera@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Norah Chanzi",
        "email": "nchanzi@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Pestalos Kanengoni",
        "email": "pkanengoni@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Alfred Muzinde",
        "email": "amuzinde@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "M365 Migration",
        "email": "m365migration@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "OPMANAGER",
        "email": "opmanager@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vaida Maruta",
        "email": "vmaruta@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jeremiah  Sakwe",
        "email": "jsakwe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "M365pilot Pilot",
        "email": "m365pilot@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Patrick T. Rumbwere",
        "email": "prumbwere@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Intellect CBS Alerts",
        "email": "intellect_alerts@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nyasha Mandizvidza",
        "email": "nmandizvidza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rufaro Chinembiri",
        "email": "rchinembiri@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Vehicles Auction",
        "email": "vehiclesauction123@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Claudius Musindo | AFC Land Bank",
        "email": "cmusindo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tamuka Nyandima | AFC Leasing Company",
        "email": "tnyandima@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tanaka Mutangadura | AFC Commercial Bank",
        "email": "tmutangadura@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tapiwa Choga",
        "email": "tchoga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Phillip Nhamo | AFC Land Bank",
        "email": "pnhamo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Munyaradzi Chimwe",
        "email": "mchimwe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Erick Medzayi",
        "email": "emedzayi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sandikonda Mlezo",
        "email": "smlezo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Courage Chatikobo",
        "email": "cchatikobo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Ruvimbo Bumhudza",
        "email": "rbumhudza@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tadiwanashe Wutaunashe",
        "email": "twutaunashe@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tadiwanashe Mauzinya",
        "email": "tmauzinya@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Elijah T. Mupangani",
        "email": "emupangani@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sydney Faifi",
        "email": "sfaifi@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Gunhe",
        "email": "tgunhe@afcholdings.co.zw",
        "branch": "Nyika",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Eddie Tome",
        "email": "etome@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Rwafa",
        "email": "trwafa@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Valerie C. Mushonga",
        "email": "vmushonga@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Commence Mushove",
        "email": "cmushove@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Immaculate Msebele",
        "email": "imsebele@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Clifford P. Nzara",
        "email": "cnzara@afcholdings.co.zw",
        "branch": "Magunje",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Liana Y. Mamombe",
        "email": "lmamombe@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Leoline Ndlovu",
        "email": "lndlovu@afcholdings.co.zw",
        "branch": "Binga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Kingdom Chevure",
        "email": "kchevure@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Chananuka",
        "email": "tchananuka@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nkululeko Nsimbi",
        "email": "nnsimbi@afcholdings.co.zw",
        "branch": "Gwanda",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda I. Madzongonye",
        "email": "tmadzongonye@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Rectise Kwecha",
        "email": "rkwecha@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Beauty Mzilikazi",
        "email": "bmzilikazi@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Nancy Manana",
        "email": "nmanana@afcholdings.co.zw",
        "branch": "Chivi",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Previous Ngara",
        "email": "pngara@afcholdings.co.zw",
        "branch": "Guruve",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Wayne Moyo",
        "email": "wmoyo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Marko Chakanyuka",
        "email": "mchakanyuka@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Daphne E. Nhimba",
        "email": "dnhimba@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Joy Matema",
        "email": "jmatema@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Problem Fumai",
        "email": "pfumai@afcholdings.co.zw",
        "branch": "InternationalBanking",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sharon Mambume",
        "email": "smambume@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Courtney Muchenje",
        "email": "cmuchenje@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Sibusisiwe Ncube",
        "email": "ncubes@afcholdings.co.zw",
        "branch": "CCD HARARE & BULAWAYO",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "George Mashila",
        "email": "gmashila@afcholdings.co.zw",
        "branch": "Jerera",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Fidelis Tsvangirai",
        "email": "ftsvangirai@afcholdings.co.zw",
        "branch": "Branch Support",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lameck Sibanda",
        "email": "lsibanda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Jacqueline Chikwanha",
        "email": "jchikwanha@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Plackie Chitongo",
        "email": "pchitongo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Benedict Mwaketa",
        "email": "bmwaketa@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Mandlenkosi Ndlovu | AFC Commercial Bank",
        "email": "mndlovu@afcholdings.co.zw",
        "branch": "Hwange",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Velile Ndlovu",
        "email": "vndlovu@afcholdings.co.zw",
        "branch": "Maphisa",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tatenda Magaisa",
        "email": "tmagaisa@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Natasha Mumvuri",
        "email": "nmumvuri@afcholdings.co.zw",
        "branch": "Contact Centre",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Faith Kaduwo",
        "email": "fkaduwo@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Moses Hunda",
        "email": "mhunda@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Lawrencia Ncube",
        "email": "ncubel@afcholdings.co.zw",
        "branch": "Mataga",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Tendai Makaya",
        "email": "tmakaya@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Takudzwa Shamu",
        "email": "tshamu@afcholdings.co.zw",
        "branch": "nmbranch",
        "manager": null,
        "user": null
      },
      {
        "cn": null,
        "name": "Liberty Kandenga",
        "email": "lkandenga@afcholdings.co.zw",
        "branch": null,
        "manager": null,
        "user": null
      }
    ]
  },

  getDocument: {
    "success": true,
    "message": "The document has been actioned!",
    "help": null,
    "detail": null,
    "data": {
      "id": 152,
      "createdAt": "2024-07-30T10:44:17.192895",
      "updatedAt": "2024-07-30T15:19:29.671286",
      "deleteAt": null,
      "additionalData": {},
      "template": {
        "id": 1,
        "createdAt": "2024-07-29T16:34:35.143016",
        "updatedAt": "2024-07-29T16:34:35.143016",
        "deleteAt": null,
        "additionalData": {},
        "title": "New Windows Test Server",
        "description": "Requesting for a new Windows OS Test Server",
        "slaAgreementId": "mockSlaid",
        "mediaFileId": "aXfRsU",
        "creator": "dchinhuru@afcholdings.co.zw",
        "admin": false,
        "generic": false,
        "requireAttachments": true,
        "form": null
      },
      "owner": "dchinhuru@afcholdings.co.zw",
      "mediaFileId": "u0Jdp7",
      "nextActionersIndex": 0,
      "nextActioners": [
        "kgwandira@afcholdings.co.zw",
        "dchinhuru@afcholdings.co.zw"
      ],
      "status": "IN_PROGRESS",
      "overdueOn": null,
      "cacheToken": null,
      "linkedDocuments": [
        {
          "id": 352,
          "createdAt": "2024-07-30T14:47:47.189209",
          "updatedAt": "2024-08-07T09:52:15.232105",
          "deleteAt": null,
          "additionalData": {},
          "template": {
            "id": 1,
            "createdAt": "2024-07-29T16:34:35.143016",
            "updatedAt": "2024-07-29T16:34:35.143016",
            "deleteAt": null,
            "additionalData": {},
            "title": "New Windows Test Server",
            "description": "Requesting for a new Windows OS Test Server",
            "slaAgreementId": "mockSlaid",
            "mediaFileId": "aXfRsU",
            "creator": "dchinhuru@afcholdings.co.zw",
            "admin": false,
            "generic": false,
            "requireAttachments": true,
            "form": null
          },
          "owner": "dchinhuru@afcholdings.co.zw",
          "mediaFileId": null,
          "nextActionersIndex": 0,
          "nextActioners": null,
          "status": "ON_HOLD",
          "overdueOn": "2024-08-07T09:52:15.231052",
          "cacheToken": null,
          "linkedDocuments": [],
          "attachments": null,
          "comments": [],
          "shared": [],
          "audit": [],
          "actioners": [],
          "form": null
        }
      ],
      "attachments": null,
      "comments": [
        {
          "id": 1,
          "createdAt": "2024-08-07T09:53:27.703138",
          "updatedAt": "2024-08-07T09:53:27.703138",
          "deleteAt": null,
          "additionalData": {},
          "author": "dchinhuru@afcholdings.co.zw",
          "message": "This is my doc comment",
          "attachments": null
        }
      ],
      "shared": [
        {
          "id": 52,
          "createdAt": "2024-07-31T09:45:47.582446",
          "updatedAt": "2024-07-31T09:45:47.582446",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 153,
          "createdAt": "2024-07-31T10:27:39.110002",
          "updatedAt": "2024-07-31T10:27:39.110002",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "dchinhuru@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 102,
          "createdAt": "2024-07-31T10:20:54.736855",
          "updatedAt": "2024-07-31T10:20:54.736855",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 252,
          "createdAt": "2024-08-06T15:57:04.932871",
          "updatedAt": "2024-08-06T15:57:04.933783",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 3,
          "createdAt": "2024-07-30T16:35:06.200093",
          "updatedAt": "2024-07-30T16:35:06.200093",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira1@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 2,
          "createdAt": "2024-07-30T16:25:43.964171",
          "updatedAt": "2024-07-30T16:25:43.964308",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 152,
          "createdAt": "2024-07-31T10:25:56.713217",
          "updatedAt": "2024-07-31T10:25:56.713739",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 1,
          "createdAt": "2024-07-30T16:12:34.967847",
          "updatedAt": "2024-07-30T16:12:34.968455",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "dmunjemu@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        },
        {
          "id": 202,
          "createdAt": "2024-07-31T12:13:19.902259",
          "updatedAt": "2024-07-31T12:13:19.902768",
          "deleteAt": null,
          "additionalData": {},
          "sharedWith": "kgwandira@afcholdings.co.zw",
          "sharer": "dchinhuru@afcholdings.co.zw",
          "byAdmin": false
        }
      ],
      "audit": [
        {
          "id": 352,
          "createdAt": "2024-07-30T16:12:34.967847",
          "updatedAt": "2024-07-30T16:12:34.968455",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: dmunjemu@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 503,
          "createdAt": "2024-07-31T10:27:39.115165",
          "updatedAt": "2024-07-31T10:27:39.115165",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 353,
          "createdAt": "2024-07-30T16:25:43.967654",
          "updatedAt": "2024-07-30T16:25:43.967654",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 354,
          "createdAt": "2024-07-30T16:35:06.202173",
          "updatedAt": "2024-07-30T16:35:06.202173",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira1@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 502,
          "createdAt": "2024-07-31T10:25:56.713217",
          "updatedAt": "2024-07-31T10:25:56.713739",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 402,
          "createdAt": "2024-07-31T09:45:47.582446",
          "updatedAt": "2024-07-31T09:45:47.582446",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 602,
          "createdAt": "2024-08-06T15:57:04.940337",
          "updatedAt": "2024-08-06T15:57:04.940337",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 452,
          "createdAt": "2024-07-31T10:20:54.736855",
          "updatedAt": "2024-07-31T10:20:54.736855",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 552,
          "createdAt": "2024-07-31T12:13:19.902259",
          "updatedAt": "2024-07-31T12:13:19.902768",
          "deleteAt": null,
          "additionalData": {},
          "message": "with: kgwandira@afcholdings.co.zw by: dchinhuru@afcholdings.co.zw",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "SHARED"
        },
        {
          "id": 302,
          "createdAt": "2024-07-30T15:19:29.671286",
          "updatedAt": "2024-07-30T15:19:29.671286",
          "deleteAt": null,
          "additionalData": {},
          "message": "Im out of office",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "DECLINED"
        },
        {
          "id": 52,
          "createdAt": "2024-07-30T10:44:17.457319",
          "updatedAt": "2024-07-30T10:44:17.457319",
          "deleteAt": null,
          "additionalData": {},
          "message": "document created",
          "author": "dchinhuru@afcholdings.co.zw",
          "action": "NEW"
        }
      ],
      "actioners": [
        {
          "id": 1,
          "createdAt": "2024-08-02T10:04:48",
          "updatedAt": "2024-08-02T10:04:50",
          "deleteAt": null,
          "additionalData": null,
          "actioner": "dchinhuru@afcholdings.co.zw",
          "oldActioner": null,
          "manager": "lngwena@afcholdings.co.zw",
          "index": -1,
          "role": "INPUTTER",
          "status": "PAUSE",
          "signature": null
        }
      ],
      "form": [
        [
          {
            "type": "short-text",
            "label": "Server Name",
            "name": "server-name",
            "id": "short-text-01",
            "value": "This is the server name",
            "options": [],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "System is required"
              }
            ],
            comments: []
          }
        ],
        [
          {
            "type": "long-text",
            "label": "Server Description",
            "name": "server-description",
            "id": "long-text-01",
            "value": "You will be responsible for helping seat customer parties, welcoming them to the restaurant, answering menu questions and offering recommendations, taking orders, helping deliver meals and ensuring a quick checkout process.",
            "options": [],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "System is required"
              }
            ],
            comments: [
              {
                highlightedText: 'responsible for helping',
                user: {
                  name: 'John Doe',
                  email: 'johndoe@example.com'
                },
                commentText: 'This needs to be more specific about what is prohibited.'
              },
              {
                highlightedText: 'answering menu questions',
                user: {
                  name: 'Jane Smith',
                  email: 'janesmith@example.com'
                },
                commentText: 'Consider defining what is meant by "band files".'
              }
            ]
          }
        ],
        [
          {
            "type": "rich-text",
            "label": "",
            "name": "",
            "id": "requestedSystemAccess",
            "value": "",
            "options": [
              "Server 1",
              "Server 2",
              "Server 3"
            ],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "System is required"
              }
            ],
            comments: []
          }
        ]
      ]
    }
  }

};
