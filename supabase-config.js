const SUPABASE_URL = 'https://cobjizqwmppbhzlgevxn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_lfPJhfXbG9SUtJlSCDl3kg_TVHK2_2m';

if (window.supabase) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase initialisé avec succès !");
} else {
    console.error("Erreur : La librairie Supabase n'est pas chargée.");
}
