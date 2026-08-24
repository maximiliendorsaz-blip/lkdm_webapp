const SUPABASE_URL = 'VOTRE_URL_ICI';
const SUPABASE_ANON_KEY = 'VOTRE_CLE_PUBLIQUE_ICI';

if (window.supabase) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase initialisé avec succès !");
} else {
    console.error("Erreur : La librairie Supabase n'est pas chargée.");
}
