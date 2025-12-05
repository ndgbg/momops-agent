// Sample data for testing BabyBloom
export const generateSampleData = () => {
  const now = new Date()
  const activities = []
  
  // Helper to create timestamps going back in time
  const hoursAgo = (hours) => {
    const date = new Date(now)
    date.setHours(date.getHours() - hours)
    return date.toISOString()
  }
  
  const daysAgo = (days, hours = 0) => {
    const date = new Date(now)
    date.setDate(date.getDate() - days)
    date.setHours(date.getHours() - hours)
    return date.toISOString()
  }
  
  // Today's activities
  activities.push(
    {
      id: Date.now() + 1,
      type: 'feed',
      feedType: 'breast',
      side: 'left',
      timestamp: hoursAgo(1),
      notes: 'Good feeding session'
    },
    {
      id: Date.now() + 2,
      type: 'diaper',
      diaperType: 'pee',
      timestamp: hoursAgo(1.5)
    },
    {
      id: Date.now() + 3,
      type: 'nap',
      duration: 45,
      startTime: hoursAgo(3),
      endTime: hoursAgo(2.25),
      timestamp: hoursAgo(3),
      notes: 'Slept well'
    },
    {
      id: Date.now() + 4,
      type: 'feed',
      feedType: 'bottle',
      amount: 4,
      timestamp: hoursAgo(4),
      notes: 'Formula'
    },
    {
      id: Date.now() + 5,
      type: 'diaper',
      diaperType: 'both',
      timestamp: hoursAgo(4.5)
    },
    {
      id: Date.now() + 6,
      type: 'medication',
      medicationName: 'Vitamin D',
      dosage: '1 drop',
      timestamp: hoursAgo(5)
    },
    {
      id: Date.now() + 7,
      type: 'nap',
      duration: 90,
      startTime: hoursAgo(7),
      endTime: hoursAgo(5.5),
      timestamp: hoursAgo(7)
    },
    {
      id: Date.now() + 8,
      type: 'feed',
      feedType: 'breast',
      side: 'both',
      timestamp: hoursAgo(7.5)
    },
    {
      id: Date.now() + 9,
      type: 'other',
      activityType: 'bath',
      timestamp: hoursAgo(8),
      notes: 'Evening bath time'
    }
  )
  
  // Yesterday's activities
  activities.push(
    {
      id: Date.now() + 10,
      type: 'feed',
      feedType: 'breast',
      side: 'right',
      timestamp: daysAgo(1, 2)
    },
    {
      id: Date.now() + 11,
      type: 'diaper',
      diaperType: 'pee',
      timestamp: daysAgo(1, 3)
    },
    {
      id: Date.now() + 12,
      type: 'nap',
      duration: 60,
      startTime: daysAgo(1, 5),
      endTime: daysAgo(1, 4),
      timestamp: daysAgo(1, 5)
    },
    {
      id: Date.now() + 13,
      type: 'feed',
      feedType: 'bottle',
      amount: 3.5,
      timestamp: daysAgo(1, 6)
    },
    {
      id: Date.now() + 14,
      type: 'diaper',
      diaperType: 'poop',
      timestamp: daysAgo(1, 7)
    },
    {
      id: Date.now() + 15,
      type: 'other',
      activityType: 'tummytime',
      timestamp: daysAgo(1, 8),
      notes: '10 minutes'
    },
    {
      id: Date.now() + 16,
      type: 'nap',
      duration: 120,
      startTime: daysAgo(1, 10),
      endTime: daysAgo(1, 8),
      timestamp: daysAgo(1, 10)
    },
    {
      id: Date.now() + 17,
      type: 'feed',
      feedType: 'breast',
      side: 'left',
      timestamp: daysAgo(1, 11)
    },
    {
      id: Date.now() + 18,
      type: 'medication',
      medicationName: 'Tylenol',
      dosage: '2.5ml',
      timestamp: daysAgo(1, 12),
      notes: 'For teething pain'
    }
  )
  
  // 2 days ago
  activities.push(
    {
      id: Date.now() + 19,
      type: 'feed',
      feedType: 'breast',
      side: 'both',
      timestamp: daysAgo(2, 3)
    },
    {
      id: Date.now() + 20,
      type: 'diaper',
      diaperType: 'pee',
      timestamp: daysAgo(2, 4)
    },
    {
      id: Date.now() + 21,
      type: 'nap',
      duration: 75,
      startTime: daysAgo(2, 6),
      endTime: daysAgo(2, 4.75),
      timestamp: daysAgo(2, 6)
    },
    {
      id: Date.now() + 22,
      type: 'feed',
      feedType: 'bottle',
      amount: 4.5,
      timestamp: daysAgo(2, 7)
    },
    {
      id: Date.now() + 23,
      type: 'other',
      activityType: 'milestone',
      timestamp: daysAgo(2, 8),
      notes: 'First smile!'
    },
    {
      id: Date.now() + 24,
      type: 'diaper',
      diaperType: 'both',
      timestamp: daysAgo(2, 9)
    }
  )
  
  // 3 days ago
  activities.push(
    {
      id: Date.now() + 25,
      type: 'feed',
      feedType: 'breast',
      side: 'right',
      timestamp: daysAgo(3, 2)
    },
    {
      id: Date.now() + 26,
      type: 'nap',
      duration: 50,
      startTime: daysAgo(3, 4),
      endTime: daysAgo(3, 3.17),
      timestamp: daysAgo(3, 4)
    },
    {
      id: Date.now() + 27,
      type: 'diaper',
      diaperType: 'pee',
      timestamp: daysAgo(3, 5)
    },
    {
      id: Date.now() + 28,
      type: 'feed',
      feedType: 'bottle',
      amount: 3,
      timestamp: daysAgo(3, 6)
    },
    {
      id: Date.now() + 29,
      type: 'other',
      activityType: 'weight',
      timestamp: daysAgo(3, 8),
      notes: '12 lbs 4 oz'
    }
  )
  
  return activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

export const generateSampleSchedules = () => {
  return [
    {
      id: 1,
      type: 'nanny',
      title: 'Morning Nanny',
      person: 'Sarah Johnson',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '08:00',
      endTime: '13:00',
      hourlyRate: '22',
      notes: 'Prefers organic snacks. Has CPR certification.'
    },
    {
      id: 2,
      type: 'nanny',
      title: 'Evening Care',
      person: 'Maria Garcia',
      days: ['Monday', 'Wednesday', 'Friday'],
      startTime: '17:00',
      endTime: '20:00',
      hourlyRate: '20',
      notes: 'Great with bedtime routines.'
    },
    {
      id: 3,
      type: 'work',
      title: 'Work Schedule',
      person: 'Mom',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '09:00',
      endTime: '17:00',
      notes: 'Remote on Wednesdays'
    },
    {
      id: 4,
      type: 'activity',
      title: 'Baby Music Class',
      days: ['Tuesday', 'Thursday'],
      startTime: '10:00',
      endTime: '10:45',
      notes: 'Bring favorite toy'
    }
  ]
}
