require('dotenv').config()
const {  createProvider, CoreClass } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ChatGPTClass = require('./chatgpt.class')


const createBotGPT = async ({provider, database})=>{
    return new ChatGPTClass(database, provider);
  };


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterProvider = createProvider(BaileysProvider)

    createBotGPT({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

