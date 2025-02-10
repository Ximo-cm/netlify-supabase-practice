document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://pwykigayikunqmqzraqs.supabase.co/rest/v1/example-projecte', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3eWtpZ2F5aWt1bnFtcXpyYXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTk0NjUsImV4cCI6MjA1NDQ5NTQ2NX0.9uQb77rpaZNOLvBdttL5Xhky04Wb2Xzw3xnD4fNz02c',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3eWtpZ2F5aWt1bnFtcXpyYXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTk0NjUsImV4cCI6MjA1NDQ5NTQ2NX0.9uQb77rpaZNOLvBdttL5Xhky04Wb2Xzw3xnD4fNz02c'
	    'Content-Type': 'application/json'  
  },
	mode:"cors"
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
