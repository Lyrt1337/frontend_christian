console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://dsvdewmlmwtjlzxcuxjw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzdmRld21sbXd0amx6eGN1eGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjgyODAsImV4cCI6MjAyNjAwNDI4MH0.88y3cQw_ZBcj6qijVmHnd2dmfIUO8yrAMupAMQ_LjZ0'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }