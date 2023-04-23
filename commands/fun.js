
 const { dare, truth, kt, hal } = require('../lib/truth-dare.js')
 const axios = require('axios')
 const { cmd } = require('../lib')
     //---------------------------------------------------------------------------
 cmd({
             pattern: "كت",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${kt()}`);
         }
     )
 
 //---------------------------------------------------------------------------

 cmd({
    pattern: "هل",
    filename: __filename,
},
async(Void, citel, text) => {
    return await citel.reply(`${hal()}`);
}
)
//---------------------------------------------------------------------------
 cmd({
             pattern: "س",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${truth()}`);
         }
     )
     //---------------------------------------------------------------------------
 
     //---------------------------------------------------------------------------
 cmd({
             pattern: "ح",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${dare()}`);
         }
     )
     //---------------------------------------------------------------------------
 
     //---------------------------------------------------------------------------
cmd({
        pattern: "ق",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://api.banghasan.com/quran/format/json/acak`)
        return citel.reply(`**`)   
    }

)
    //---------------------------------------------------------------------------
