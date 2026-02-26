// 登录 API (需要配置 Supabase)
// 这是一个简化版本

const SUPABASE_URL = 'your-project.supabase.co'
const SUPABASE_KEY = 'your-anon-key'

export default async function handler(request, response) {
  const { email, action } = request.body
  
  if (action === 'send_magic_link') {
    // 生成登录链接
    const magicLink = `https://yangxiaohu.vercel.app/login?token=${Date.now()}`
    
    // 发送邮件 (需要配置邮件服务)
    // 这里可以接入 SendGrid, Mailgun 等
    
    return response.json({ 
      success: true, 
      message: '登录链接已发送到邮箱' 
    })
  }
  
  if (action === 'verify') {
    // 验证登录链接
    return response.json({ 
      success: true, 
      user: { email: 'user@example.com' } 
    })
  }
  
  return response.status(400).json({ error: 'Invalid action' })
}
