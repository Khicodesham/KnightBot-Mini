/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2349041863971'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Might', 'Tempest'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'New Rage bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXa+iSBT8L/2qGUFQ0eQmi4iICoIofmzmoS800AgNNg2IE//7Bp07cx92J3ff+it16lTV6R+AZLhAK9SAyQ+QU1xBhtola3IEJmBaBgGioAt8yCCYgM1sFfci1b0NOr35XjONg1lcOnVk2+VOiq8R1jkr4gVM3P0beHRBXr4n2PsD4JxJF21mefK2md8d7VLRKOuEgS8cEj4TRG24lFClmmhd12/g0SJCTDEJ1TxCKaIwWaHGgph+jT63IklW8mZa0nim3hqhYjBMt9p1U99tlo+OJ8O8XceH6VH/Gv3C2Csq2e6O4cY5J0O8T4P7HJ38gO8rp9XG4M5j97TfcLZqv+gXOCTI131EGGbNl3Xn5jt3uDrVWqPeij7qKfXeNQ4XGDvu7dQcuXfzYO4GV07Uvqj7lSvN8N0cSefFXuNJx1CVhXSJDm7cMXC25OFJJRarrrpz+Uzcoh9Zufwf3TPLHdTT2HTO9Hxj/fomnuuaDGvNke7raLHzpe2NSH2aasbX6FeWv3KQLr+vZtKMyt6mb9vlYFBvys7V5g4hl589hk1eOHzSHbKS/onlWPUcBzEu7C9NC5+WsRxypu6t8xpv5aq4wd5yR8rjeWb4A18cWY1b9WOR7lZHmAZ3YznEC14/ShYR72ycNee615vG8tuzowtqdB9M+EcXUBTiglHIcEaeZ+NhF0C/cpBHEXvKC069jmlHl6oeJ7ZrupZlSQdB17VaDiziCambJNSKs7qJuDfQBTnNPFQUyF/ggmW0MVBRwBAVYPL39y4g6MZexrXlBL4LAkwLtidlnmTQ/3D14xJ6XlYS5jTEU9oFomDC/T5GjGESFq2OJYHUi3CFlAiyAkwCmBToV4eIIh9MGC3Rr6lVMr8Vfq7Z8k4VJNAF6dMQ7IMJ6AvimBN5aSiMR/xEHP1VfKtbXJjn3whioAuS17u+KIyEIScOh6OBMG5fthePXxRbRB8xiJMCTICyqjg+MxTVDFhqcJom66GshDL43dJHNl7aT9P5VK/S1d3wOgeP25XHCvemseCHkqVxyaGQkTxytlIl12//AgImwJNjp1csabwvc2O/K+L1FpvCWL9RIjkXpalLXjwaQ2Nl88pVPebhbneS+s1AHyjiVb6u9bGt5vr8mJa2TCAfwUG5Veq3tpqPKuyhz8VWghh1FuTE3NGMyIlmYXPQN5OyL7uidh3vLpsk2PJImt3NHpsNBH94Pl8PRxTXpehv51lOmmNx3ipTrPEXxXNriXuPw1dqn1OT/Pyt8DNPrVntNsDoOfwEthZ+wbwX8zZk3KP7CeTnf/IfMzm1z5HtrAe4uC+shJjqKBmJVX0aCydrdmNLl8qLcMNdgnVtgMfjexfkCWRBRlMwAZD4NMM+6AKalW1qdRJkfyimyKE+tUOlbT2BBZN/T8IOp6hgMM3BhB+N+gOOG46l1yuLZvkCFlGrgibKaQke/wDnd7LrVwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Nee. ',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
