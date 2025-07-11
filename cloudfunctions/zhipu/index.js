const axios = require('axios')

const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'
const ZHIPU_API_KEY = '35196ce086524d88914b44c0beb0377d.RAvkLrlOJkg27hLL'

exports.main = async (event, context) => {
  const { message, imageUrl } = event;

  console.log('[zhipuChat] event:', { hasImageUrl: !!imageUrl, message, imageUrl });

  if (!message && !imageUrl) {
    return { code: 400, msg: '缺少消息或图片' }
  }

  try {
    let payload;
    if (imageUrl) {
      // Vision: include image URL in messages array
      payload = {
        model: 'glm-4v',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: message || '描述这张图片'
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageUrl
                }
              }
            ]
          }
        ]
      };
      console.log('[deepseekChat] sending vision payload:', { message, imageUrl });
    } else {
      // Text only
      payload = {
        model: 'glm-4v',
        messages: [{ role: 'user', content: message }]
      };
    }
    const response = await axios.post(
      ZHIPU_API_URL,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${ZHIPU_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 seconds
      }
    )
    return { code: 0, data: response.data }
  } catch (err) {
    return { code: 500, msg: err.message, detail: err.response?.data }
  }
} 
