[
    {
        "id": "b1f5c9d0c5c1a6a4",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Vypnout flexi",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 210,
        "y": 820,
        "wires": [
            [
                "6d5c27f3dbab9e08"
            ]
        ]
    },
    {
        "id": "2b9346746c452f92",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\vypnout-flexi.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Spusť skript",
        "x": 550,
        "y": 820,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "b78c5de311578c2a",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Zapnout flexi",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 210,
        "y": 880,
        "wires": [
            [
                "e021d430283d46c0"
            ]
        ]
    },
    {
        "id": "139902a422d343a7",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\zapnout-flexi.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Spusť skript",
        "x": 550,
        "y": 880,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "6cf255c63280843f",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Vypnout altoritmus",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 230,
        "y": 940,
        "wires": [
            [
                "668217c8f3822c22"
            ]
        ]
    },
    {
        "id": "4bcf8c5bd20900dc",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\vypnout-algoritmus.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Spusť skript",
        "x": 550,
        "y": 940,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "2795f6d9f8dad63a",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Zapnout altoritmus",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 230,
        "y": 1000,
        "wires": [
            [
                "26bc5e310c8e225f"
            ]
        ]
    },
    {
        "id": "ddbd3ce25d273470",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\zapnout-algoritmus.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Spusť skript",
        "x": 550,
        "y": 1000,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "d5788b82ab9c842d",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Přepnout",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 200,
        "y": 1060,
        "wires": [
            [
                "94b3b00f8c2d89bd"
            ]
        ]
    },
    {
        "id": "1af07b1d62fa7fca",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\prepnout-prodej-z-baterie-do-site.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Prodej z baterie do sítě",
        "x": 590,
        "y": 1060,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "f693e06860426990",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Přepnout",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 200,
        "y": 1120,
        "wires": [
            [
                "f3fe5d78eb492c1d"
            ]
        ]
    },
    {
        "id": "efd90c970ce4c1d2",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\prepnout-prodej-do-site-misto-nabijeni.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Prodej do sítě místo nabíjení",
        "x": 600,
        "y": 1120,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "5824c8779f750bde",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Přepnout",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 200,
        "y": 1240,
        "wires": [
            [
                "665b58bfc5b8a7c5"
            ]
        ]
    },
    {
        "id": "152ae27c773a2dc1",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\prepnout-nabijeni-baterie-ze-site.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Nabíjení baterie ze sítě",
        "x": 590,
        "y": 1240,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "a3ad927750a09b3d",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Přepnout",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 200,
        "y": 1180,
        "wires": [
            [
                "5ffa205ec8371f21"
            ]
        ]
    },
    {
        "id": "1309146681a4c2a9",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\prepnout-setreni-energie-v-baterii.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Šetření energie v baterii",
        "x": 590,
        "y": 1180,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "8a63c47eb977b021",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Přepnout",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 200,
        "y": 1300,
        "wires": [
            [
                "7ba47fe016b3c28b"
            ]
        ]
    },
    {
        "id": "35ba8b1dec01880e",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\prepnout-zakaz-pretoku.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Zákaz přetoků",
        "x": 560,
        "y": 1300,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "6d5c27f3dbab9e08",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 820,
        "wires": [
            [
                "2b9346746c452f92"
            ]
        ]
    },
    {
        "id": "e021d430283d46c0",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 880,
        "wires": [
            [
                "139902a422d343a7"
            ]
        ]
    },
    {
        "id": "668217c8f3822c22",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 940,
        "wires": [
            [
                "4bcf8c5bd20900dc"
            ]
        ]
    },
    {
        "id": "26bc5e310c8e225f",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1000,
        "wires": [
            [
                "ddbd3ce25d273470"
            ]
        ]
    },
    {
        "id": "7ba47fe016b3c28b",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1300,
        "wires": [
            [
                "35ba8b1dec01880e"
            ]
        ]
    },
    {
        "id": "665b58bfc5b8a7c5",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1240,
        "wires": [
            [
                "152ae27c773a2dc1"
            ]
        ]
    },
    {
        "id": "5ffa205ec8371f21",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1180,
        "wires": [
            [
                "1309146681a4c2a9"
            ]
        ]
    },
    {
        "id": "f3fe5d78eb492c1d",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1120,
        "wires": [
            [
                "efd90c970ce4c1d2"
            ]
        ]
    },
    {
        "id": "94b3b00f8c2d89bd",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1060,
        "wires": [
            [
                "1af07b1d62fa7fca"
            ]
        ]
    },
    {
        "id": "09181f55745f2a5b",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "Poslat e-mail teď",
        "props": [],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 180,
        "y": 1360,
        "wires": [
            [
                "ea7bb46e9f4eae26"
            ]
        ]
    },
    {
        "id": "e7d0293890a92f4f",
        "type": "inject",
        "z": "f790aed9b99d17d7",
        "name": "5 min",
        "props": [],
        "repeat": "300",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 150,
        "y": 1400,
        "wires": [
            [
                "946b4d79101a6a09"
            ]
        ]
    },
    {
        "id": "08a5073ef9cc1e63",
        "type": "http request",
        "z": "f790aed9b99d17d7",
        "name": "Stáhnout",
        "method": "GET",
        "ret": "obj",
        "paytoqs": "ignore",
        "url": "https://proteus.deltagreen.cz/api/trpc/inverters.controls.state,linkBoxes.connectionState?batch=1&input={\"0\":{\"json\":{\"inverterId\":\"clwhov40a000h68eaxope0qk3\"}},\"1\":{\"json\":{\"householdId\":\"clwhorwkp000968eabhkb5nu0\"}}}",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [
            {
                "keyType": "other",
                "keyValue": "Cookie",
                "valueType": "msg",
                "valueValue": "payload.key"
            }
        ],
        "x": 480,
        "y": 1400,
        "wires": [
            [
                "3030435bde9ddb53"
            ]
        ]
    },
    {
        "id": "946b4d79101a6a09",
        "type": "change",
        "z": "f790aed9b99d17d7",
        "name": "Key",
        "rules": [
            {
                "t": "set",
                "p": "payload.key",
                "pt": "msg",
                "to": "proteus_session_key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 1400,
        "wires": [
            [
                "08a5073ef9cc1e63"
            ]
        ]
    },
    {
        "id": "3030435bde9ddb53",
        "type": "switch",
        "z": "f790aed9b99d17d7",
        "name": "Vypršel key",
        "property": "payload[0].error.json.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "UNAUTHORIZED",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 650,
        "y": 1400,
        "wires": [
            [
                "ea7bb46e9f4eae26"
            ]
        ]
    },
    {
        "id": "ea7bb46e9f4eae26",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\posli-email.js\"",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "Pošli email",
        "x": 850,
        "y": 1400,
        "wires": [
            [
                "378d9793502f926f"
            ],
            [],
            []
        ]
    },
    {
        "id": "378d9793502f926f",
        "type": "delay",
        "z": "f790aed9b99d17d7",
        "name": "",
        "pauseType": "delay",
        "timeout": "15",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1020,
        "y": 1400,
        "wires": [
            [
                "0a5efe482b686b16"
            ]
        ]
    },
    {
        "id": "0a5efe482b686b16",
        "type": "e-mail in",
        "z": "f790aed9b99d17d7",
        "name": "",
        "protocol": "IMAP",
        "server": "imap.mail.me.com",
        "useSSL": true,
        "autotls": "never",
        "port": "993",
        "authtype": "BASIC",
        "saslformat": true,
        "token": "oauth2Response.access_token",
        "box": "INBOX",
        "disposition": "Read",
        "criteria": "_msg_",
        "repeat": "60",
        "fetch": "trigger",
        "inputs": 1,
        "x": 310,
        "y": 1500,
        "wires": [
            [
                "f88cc5183c098e81"
            ]
        ]
    },
    {
        "id": "f88cc5183c098e81",
        "type": "function",
        "z": "f790aed9b99d17d7",
        "name": "Najdi magic link",
        "func": "// Najdi proteus magic link z e-mailu\nlet html = msg.payload;\nlet regex = /(https:\\/\\/proteus\\.deltagreen\\.cz\\/cs\\/auth\\/magic\\/callback\\?token=[^\\s\"'<>[\\]]+)/;\nlet match = html.match(regex);\n\nif (match && match[1]) {\n    msg.magicLink = match[1];\n    msg.url = msg.magicLink;\n    msg.payload = msg.magicLink;\n    msg.magicUrl = msg.url;\n    return msg;\n} else {\n    node.error(\"Magic link nenalezen\", msg);\n    return null;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 1500,
        "wires": [
            [
                "7a8bf5f61eb47a6e"
            ]
        ]
    },
    {
        "id": "7a8bf5f61eb47a6e",
        "type": "exec",
        "z": "f790aed9b99d17d7",
        "command": "node \"C:\\Users\\user\\Documents\\scripts\\getSessionCookie.js\"",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "name": "getSessionCookie",
        "x": 650,
        "y": 1500,
        "wires": [
            [
                "b3476772bd30b2b8"
            ],
            [],
            []
        ]
    },
    {
        "id": "b3476772bd30b2b8",
        "type": "function",
        "z": "f790aed9b99d17d7",
        "name": "uložit key",
        "func": "// Příklad obsahu msg.payload:\n// \"?? Otevírám URL: https://... \\n?? Zachycena hodnota proteus_session: goq2lctd2pi2uz6chkv3stszzt4whcma7k3b224o\"\n\n// Najdu řádek, kde je \"Zachycena hodnota proteus_session: ...\"\nconst lines = msg.payload.split('\\n');\nlet sessionValue = null;\n\nfor (let line of lines) {\n  if (line.includes('Zachycena hodnota proteus_session:')) {\n    // Extrahuju hodnotu po dvojtečce a trimnu\n    sessionValue = line.split('Zachycena hodnota proteus_session:')[1].trim();\n    break;\n  }\n}\n\nif (!sessionValue) {\n  node.error(\"Nezachycena hodnota proteus_session v payload\");\n  return null;\n}\n\n// Uložím do globální proměnné čistou hodnotu\nglobal.set(\"proteus_session_key\", \"proteus_session=\" + sessionValue);\nglobal.set(\"key\", sessionValue);\n\n// Pro jistotu do payload jenom tu hodnotu, nebo potvrzení\nmsg.payload = \"Uložena hodnota proteus_session:\" + sessionValue;\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 860,
        "y": 1500,
        "wires": [
            [
                "05a58aced00fba6e"
            ]
        ]
    },
    {
        "id": "61153562d239f636",
        "type": "comment",
        "z": "f790aed9b99d17d7",
        "name": "Upravit jméno a heslo emailu",
        "info": "",
        "x": 360,
        "y": 1540,
        "wires": []
    },
    {
        "id": "05a58aced00fba6e",
        "type": "debug",
        "z": "f790aed9b99d17d7",
        "name": "Key",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1010,
        "y": 1500,
        "wires": []
    }
]
