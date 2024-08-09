
    const form = document.getElementById('reminderForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const day = document.getElementById('day').value;
        const time = document.getElementById('time').value;
        const activity = document.getElementById('activity').value;
        const reminderTime = new Date();
        reminderTime.setHours(time.split(':')[0]);
        reminderTime.setMinutes(time.split(':')[1]);
        reminderTime.setSeconds(0);
        const now = new Date();
        let timeToReminder = reminderTime.getTime() - now.getTime();
        if (timeToReminder < 0) {
            timeToReminder += 86400000; // If the time is in the past, add 24 hour
        }
        setTimeout(() => {
            alert(`Reminder: ${activity}`);
            const audio = new Audio('chime.mp3'); // Make sure to add a chime soun
            audio.play();
        }, timeToReminder);
    });
