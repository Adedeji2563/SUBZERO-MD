/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© I smell A Noobie Copy Cat🤣⚠
Bro there is still time to deploy dont clone i repeat dont clone🫡
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/

const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "subzero menu",
    category: "menu",
    react: "✅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = "\n\n╭╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺◈\n┊┌⟝⟢ " + config.BOT_NAME + " ⟣⟞\n┊│╭─────────────···◈\n┊┴│\n┊➮│▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ғʀᴀɴᴋ (🇿🇼)*\n┊➮│▧ *ᴍᴏᴅᴇ* : *[" + config.MODE + "]*\n┊➮│▧ *ᴘʀᴇғɪx* : *[" + config.PREFIX + "]*\n┊➮│▧ *ʀᴀᴍ* : " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n┊➮│▧ *ɴᴀᴍᴇ ʙᴏᴛ* : *sᴜʙᴢᴇʀᴏ ᴍᴅ*\n┊➮│▧ *ᴠᴇʀsɪᴏɴ* : *1.0.2*\n┊➮│▧ *ᴜᴘᴛɪᴍᴇ* : " + runtime(process.uptime()) + "\n┊➮│▸\n┬   │\n│   ╰────────────···◈\n└──────────────────···◈\n\n> ＳＵＢＺＥＲＯ - ＭＤ- ＢＯＴ\n\n\n*🏮 `SUBZERO DOWNLOADER` 🏮* \n\n╭─────────────···◈\n*┋* *⟡ ғʙ*\n*┋* *⟡ ɪɴꜱᴛᴀ*\n*┋* *⟡ sᴘᴏᴛɪғʏ*\n*┋* *⟡ ᴠɪᴅᴇᴏ*\n*┋* *⟡ ɢᴅʀɪᴠᴇ*\n*┋* *⟡ ᴛᴡɪᴛᴛᴇʀ*\n*┋* *⟡ ᴛᴛ*\n*┋* *⟡ ᴍᴇᴅɪᴀғɪʀᴇ*\n*┋* *⟡ ꜱᴏɴɢ*\n*┋* *⟡ ᴘʟᴀʏ*\n*┋* *⟡ ᴠɪᴅᴇᴏ*\n*┋* *⟡ ᴠɪᴅᴇᴏ2*\n*┋* *⟡ ɪᴍɢ*\n*┋* *⟡ ᴀᴘᴋ*\n*┋* *⟡ ʏᴛᴍᴘ3*\n*┋* *⟡ ʏᴛᴍᴘ4*\n*┋* *⟡ ᴘʟᴀʏ2*\n*┋* *⟡ ʙᴀɪsᴄᴏᴘᴇ*\n*┋* *⟡ ɢɪɴɪsɪsɪʟᴀ*\n*╰─────────────╶╶···◈*\n\n*🔎 `SEARCH-CMD` 🔍* \n\n╭─────────────···◈\n*┋* *⟡ ʏᴛꜱ*\n*┋* *⟡ ʏᴛᴀ*\n*┋* *⟡ ʟᴏʟɪ*\n*┋* *⟡ ᴍᴏᴠɪᴇɪɴғᴏ*\n*┋* *⟡ ɢᴏᴏɢʟᴇ*\n*┋* *⟡ ʙɪʙʟᴇ*\n*┋* *⟡ ᴍᴏᴠɪᴇ*\n*┋* *⟡ ᴡᴇᴀᴛʜᴇʀ*\n*╰─────────────╶╶···◈*\n\n*🧠 `AI-CMD` 🧠* \n\n╭─────────────···◈\n*┋* *⟡ ɢᴘᴛ*\n*┋* *⟡ ᴀɪ*\n*┋* *⟡ sᴜʙᴢᴇʀᴏ*\n*┋* *⟡ ɢᴇᴍɪɴɪ*\n*┋* *⟡ ʙɪɴɢ*\n*┋* *⟡ ᴄᴏᴘɪʟᴏᴛ*\n*┋* *⟡ sᴜʙᴢᴇʀᴏ*\n*┋* *⟡ ɢᴘᴛ4*\n*┋* *⟡ ʟʟᴀᴍᴀ2*\n*╰─────────────╶╶···◈*\n\n*👨‍💻 `OWNER-CMD` 👨‍💻* \n\n╭─────────────···◈\n*┋* *⟡ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*\n*┋* *⟡ sᴇᴛᴛɪɴɢs*\n*┋* *⟡ ᴏᴡɴᴇʀ*\n*┋* *⟡ ʀᴇᴘᴏ*\n*┋* *⟡ ʙᴏᴛsᴇᴛᴛɪɴɢs*\n*┋* *⟡ ꜱʏꜱᴛᴇᴍ*\n*┋* *⟡ ᴜᴘᴅᴀᴛᴇ*\n*┋* *⟡ ꜱᴛᴀᴛᴜꜱ*\n*┋* *⟡ ʙʟᴏᴄᴋ*\n*┋* *⟡ ᴜɴʙʟᴏᴄᴋ*\n*┋* *⟡ sʜᴜᴛᴅᴏᴡɴ*\n*┋* *⟡ ᴄʟᴇᴀʀᴄʜᴀᴛs*\n*┋* *⟡ sᴇᴛᴘᴘ*\n*┋* *⟡ ʙʀᴏᴀᴅᴄᴀsᴛ*\n*┋* *⟡ ᴊɪᴅ*\n*┋* *⟡ ɢᴊɪᴅ*\n*┋* *⟡ ʀᴇꜱᴛᴀʀᴛ*\n*╰─────────────╶╶···◈*\n\n*👥 `GROUP-CMD` 👥* \n\n╭─────────────···◈\n*┋* *⟡ ʀᴇᴍᴏᴠᴇ*\n*┋* *⟡ ᴅᴇʟᴇᴛᴇ*\n*┋* *⟡ ᴀᴅᴅ*\n*┋* *⟡ ᴋɪᴄᴋ*\n*┋* *⟡ ᴋɪᴄᴋᴀʟʟ*\n*┋* *⟡ sᴇᴛɢᴏᴏᴅʙʏᴇ*\n*┋* *⟡ sᴇᴛᴡᴇʟᴄᴏᴍᴇ*\n*┋* *⟡ ᴘʀᴏᴍᴏᴛᴇ*\n*┋* *⟡ ᴅᴇᴍᴏᴛᴇ*\n*┋* *⟡ ᴛᴀɢᴀʟʟ*\n*┋* *⟡ ɢᴇᴛᴘɪᴄ*\n*┋* *⟡ ɪɴᴠɪᴛᴇ*\n*┋* *⟡ ʀᴇᴠᴏᴋᴇ*\n*┋* *⟡ ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*\n*┋* *⟡ ᴀʟʟʀᴇǫ*\n*┋* *⟡ ᴍᴜᴛᴇ*\n*┋* *⟡ ᴜɴᴍᴜᴛᴇ*\n*┋* *⟡ ʟᴏᴄᴋɢᴄ*\n*┋* *⟡ ᴜɴʟᴏᴄᴋɢᴄ*\n*┋* *⟡ ʟᴇᴀᴠᴇ*\n*┋* *⟡ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*\n*┋* *⟡ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*\n*┋* *⟡ ᴊᴏɪɴ*\n*┋* *⟡ ʜɪᴅᴇᴛᴀɢ*\n*┋* *⟡ ɢɪɴғᴏ*\n*┋* *⟡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*\n*┋* *⟡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*\n*┋* *⟡ ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*\n*┋* *⟡ sᴇɴᴅᴅᴍ*\n*╰─────────────╶╶···◈*\n\n*📃 `INFO-CMD` 📃* \n\n╭─────────────···◈\n*┋* *⟡ ᴍᴇɴᴜ*\n*┋* *⟡ ᴍᴇɴᴜ2*\n*┋* *⟡ ᴍᴇɴᴜ3*\n*┋* *⟡ ᴀʙᴏᴜᴛ*\n*┋* *⟡ sᴄʀɪᴘᴛ*\n*┋* *⟡ ʀᴇᴘᴏ*\n*┋* *⟡ ᴍʀғʀᴀɴᴋ*\n*┋* *⟡ ᴀʟɪᴠᴇ*\n*┋* *⟡ ʙᴏᴛɪɴꜰᴏ*\n*┋* *⟡ ꜱᴛᴀᴛᴜꜱ*\n*┋* *⟡ ꜱᴜᴘᴘᴏʀᴛ*\n*┋* *⟡ ᴘɪɴɢ*\n*┋* *⟡ ᴘɪɴɢ2*\n*┋* *⟡ sᴜʙᴢᴇʀᴏɪɴᴄ*\n*┋* *⟡ ꜱʏꜱᴛᴇᴍ*\n*┋* *⟡ ᴘᴀɪʀ*\n*╰─────────────╶╶···◈*\n\n*🍭 `CONVERTER-CMD` 🍭* \n\n╭─────────────···◈\n*┋* *⟡ sᴛɪᴄᴋᴇʀ*\n*┋* *⟡ ᴛʀᴛ*\n*┋* *⟡ ᴛᴛs*\n*┋* *⟡ ᴛɢsᴛɪᴄᴋᴇʀ*\n*┋* *⟡ ʟᴏɢᴏ*\n*┋* *⟡ ᴠᴠ*\n*╰─────────────╶╶···◈*\n\n*⚙️ `SUBZERO-SETTINGS` ⚙️* \n\n╭─────────────···◈\n*┋* *⟡ sᴜʙᴢᴇʀᴏᴇɴᴠ*\n*┋* *⟡ ᴜᴘᴅᴀᴛᴇ*\n*┋* *⟡ ᴘɪɴɢ*\n*┋* *⟡ ᴍʀғʀᴀɴᴋ*\n*┋* *⟡ ᴏᴡɴᴇʀ*\n*┋* *⟡ sᴜʙᴢᴇʀᴏɪɴᴄ*\n*┋* *⟡ ᴀʙᴏᴜᴛ*\n*┋* *⟡ sᴇᴛᴛɪɴɢs*\n*┋* *⟡ ᴀʟɪᴠᴇ*\n*╰─────────────╶╶···◈*\n\n*♻️ `RANDOM-CMD` ♻️* \n\n╭─────────────···◈\n*┋* *⟡ sᴜʙᴢᴇʀᴏᴇɴᴠ*\n*┋* *⟡ ᴅᴏɢ*\n*┋* *⟡ ᴀɴɪᴍᴇ*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ1*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ2*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ3*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ4*\n*┋* *⟡ ᴀɴɪᴍᴇɢɪʀʟ5*\n*╰─────────────╶╶···◈*\n\n*🎀 `WALLPAPERS-CMD` 🎀* \n\n╭─────────────···◈\n*┋* *⟡ ɪᴍɢ*\n*┋* *⟡ ᴡᴀʟʟᴘᴀᴘᴇʀ*\n*╰─────────────╶╶···◈*\n\n*❄️ `OTHER-CMD` ❄️* \n\n╭─────────────···◈\n*┋* *⟡ ᴛʀᴛ*\n*┋* *⟡ ᴊᴏᴋᴇ*\n*┋* *⟡ ꜰᴀᴄᴛ*\n*┋* *⟡ ɢɪᴛʜᴜʙ*\n*┋* *⟡ ɢᴘᴀꜱꜱ*\n*┋* *⟡ ʜᴀᴄᴋ*\n*┋* *⟡ ǫᴜᴏᴛᴇ*\n*┋* *⟡ ʀᴇᴘᴏ*\n*┋* *⟡ ᴛɢsᴛɪᴄᴋᴇʀ*\n*┋* *⟡ ᴅᴇꜰɪɴᴇ*\n*┋* *⟡ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ*\n*╰─────────────╶╶···◈*\n\n\n*━━━━━━━━━━━━━━━━━━━━*⁠⁠⁠⁠\n> ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ\n*━━━━━━━━━━━━━━━━━━━━━*\n";

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '❄️ 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 ❄️',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3
        await conn.sendMessage(from, { //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/blob/main/audios/subzero-menu.mp3
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },//https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  SUBZERO SC BY MR FRANK
