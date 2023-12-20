/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md By Suhail Tech
 * @author : SuhailTech <https://www.youtube.com/c/SuhailTechInfo>
 * @description : Secktor Bot ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu", "اوامر", "الاوامر"],
            desc: "Help list",
            category: "general",
            react: "🐥",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌لا يوجد.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('asia/karachi').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `*⺀اوامربوت رايزل⺀*
⌬━─━｢المشرفين｣━─━⌬
❀╎.منشن
*┇↜⟬ لعمل منشن جماعي ⟭*
❀╎.مخفي
*┇↜⟬ لعمل منشن مخفي ⟭*
❀╎.ترقيه
*┇↜⟬ لترقية عضو عادي ⟭*
❀╎.تنزيل
*┇↜⟬ لتنزيل من منصب مشرف ⟭*
❀╎.حذف
*┇↜⟬ يحذف البوت الرسائل ⟭*
❀╎.قروب
*┇↜⟬ لاعدادات القروب ⟭*
❀╎.خالقروب
*┇↜⟬ لتغيير خلفية القروب ⟭*
❀╎.الروابط
*┇↜⟬ لطرد اللي يرسلو روابط ⟭*
❀╎.اختصار
*┇↜⟬ يختصر رابطك ⟭*
❀╎.انذار
*┇↜⟬ يوزع انذارات ⟭*
❀╎.انذارات
*┇↜⟬ لمعرفة عدد انذاراتك ⟭*
❀╎.حذف_انذار
*┇↜⟬ لحذف احد الانذارات ⟭*
❀╎.الترحيب
*┇↜⟬ لتشغيل الترحيب ⟭*
❀╎.التوديع
*┇↜⟬ لتشغيل التوديع ⟭*
⌬━─━｢الاعضاء｣━─━⌬
❀╎.ملصق
*┇↜⟬ لعمل ملصق ⟭*
❀╎.ملصقي
*┇↜⟬ لصناعة ملصق بحقوقك ⟭*
❀╎.مساعده
*┇↜⟬ يرسلك الدعم بالخاص ⟭*
❀╎.بروفايل
*┇↜⟬ يجيبلك تفاصيلك ⟭*
❀╎.رانك
*┇↜⟬ تشوف مستواك ⟭*
❀╎.المتصدرين
*┇↜⟬ لرؤية المتصدرين بالبوت ⟭*
❀╎.الوقت
*┇↜⟬ لمعرفة الساعه ⟭*
⌬━─━｢الدعم｣━─━⌬
｢  https://chat.whatsapp.com/Fld2cn1jPaT6yAyPa1jjv2  ｣
⌬━─━｢تسليه｣━─━⌬
❀╎.تطقيم
*┇↜⟬ يجلبلك تطقيمات ⟭*
❀╎.نرد
*┇↜⟬ رمي النرد ⟭*
❀╎.بوكيمون
*┇↜⟬ صور وحوش البوكيمون ⟭*
❀╎.حيوانات
*┇↜⟬ صور حيوانات ⟭*
❀╎.قطط
*┇↜⟬ صور قطط ⟭*
❀╎.احزر
*┇↜⟬ تحزر شخصيات انمي ⟭*
❀╎.خلفية
*┇↜⟬ يعطيك خلفيات عشوائيه ⟭*
❀╎.شبيهي
*┇↜⟬ يجيبلك شبيهك ⟭*
❀╎.شخص
*┇↜⟬ شخص غبي زي كذا  ⟭*
❀╎.س
*┇↜⟬ يعطيك سؤال ⟭*
❀╎.ح
*┇↜⟬ سؤال وجاوب بصراحه ⟭*
❀╎.هل
*┇↜⟬ تسأل البوت ⟭*
❀╎.وظيفتي
*┇↜⟬ تحصل وظيفه ⟭*
❀╎.كت
*┇↜⟬ للفعاليات⟭*
⌬━─━｢اكس او｣━─━⌬
❀╎.اكس
*┇↜⟬ للعب اكس او ⟭*
*❀╎حذفها/لحذف الجوله*
⌬━─━｢البنك｣━─━⌬
❀╎.راتبي
*┇↜⟬ يعطيك راتب كل 24h ⟭*
❀╎.تحويل /للمشرفين
*┇↜⟬ اضافة اموال للاعضاء ⟭*
❀╎.زرف /للمشرفين
*┇↜⟬ اخذ مال من الاعضاء ⟭*
❀╎.اموالي
*┇↜⟬ معرفة مقدار مالك ⟭*
❀╎.صفر او .نهب /للمطور
*┇↜⟬ ياخذ كل اموالك ⟭*
⌬━─━｢النهايه｣━─━⌬ 
`

                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "الدعم",
            desc: "list menu",
            category: "general",
            react: "😽"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━〘 ` +fancytext('RAIZEL-SUPPORT', 58)+ ` 〙━─⊷`
            str += '' + `*⺀دعم قروب رايزل بوت نورتونا⺀*\nhttps://chat.whatsapp.com/Fld2cn1jPaT6yAyPa1jjv2`
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str ,footer: tlang().footer, headerType: 4 })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌لا يوجد امر كهذا.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
