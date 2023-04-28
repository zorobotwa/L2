
const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "ملاحظة",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("")
            await addnote(text)
            return citel.reply(`تم`)

        }
    )
 
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "فك_البان",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("هذا الأمر خاص بالمطور")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("منشن شخص")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} تم فك البان عن`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${pushnamer} مبند مسبقا`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${pushnamer} يمكنه استعمال البوت الان`)
                    }
                })
            } catch {
                return citel.reply("منشن شخص")
            }


        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "ترجم",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const translatte = require("translatte");
            if (!citel.quoted) return citel.reply("رد على نص");
            if (!citel.quoted) return citel.reply(`رد على نص`);
            let textt = citel.quoted.text;
            whole = await translatte(textt, {
                from: text[1] || "auto",
                to: text.split(" ")[0] || "ar",
            });
            if ("text" in whole) {
                return await citel.reply("" + whole.text + "");
            }

        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "حذف_ملاحظة",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`تم حذف الملاحظة رقم ${text.split(" ")[0]}\ `)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "حذف_ملاحظات",
            filename: __filename,
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`تم حذف جميع الملاحظات`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "بان",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`منشن شخص`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`تم حضر ${pushnamer} من استخدام البوت`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} محضور مسبقا`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`تم حضر ${pushnamer} من استخدام البوت`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("منشن شخص ")
            }


        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "hshsvshshsvsyw",
        filename: __filename,
              },
              async(Void, citel, text, isAdmins) => {
        const alivtxt = `
        ⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄
  ⧉ -منشن
  ⧉ منشن جماعي لكل الاعضاء
   
  ⧉ -مخفي
  ⧉ منشن مخفي لكل الاعضاء    
   
  ⧉ -ترقية
  ⧉ ترقية عضو لمشرف 
   
  ⧉ -تخفيض
  ⧉ تخفيض مشرف لعضو  
  
  ⧉ -طرد
  ⧉ طرد شخص من القروب
      
  ⧉ -انذار
  ⧉ اعطاء لنذار لاحد
      
  ⧉ -انذارات
  ⧉ معرفة كل الانذارات
      
  ⧉ -حذف_انذار
  ⧉ حذف كل انذارات الشخص
  
  ⧉ -شغل الاحداث 
  ⧉ تشغيل الترحيب بالأعضاء وتوديعهم
  
  ⧉ -ترحيب_دخول
  ⧉ تغير رسالة الترحيب بالأعضاء الجدد
  
  ⧉ -رسالة_خروج
  ⧉ تغيير رسالة توديع المغادرين
  
  ⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄
  
  ⧉ -رابطه
  ⧉ انشاء رابط رقم شخص  
  
  ⧉ -مساعدة
  ⧉ قروب البوت للمساعدة
  
  ⧉ -المطور
  ⧉ معرفة مطور البوت
  
  ⧉ -نرد
  ⧉ رمي النرد 
  
  ⧉ -اختصار
  ⧉ اختصار روابط
  
  ⧉ -ملصق
  ⧉ تحويل صورة لملصق
  
  ⧉ -ملصقي
  ⧉ ملصق بحقوقك او زرف ملصق
  
  ⧉ -شخص
  ⧉ مثال : شخص غبي  
   
  ⧉ -عكس
  ⧉ عكس الكلام 
   
  ⧉ -بنتر 
  ⧉ البحث عن صورة من تطبيق بنتريست
  ⧉ ملاحظة :اكتب الاسم بالانجليزي 
   
  ⧉ -تطقيم
  ⧉ جلب تطقيمات  
   
  ⧉ -ترجم
  ⧉ الترجمة للعربي
      
  ⧉ -شبيهي
  ⧉ معرفة شبيهك ونسبة الشبه
      
  ⧉ -اكس_او
  ⧉ لعبة اكس او
      
  ⧉ -ح
  ⧉ سؤال واجب بصراحة
      
  ⧉ -س
  ⧉ سؤال انمي
      
  ⧉ -هل
  ⧉ اسال البوت عن شيئ
      
  ⧉ -احزر
  ⧉ احزر من في الصورة 
      
  ⧉ -خلفية
  ⧉ صور انمي بجودة فل
      
  ⧉ -طلب
  ⧉ ارسال طلبية عن فكرة للمطور يضيفها
      
  ⧉ -كتابة 
  ⧉ زخرفة الاسماء
      
  ⧉ -قطط
  ⧉ صور قطط
      
  ⧉ -حيوانات
  ⧉ صور حيوانات
      
  ⧉ -بوكيمون
  ⧉ صور وحوش البوكيمون

  ⧉ -صفحة
  ⧉ انشاء صفحة موقع، الصدق مدري شالفايدة بس يلا اجرب
      
      
  ⋄═──═◞🏦 قائمة البنك 🏦◟━──━⋄
      
  ⧉ -ضف
  ⧉ اضافة اموال لاعضاء 
      
  ⧉ -جرد
  ⧉ نقص اموال الاعضاء 
      
  ⧉ -اموالي
  ⧉ معرفة مقدار مالك
      
      
  ⧉ مـلاحـظـة : قائمة البنك مدفوعة لذلك لن تشتغل الا لمن لديه اشتراك البنك.
      `;
        let aliveMessage = {
            image: {
      url: await botpic(),
            },
            caption: alivtxt,
            footer: tlang().footer,
            headerType: 4,
        };
         return Void.sendMessage(citel.chat, aliveMessage, {
            quoted: citel,
        });
      
              }
          )
          //---------------------------------------------------------------------------
      cmd({
              pattern: "ملاحظات",
              filename: __filename,
          },
          async(Void, citel, text,{ isCreator }) => {
              const { tlang } = require('../lib')
              if (!isCreator) return citel.reply(tlang().owner)
              const note_store = new Array()
              let leadtext = `الملاحظات التي تم تسجيلها هي:-\n\n`
              leadtext += await allnotes()
              return citel.reply(leadtext)
      
          }
      )
      
