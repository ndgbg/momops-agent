import { useState } from 'react'

function ChatAgent({ activities, onClose, embedded }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm your MomOps assistant. Ask me anything about your baby's schedule, patterns, or get advice!" }
  ])
  const [input, setInput] = useState('')

  const analyzeSchedule = () => {
    const feeds = activities.filter(a => a.type === 'feed')
    const naps = activities.filter(a => a.type === 'nap')
    const diapers = activities.filter(a => a.type === 'diaper')
    
    return {
      totalFeeds: feeds.length,
      totalNaps: naps.length,
      totalDiapers: diapers.length,
      avgNapDuration: naps.length > 0 
        ? Math.round(naps.reduce((sum, n) => sum + (n.duration || 0), 0) / naps.length)
        : 0,
      lastFeed: feeds[0],
      lastNap: naps[0]
    }
  }

  const generateResponse = (question) => {
    const q = question.toLowerCase()
    const stats = analyzeSchedule()
    
    if (q.includes('feed') || q.includes('eat') || q.includes('hungry')) {
      if (stats.lastFeed) {
        const minutesAgo = Math.round((new Date() - new Date(stats.lastFeed.timestamp)) / 60000)
        const hoursAgo = Math.floor(minutesAgo / 60)
        return `Your baby last fed ${hoursAgo}h ${minutesAgo % 60}m ago. Babies typically feed every 2-3 hours. ${minutesAgo > 180 ? "It might be time for another feeding soon!" : "You're on track!"}`
      }
      return "I don't see any feeding records yet. Start tracking to get personalized insights!"
    }
    
    if (q.includes('nap') || q.includes('sleep') || q.includes('tired')) {
      if (stats.lastNap) {
        const minutesAgo = Math.round((new Date() - new Date(stats.lastNap.timestamp)) / 60000)
        const avgDuration = stats.avgNapDuration
        return `Last nap was ${Math.floor(minutesAgo / 60)}h ${minutesAgo % 60}m ago. Average nap duration: ${Math.floor(avgDuration / 60)}h ${avgDuration % 60}m. Babies under 1 year typically need 2-4 naps per day.`
      }
      return "Track some naps first, and I'll help you identify sleep patterns!"
    }
    
    if (q.includes('pattern') || q.includes('schedule') || q.includes('routine')) {
      return `Today's summary:\n• ${stats.totalFeeds} feedings\n• ${stats.totalNaps} naps\n• ${stats.totalDiapers} diaper changes\n\nYou're doing great! Consistency helps establish routines.`
    }
    
    if (q.includes('diaper') || q.includes('poop') || q.includes('pee')) {
      return `You've logged ${stats.totalDiapers} diaper changes. Newborns typically need 8-12 changes per day. Watch for at least 6 wet diapers daily as a sign of good hydration.`
    }
    
    if (q.includes('help') || q.includes('what') || q.includes('how')) {
      return "I can help you with:\n• Feeding schedules and patterns\n• Sleep tracking and tips\n• Diaper change frequency\n• Daily summaries\n• General baby care advice\n\nJust ask me anything!"
    }
    
    return "I'm here to help with your baby's schedule! Try asking about feedings, naps, patterns, or general baby care tips."
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage = { role: 'user', text: input }
    setMessages([...messages, userMessage])
    
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages(prev => [...prev, { role: 'assistant', text: response }])
    }, 500)
    
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const content = (
    <>
      {!embedded && (
        <div className="modal-header">
          <h2>Assistant</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      )}
      {embedded && (
        <div className="modal-header">
          <div className="header-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="10" r="1.5" fill="#86EFAC"/>
              <circle cx="12" cy="10" r="1.5" fill="#86EFAC"/>
              <circle cx="16" cy="10" r="1.5" fill="#86EFAC"/>
            </svg>
          </div>
          <h2>Chat Assistant</h2>
        </div>
      )}
        
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about feeding, naps, patterns..."
            className="chat-input"
          />
          <button className="send-btn" onClick={handleSend}>
            Send
          </button>
        </div>
    </>
  )
  
  if (embedded) {
    return <div className="embedded-view chat-embedded">{content}</div>
  }
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}

export default ChatAgent
