# proteus-homeassistant-api

Do NodeRed importujte JSON 
pravé tlačítko -> insert -> import -> (vložte obsah souboru) -> import -> vložte do listu -> deploy

je třeba mít nainstalovaný addon HACS - Node-RED Companion Integration - https://github.com/zachowj/hass-node-red

v HomeAssistant otevřete nastavení -> integrace -> NodeRed -> Proteus a vyplňte email, heslo a inverterID
Do 30s by se mělo API připojit a stáhnout data

Přidána autoamtizace s notifikací o změně stavu
Přidány entity s množstvím a cenou flexibility CZK/kWh import/export - mělo by jít použít do karty energie

To je vše :-)

