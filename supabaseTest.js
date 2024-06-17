import { supa } from "./supabase.js";

// 1. **Alle Filme abrufen**: Hole alle Spalten aller Wohnungen aus der Tabelle `Apartments`.

async function selectAllApartments() {
    const { data, error } = await supa.from("Apartments").select();
  
    return data;
  }

console.log('Alle Filme in der DB: ', selectAllApartments());