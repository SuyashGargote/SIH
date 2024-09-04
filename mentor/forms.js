function startVideoCall() {
    const videoCallFrame = document.getElementById('video-call-frame');
    videoCallFrame.src = 'https://meet.jit.si/your-custom-room'; // Replace with your video call URL
    videoCallFrame.style.display = 'block';
}

function openCalendar() {
    const calendarFrame = document.getElementById('calendar-frame');
    calendarFrame.src = 'https://calendar.google.com/calendar/embed?src=your_calendar_id'; // Replace with your calendar embed URL
    calendarFrame.style.display = 'block';
}
